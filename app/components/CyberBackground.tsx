'use client';

import { motion } from "framer-motion";

export default function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-neutral-950">
      {/* 
        Cyber Background Grids & Glows 
        Massive intense neon grid centered on the component providing blueprint mapping
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff3_1px,transparent_1px),linear-gradient(to_bottom,#0ff3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 z-0" />
      
      {/* Brighter Ambient Cyber Glows natively pinned to diagonal corners */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-500/20 blur-[120px] rounded-full z-0" />

      {/* Massive Rotating HUD Ring 1 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-cyan-500/20 rounded-full border-dashed z-0 opacity-50"
        style={{ originX: 0.5, originY: 0.5, x: '-50%', y: '-50%' }}
      >
         <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#22d3ee]" />
         <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      {/* Massive Rotating HUD Ring 2 (Counter-rotating) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-fuchsia-500/20 rounded-full border-dotted z-0 opacity-40"
        style={{ originX: 0.5, originY: 0.5, x: '-50%', y: '-50%' }}
      >
         <div className="absolute top-1/2 right-0 w-2 h-2 bg-fuchsia-400 rounded-full translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Vertical HUD Data Stream */}
      <div className="absolute top-0 right-4 lg:right-8 h-full flex flex-col justify-between py-24 opacity-30 z-0 mix-blend-screen hidden md:flex">
         <span className="font-mono text-[10px] text-cyan-400 [writing-mode:vertical-lr] tracking-[0.4em] uppercase">SYSTEM.CORE.ENGINE // V2.04 // ACTIVE</span>
         <span className="font-mono text-[10px] text-fuchsia-400 [writing-mode:vertical-lr] tracking-[0.4em] uppercase">MEMORY.ALLOC // OVERRIDE // 99%</span>
      </div>
      
      {/* Target Crosshairs */}
      <div className="absolute top-[20%] left-[10%] w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-0 opacity-60" />
      <div className="absolute top-[20%] right-[10%] w-8 h-8 border-t-2 border-r-2 border-fuchsia-500/50 z-0 opacity-60" />
      <div className="absolute bottom-[20%] left-[10%] w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 z-0 opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-8 h-8 border-b-2 border-r-2 border-fuchsia-500/50 z-0 opacity-60" />

      {/* Ambient Sweeping Laser Scanner */}
      <motion.div 
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        className="absolute left-0 w-full h-[1px] bg-cyan-400/50 shadow-[0_0_15px_2px_rgba(34,211,238,0.5)] z-10"
      >
         {/* Bright laser nodes at the edges */}
         <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-white -translate-y-1/2 shadow-[0_0_10px_#fff]" />
         <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-white -translate-y-1/2 shadow-[0_0_10px_#fff]" />
      </motion.div>

      {/* Hardware Tracking Nodes */}
      <motion.div 
         animate={{ opacity: [0.2, 1, 0.2] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/3 left-16 flex items-center gap-2 opacity-50 hidden lg:flex"
      >
         <div className="w-2 h-2 bg-fuchsia-500 rounded-sm animate-ping" />
         <span className="font-mono text-[8px] text-fuchsia-400 tracking-[0.3em]">REC //</span>
      </motion.div>

      {/* Hardware CRT Scanlines - The core retro/terminal styling element */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[size:100%_4px] z-20" />

      {/* Cinematic Noise Overlay to bridge shadows smoothly */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-20" />
    </div>
  );
}
