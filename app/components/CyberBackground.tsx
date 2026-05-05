'use client';

import React from "react";
import { motion } from "framer-motion";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* 
         OPTIMIZED ETHEREAL BACKGROUND
         Reduced number of blobs and simplified gradients for performance.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(168,85,247,0.08)_0,transparent_50%),radial-gradient(at_100%_0%,rgba(59,130,246,0.08)_0,transparent_50%)]" />
      
      {/* Optimized Ambient Blobs - using simpler animations and reduced blur */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[25%] w-[35vw] h-[35vw] bg-purple-200/20 blur-[80px] rounded-full will-change-transform"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[25%] right-[15%] w-[45vw] h-[45vw] bg-blue-200/15 blur-[80px] rounded-full will-change-transform"
      />

      {/* Simplified Technical Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Light Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
