'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Globe } from "lucide-react";
import Magnetic from "./Magnetic";

const RootBranch = ({ d, color, delay }: { d: string, color: string, delay: number }) => (
  <motion.path
    d={d}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.4 }}
    transition={{ 
      duration: 3, 
      delay, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2
    }}
  />
);

export default function Hero() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: container, 
    offset: ["start start", "end start"] 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section 
      ref={container} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent font-sans pt-32 pb-20"
    >
      {/* 
         THE NEURAL ROOTS BACKGROUND
         Animated SVG paths that "grow" like roots
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Soft Zinc Primary Roots */}
          <RootBranch d="M0,500 Q250,500 500,500 T1000,500" color="#e4e4e7" delay={0} />
          
          {/* Purple-Blue Gradient "Roots" - More Vibrant */}
          <RootBranch d="M200,0 C200,300 400,400 500,500 S800,700 800,1000" color="url(#rootGradient)" delay={1} />
          
          {/* Branching Sub-Roots */}
          <RootBranch d="M500,500 L700,300 L900,350" color="#f4f4f5" delay={2} />
          <RootBranch d="M500,500 L400,250 L200,200" color="url(#rootGradient)" delay={2.5} />
        </svg>
      </div>

      {/* Creative Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-400/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 blur-[150px] rounded-full" />
      </div>

      {/* 
         THE CONTENT LAYER
         Centered typography with simple grammar
      */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase border border-black/5 bg-black/5 px-6 py-2 rounded-full text-zinc-500 backdrop-blur-md">
            I build fast websites for growth
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-[10vw] lg:text-[7vw] xl:text-[110px] font-display font-medium leading-[0.85] tracking-tighter text-zinc-900 mb-10"
        >
          I BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 italic pb-4 uppercase">Results.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-zinc-600 text-sm md:text-lg font-body leading-relaxed max-w-xl mx-auto mb-14"
        >
          I create clean websites and digital tools that help your business grow. Simple, high quality, and built to perform.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Magnetic>
            <a href="#contact" className="group relative flex items-center gap-4 bg-zinc-900 text-white px-12 py-5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
               <span className="relative z-10">Let's Work Together</span>
               <ArrowDownRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </Magnetic>

          <a href="#projects" className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-2">
            <Globe className="w-3 h-3" />
            See My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10" />

    </section>
  );
}
