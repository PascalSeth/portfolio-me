'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Terminal, Cpu, Database, Network } from 'lucide-react';

const stats = [
  { label: 'Value Delivered', value: '99.9%', icon: Cpu },
  { label: 'Projects Deployed', value: '15+', icon: Database },
  { label: 'Global Partners', value: '20+', icon: Network },
  { label: 'Hours Coded', value: '10k+', icon: Terminal }
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={container} id="about" className="py-24 lg:py-40 bg-transparent relative overflow-hidden font-mono selection:bg-purple-500/10">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Creative Header */}
        <div className="flex flex-col mb-16 md:mb-24 border-l-2 border-purple-500/50 pl-6 relative">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
          <p className="text-purple-600/60 font-mono tracking-[0.2em] uppercase mb-4 text-xs md:text-sm flex items-center gap-3">
            <span className="w-6 h-[1px] bg-purple-200" /> ABOUT // PROFILE
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display font-medium text-zinc-900 uppercase tracking-tighter leading-none">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 italic pr-4">Impact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Portrait Display - Creative Glass */}
          <div className="lg:col-span-5 relative group">
             {/* Gradient glow behind image */}
             <div className="absolute -inset-10 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="absolute -inset-4 border border-white/60 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-purple-300/50 backdrop-blur-sm" />
             
             <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-white/70 backdrop-blur-md shadow-2xl border border-white/40">
               <motion.div style={{ scale: scaleImage }} className="w-full h-full relative">
                 <Image 
                   src="/avatar.jpg"
                   alt="Pascal Seth Profile"
                   fill
                   className="object-cover transition-all duration-[2s] ease-out grayscale group-hover:grayscale-0"
                 />
                 
                 {/* Soft Tint Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
                 
                 <div className="absolute inset-0 border border-white/20 rounded-[1.5rem] pointer-events-none z-30" />
               </motion.div>
             </div>
             
             <div className="absolute bottom-8 right-[-1rem] md:right-[-2rem] bg-white/60 backdrop-blur-xl border border-purple-200/50 p-4 rounded-xl flex flex-col gap-1 shadow-2xl z-30 transform hover:scale-105 transition-transform duration-300">
                <span className="text-[10px] text-purple-600/60 font-mono tracking-widest uppercase flex items-center justify-between gap-4">Status <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /></span>
                <span className="text-zinc-900 font-mono text-sm tracking-widest border-t border-purple-100 pt-1 mt-1 uppercase">Pascal Seth</span>
             </div>
          </div>

          {/* Text Content - Ethereal Glass */}
          <motion.div style={{ y: y1 }} className="lg:col-span-7 flex flex-col justify-center mt-12 lg:mt-0">
            
            <div className="bg-white/80 backdrop-blur-md border border-white/60 p-8 md:p-12 rounded-[3rem] relative overflow-hidden group hover:border-purple-300/50 transition-colors duration-500 shadow-xl shadow-purple-500/5">
               {/* Internal soft glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
               
               <h3 className="text-2xl md:text-4xl font-display font-medium text-zinc-900 mb-8 flex items-center gap-4">
                 <Terminal className="w-8 h-8 text-purple-500/50" />
                 Core Values_
               </h3>
               
               <div className="space-y-6 text-zinc-600 text-base md:text-lg leading-relaxed font-body relative z-10">
                 <p>
                   I build fast websites and digital tools that help businesses grow. I focus on high-quality code and clean design to solve real problems.
                 </p>
                 <p>
                   By combining modern engineering with simple, effective design, I help companies improve their online presence and reach more customers.
                 </p>
               </div>

               <div className="mt-12 pt-8 border-t border-purple-100 flex flex-wrap gap-3 relative z-10">
                 {['React/Next.js', 'TypeScript', 'Node.js', 'Performance', 'Clean Code'].map((skill) => (
                   <span key={skill} className="px-4 py-2 bg-white/60 border border-purple-100 text-purple-600/70 text-[10px] font-mono rounded-full hover:bg-purple-50 hover:text-purple-700 transition-colors uppercase tracking-widest cursor-crosshair shadow-sm">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            {/* Creative Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
               {stats.map((stat, i) => (
                 <div key={i} className="flex flex-col items-start p-6 border border-white/60 rounded-[2rem] bg-white/80 backdrop-blur-sm hover:bg-white/60 hover:border-blue-200/50 transition-all duration-300 group shadow-sm">
                    <stat.icon className="w-5 h-5 text-blue-400 group-hover:text-purple-500 mb-4 transition-colors" />
                    <span className="text-3xl lg:text-4xl font-display font-bold text-zinc-900 mb-2">{stat.value}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-tight">{stat.label}</span>
                 </div>
               ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}