'use client';

import React, { useEffect, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, ContactShadows, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export type ActionName = "Typing" | "Warrior" | "Standing" | "Falling" | "Calling" | "Walking" | "Laying" | "Talking";

import { useInView } from 'framer-motion';

export function Avatar({ actionName = "Typing", scale = 2.0 }: { actionName?: ActionName, scale?: number }) {
  const showShadows = actionName !== "Falling";
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full z-10 overflow-visible pointer-events-auto [&>canvas]:!touch-pan-y">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 40 }}
          shadows={showShadows}
          dpr={[1, 1.2]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.4} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={15} color="#ffffff" />
          <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={10} color="#ffffff" />
          <directionalLight position={[0, -2, -5]} intensity={4} color="#ffffff" />
          <Environment preset="city" resolution={256} />

          <Suspense fallback={null}>
            <AvatarModel
              actionName={actionName}
              position={[0, actionName === "Falling" ? -0.5 : -2.6, 0]}
              rotation={[0, 0, 0]}
              scale={scale}
            />
            {showShadows && <ContactShadows position={[0, -2.6, 0]} opacity={0.4} scale={10} blur={2.5} far={4} resolution={256} color="#000000" />}
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      )}
    </div>
  );
}

function AvatarModel({ actionName, position, rotation, scale = 2.0 }: { actionName: ActionName, position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  const { scene } = useGLTF("/models/mymodel2-webp.glb");
  const clonedScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene) as THREE.Group;
    return clone;
  }, [scene]);

  // Load the animations
  const { animations: typingAnimations } = useFBX("/animations/Typing.fbx");
  const { animations: warriorAnimations } = useFBX("/animations/Warrior Idle.fbx");

  // Create the Animation Mixer targeting the skinned cloned scene
  const mixer = useMemo(() => new THREE.AnimationMixer(clonedScene), [clonedScene]);
  const currentAction = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    const normalizeMixamoTracks = (clip: THREE.AnimationClip) => {
      // Robust dynamic bone matching: find the exact bone name in the cloned scene
      // to handle models with 'mixamorig:', 'mixamorig', or no prefix at all.
      clip.tracks.forEach(track => {
        if (track.name.includes('.quaternion') || track.name.includes('.position') || track.name.includes('.scale')) {
          let boneName = track.name.split('.')[0];
          const property = track.name.substring(boneName.length);

          if (boneName.includes(':')) {
            boneName = boneName.split(':').pop() || boneName;
          } else if (boneName.startsWith('mixamorig')) {
            boneName = boneName.replace('mixamorig', '');
          }

          let actualBoneName = boneName;
          clonedScene.traverse((child: any) => {
            if (child.isBone) {
              if (child.name === boneName || child.name === `mixamorig:${boneName}` || child.name === `mixamorig${boneName}`) {
                actualBoneName = child.name;
              }
            }
          });

          track.name = actualBoneName + property;
        }
      });
    };

    const clips: { [key: string]: THREE.AnimationClip } = {};
    
    if (typingAnimations && typingAnimations.length > 0) {
      const clip = typingAnimations[0].clone();
      clip.name = "Typing";
      normalizeMixamoTracks(clip);
      clips["Typing"] = clip;
    }
    
    if (warriorAnimations && warriorAnimations.length > 0) {
      const clip = warriorAnimations[0].clone();
      clip.name = "Warrior";
      normalizeMixamoTracks(clip);
      clips["Warrior"] = clip;
    }

    const targetClip = clips[actionName];
    
    if (targetClip) {
      const action = mixer.clipAction(targetClip);
      action.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();
      
      if (currentAction.current && currentAction.current !== action) {
        action.crossFadeFrom(currentAction.current, 0.5, true);
      }
      currentAction.current = action;
    } else {
      // If other actions are requested but files don't exist, fade out any running animation
      if (currentAction.current) {
        currentAction.current.fadeOut(0.5);
        currentAction.current = null;
      }
    }
  }, [actionName, mixer, typingAnimations, warriorAnimations, clonedScene]);

  // Drive the animation mixer on every frame delta
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false;
      }
    });
  }, [clonedScene]);

  // Blender's default FBX/GLB export scale is 100x larger than React Three Fiber standard.
  // We apply a base multiplier of 0.01 so that your `scale={2.0}` prop works beautifully.
  const normalizedScale = scale * 0.012;

  return (
    <group position={position} rotation={rotation} scale={normalizedScale} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/mymodel2-webp.glb");
