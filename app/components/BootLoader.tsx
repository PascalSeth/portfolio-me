'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export default function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll while booting so user doesn't accidentally scroll during the animation
    document.body.style.overflow = "hidden";
    
    // Simulate an aggressive, jumpy terminal boot sequence for the aesthetic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 400); // Small realistic pause at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => {
       clearInterval(interval);
       document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle noise over the boot screen */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
          
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-sm w-full px-6">
            <Terminal className="w-12 h-12 text-cyan-400 animate-[pulse_2s_ease-in-out_Infinity]" />
            
            <div className="w-full flex justify-between items-end border-b border-white/10 pb-2">
               <span className="font-mono text-xs text-white/50 tracking-[0.3em] uppercase">SYSTEM.BOOT //</span>
               <span className="font-display text-5xl font-bold text-cyan-400 tracking-tighter shadow-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                 {progress}%
               </span>
            </div>
            
            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
               <motion.div 
                 className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
                 initial={{ width: "0%" }}
                 animate={{ width: `${progress}%` }}
                 transition={{ ease: "linear", duration: 0.1 }}
               />
            </div>
            
            <div className="w-full text-center mt-6">
               <p className="font-mono text-[10px] text-fuchsia-500/60 uppercase tracking-widest animate-pulse">
                  Allocating Secure Memory...
               </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
