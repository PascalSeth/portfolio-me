'use client';

import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useFBX, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

// Comprehensive ActionName type supporting all loaded animations
export type ActionName = "Typing" | "Warrior" | "Standing" | "Falling" | "Calling" | "Walking" | "Laying" | "Talking";

// Detailed single Avatar instance used heavily across the site (Services, Contact, etc)
export function Avatar({ actionName = "Typing", scale = 2.0 }: { actionName?: ActionName, scale?: number }) {
  const showShadows = actionName !== "Falling";
  return (
    <div className="absolute inset-0 w-full h-full z-10 overflow-visible pointer-events-auto [&>canvas]:!touch-pan-y">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 40 }} shadows={showShadows}>
        <ambientLight intensity={0.6} />
        <spotLight position={[5, 8, 5]} angle={0.4} penumbra={1} intensity={5} color="#22d3ee" castShadow={showShadows} />
        <spotLight position={[-5, 8, 2]} angle={0.4} penumbra={1} intensity={5} color="#d946ef" castShadow={showShadows} />
        <directionalLight position={[0, -2, -5]} intensity={2} color="#0ff" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <AvatarModel
            actionName={actionName}
            position={[0, actionName === "Falling" ? -0.5 : -2.6, 0]}
            rotation={[0, 0, 0]}
            scale={scale}
          />
          {showShadows && <ContactShadows position={[0, -2.6, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#22d3ee" />}
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}

// The epic immersive Hero Dual-Avatar Scene!
export function AvatarScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-10 overflow-visible pointer-events-auto [&>canvas]:!touch-pan-y">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 40 }} shadows>
        <ambientLight intensity={0.5} />
        <spotLight position={[8, 10, 8]} angle={0.4} penumbra={1} intensity={6} color="#22d3ee" castShadow />
        <spotLight position={[-8, 10, -2]} angle={0.4} penumbra={1} intensity={6} color="#d946ef" castShadow />
        <directionalLight position={[0, -2, -5]} intensity={2} color="#0ff" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <AvatarModel actionName="Typing" position={[-1.6, -3.2, 1.5]} rotation={[0, Math.PI / 6, 0]} scale={2.6} />
          <AvatarModel actionName="Warrior" position={[1.8, -3.2, -1.5]} rotation={[0, -Math.PI / 8, 0]} scale={2.8} />
          <ContactShadows position={[0, -3.2, 0]} opacity={0.7} scale={15} blur={2.5} far={4} color="#000" />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}

// Universal GLTF & Native Three.js Animation loader (clones scene safely, physically flawless animation execution loop)
function AvatarModel({ actionName, position, rotation, scale = 2.0 }: { actionName: ActionName, position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/66d01f8250a930dac18b05a9.glb");
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { animations: typingAnimation } = useFBX("/animations/Typing.fbx");
  const { animations: warriorAnimation } = useFBX("/animations/Warrior Idle.fbx");
  const { animations: standingAnimation } = useFBX("/animations/Standing Idle.fbx");
  const { animations: fallingAnimation } = useFBX("/animations/Falling Idle.fbx");
  const { animations: talkingAnimation } = useFBX("/animations/Talking On Phone.fbx");
  const { animations: layingAnimation } = useFBX("/animations/Male Laying Pose.fbx");

  /*
   * LEGENDARY WEBGL FIX:
   * Mixamo constantly exports animations with broken or missing bone namespaces (e.g. mixamorig:) 
   * depending on if you clicked "With Skin" or just randomly downloaded from their library.
   * This normalizer violently intercepts EVERY animation track and mathematically forces 
   * bone targets to instantly map to your unique ReadyPlayerMe character body!
   */
  const normalizeMixamoTracks = (clip: THREE.AnimationClip) => {
    clip.tracks.forEach(track => {
      if (track.name.includes('.quaternion') || track.name.includes('.position') || track.name.includes('.scale')) {
        // Strip the annoying 'mixamorig:' namespace that Mixamo forces on un-skinned exports!
        // ReadyPlayerMe avatars require purely named bones (e.g. "Hips", not "mixamorig:Hips")
        track.name = track.name.split(':').pop() || track.name;
      }
    });
  };

  if (typingAnimation.length) { typingAnimation[0].name = "Typing"; normalizeMixamoTracks(typingAnimation[0]); }
  if (warriorAnimation.length) { warriorAnimation[0].name = "Warrior"; normalizeMixamoTracks(warriorAnimation[0]); }
  if (standingAnimation.length) { standingAnimation[0].name = "Standing"; normalizeMixamoTracks(standingAnimation[0]); }
  if (fallingAnimation.length) { fallingAnimation[0].name = "Falling"; normalizeMixamoTracks(fallingAnimation[0]); }
  if (talkingAnimation.length) { talkingAnimation[0].name = "Talking"; normalizeMixamoTracks(talkingAnimation[0]); }
  if (layingAnimation.length) { layingAnimation[0].name = "Laying"; normalizeMixamoTracks(layingAnimation[0]); }

  // MEMOIZE the animations cleanly
  const allAnimations = useMemo(() => [
    typingAnimation[0],
    warriorAnimation[0],
    standingAnimation[0],
    fallingAnimation[0],
    talkingAnimation[0],
    layingAnimation[0]
  ].filter(Boolean), [typingAnimation, warriorAnimation, standingAnimation, fallingAnimation, talkingAnimation, layingAnimation]);

  /* 
   * THE PERMANENT ARCHITECTURAL FIX:
   * We completely rip out `@react-three/drei`'s `useAnimations` hook because it 
   * possesses inherent Suspense boundary race-conditions.
   * Instead, we construct a native `THREE.AnimationMixer` targeting the exact clone mathematically,
   * driving it securely frame-by-frame via `useFrame(delta)`. Impossible to drop load frames now!
   */
  const mixer = useMemo(() => new THREE.AnimationMixer(clonedScene), [clonedScene]);
  const currentAction = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    // Attempt to locate the exact animation by name, otherwise fallback to "Standing"
    const targetClip = allAnimations.find(a => a.name === actionName) || allAnimations.find(a => a.name === "Standing");
    if (!targetClip) return;

    // Securely pull the clip data into the mathematical Mixer
    const nextAction = mixer.clipAction(targetClip);

    // Only engage if calculating a structural state difference
    if (currentAction.current !== nextAction) {
      nextAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();

      if (currentAction.current) {
        // Blend from the old animation into the new animation smoothly over 0.5s!
        nextAction.crossFadeFrom(currentAction.current, 0.5, true);
      }

      currentAction.current = nextAction;
    }
  }, [actionName, mixer, allAnimations]);

  // Hooking the mathematical Mixer physical engine clock into the fiber draw-loop
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false; // prevents limbs disappearing during complex camera angles
      }
    });
  }, [clonedScene]);

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/66d01f8250a930dac18b05a9.glb");
