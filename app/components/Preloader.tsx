"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simple mock loading sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay before hiding
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white text-zinc-900"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center font-display overflow-hidden">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold tracking-tighter uppercase"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pascal Seth
            </motion.h1>
            <motion.div 
               className="mt-8 flex items-center gap-4 text-xl tracking-widest uppercase font-mono text-zinc-400"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>{Math.min(progress, 100)}%</span>
              <div className="h-[2px] w-24 bg-zinc-100 relative overflow-hidden">
                 <motion.div 
                   className="absolute inset-y-0 left-0 bg-zinc-900"
                   initial={{ width: "0%" }}
                   animate={{ width: `${Math.min(progress, 100)}%` }}
                   transition={{ duration: 0.2 }}
                 />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
