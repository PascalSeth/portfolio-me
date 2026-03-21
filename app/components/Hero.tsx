'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Zap } from "lucide-react";
import { AvatarScene } from "./Avatar";
import Magnetic from "./Magnetic";

export default function Hero() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={container} 
      className="relative min-h-[900px] h-auto lg:h-screen w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-neutral-950 font-sans pt-24 lg:pt-0"
    >
      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] pointer-events-none mix-blend-overlay z-0" />

      {/* 
        LEFT COLUMN (Text Layout)
        Positioned cleanly and absolutely insulated from the 3D clipping space
      */}
      <motion.div 
         style={{ y: textY, opacity: textOpacity }} 
         className="relative z-20 w-full lg:w-5/12 flex flex-col items-center lg:items-start px-6 lg:pl-16 xl:pl-24 text-center lg:text-left mt-10 lg:mt-0"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase border border-cyan-500/20 bg-cyan-950/20 px-6 py-2 rounded-full flex items-center justify-center lg:justify-start gap-2 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <Zap className="w-4 h-4 text-cyan-400" />
            Multiverse Engine
          </span>
        </motion.div>

        <motion.h1 
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="text-[14vw] sm:text-[10vw] lg:text-[7vw] xl:text-[110px] leading-[0.8] font-display font-medium tracking-tighter text-white mb-6"
        >
          PASCAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-600 italic pr-4 pb-2">SETH.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-gray-400 text-sm md:text-base font-body leading-relaxed max-w-sm lg:max-w-md mx-auto lg:mx-0 mb-10"
        >
          I architect immersive digital ecosystems. A nexus where high-performance engineering converges with breathtaking cybernetic aesthetics.
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="pointer-events-auto flex items-center gap-6"
        >
          <Magnetic>
            <a href="#projects" className="group rounded-full bg-cyan-500 text-black px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3">
              Initialize Target <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* 
        RIGHT COLUMN (Immersive 3D Space)
        No boxes! A single borderless Canvas containing the characters standing natively in the environment.
      */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2, delay: 0.5 }}
         className="relative z-10 w-full lg:absolute lg:right-0 lg:top-0 lg:w-[65%] h-[60vh] lg:h-full mt-12 lg:mt-0"
      >
        <AvatarScene />
      </motion.div>

    </section>
  );
}
