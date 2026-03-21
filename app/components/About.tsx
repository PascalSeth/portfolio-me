'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Terminal, Cpu, Database, Network } from 'lucide-react';

const stats = [
  { label: 'System Uptime', value: '99.9%', icon: Cpu },
  { label: 'Projects Deployed', value: '15+', icon: Database },
  { label: 'Clients Worldwide', value: '20+', icon: Network },
  { label: 'Hours Coded', value: '10k+', icon: Terminal }
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={container} id="about" className="py-32 lg:py-48 bg-neutral-950 relative overflow-hidden font-mono selection:bg-cyan-500/30">
      
      {/* Cyber Background Grids & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />
      
      <div className="absolute top-1/2 left-1/4 w-[50vw] h-[50vw] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-fuchsia-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Cyber Header */}
        <div className="flex flex-col mb-16 md:mb-24 border-l-2 border-cyan-500 pl-6 relative">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
          <p className="text-cyan-400 font-mono tracking-[0.2em] uppercase mb-4 text-xs md:text-sm flex items-center gap-3">
            <span className="w-6 h-[1px] bg-cyan-400" /> ABOUT // PROFILE
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display font-medium text-white uppercase tracking-tighter leading-none shadow-black drop-shadow-lg">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 italic pr-4">Profile.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Cyber Image Display */}
          <div className="lg:col-span-5 relative group">
             {/* Tech Deco Borders */}
             <div className="absolute -inset-4 border border-cyan-500/20 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-cyan-500/50" />
             
             {/* Corner Accents */}
             <div className="absolute -inset-4 border-t-2 border-l-2 border-cyan-400 w-8 h-8 rounded-tl-2xl pointer-events-none transition-all group-hover:w-16 group-hover:h-16 group-hover:border-fuchsia-500 duration-500" />
             <div className="absolute -inset-4 bottom-auto right-auto top-[-16px] right-[-16px] border-t-2 border-r-2 border-cyan-400 w-8 h-8 rounded-tr-2xl pointer-events-none" />
             <div className="absolute -inset-4 top-auto left-auto bottom-[-16px] right-[-16px] border-b-2 border-r-2 border-cyan-400 w-8 h-8 rounded-br-2xl pointer-events-none transition-all group-hover:w-16 group-hover:h-16 duration-500" />
             <div className="absolute -inset-4 top-auto right-auto bottom-[-16px] left-[-16px] border-b-2 border-l-2 border-cyan-400 w-8 h-8 rounded-bl-2xl pointer-events-none" />

             <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-neutral-900 shadow-[0_0_50px_rgba(34,211,238,0.15)] filter saturate-50 contrast-125 group-hover:saturate-100 transition-all duration-700">
               <motion.div style={{ scale: scaleImage }} className="w-full h-full relative">
                 <Image 
                   src="/avatar.jpg"
                   alt="Pascal Seth Cyber Profile"
                   fill
                   className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-[2s] ease-out"
                 />
                 
                 {/* Cyber Scanline effect overlays */}
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-40 mix-blend-overlay" />
                 
                 {/* Moving scanner bar */}
                 <motion.div 
                   animate={{ y: ["-10%", "110%"] }}
                   transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                   className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-400/30 to-cyan-500/0 z-20 pointer-events-none"
                 />
                 
                 <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] pointer-events-none z-30" />
               </motion.div>
             </div>
             
             {/* Overlay Technical UI element */}
             <div className="absolute bottom-8 right-[-1rem] md:right-[-2rem] bg-black/80 backdrop-blur-xl border border-cyan-500/50 p-4 rounded-xl flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-30 transform hover:scale-105 transition-transform duration-300">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase flex items-center justify-between gap-4">Status <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /></span>
                <span className="text-white font-mono text-sm tracking-widest border-t border-white/10 pt-1 mt-1">PASCAL SETH</span>
             </div>
          </div>

          {/* Cyber Text Content */}
          <motion.div style={{ y: y1 }} className="lg:col-span-7 flex flex-col justify-center mt-12 lg:mt-0">
            
            <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl">
               {/* Internal glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-8 flex items-center gap-4">
                 <Terminal className="w-8 h-8 text-fuchsia-400" />
                 My Background_
               </h3>
               
               <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-body relative z-10">
                 <p>
                   I architect high-performance digital ecosystems. Merging solid engineering with a cybernetic aesthetic, I build web experiences that are not only blazingly fast but visually <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm border-b border-cyan-900 pb-1">hypnotic</span>.
                 </p>
                 <p>
                   Every system I deploy is optimized for seamless user interaction and maximum throughput. Whether it is a scalable full-stack application or an immersive 3D interface, I ensure the products are fast, reliable, and beautifully crafted.
                 </p>
               </div>

               <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3 relative z-10">
                 {['React/Next.js', 'TypeScript', 'Node.js', 'Three.js', 'TailwindCSS'].map((skill) => (
                   <span key={skill} className="px-4 py-2 bg-black border border-cyan-500/20 text-cyan-400 text-xs font-mono rounded hover:bg-cyan-950 transition-colors uppercase tracking-widest cursor-crosshair">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            {/* Cyber Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
               {stats.map((stat, i) => (
                 <div key={i} className="flex flex-col items-start p-6 border border-white/5 rounded-[1.5rem] bg-black/40 hover:bg-black/60 hover:border-fuchsia-500/30 transition-all duration-300 group shadow-lg">
                    <stat.icon className="w-5 h-5 text-cyan-500/70 group-hover:text-cyan-400 mb-4 transition-colors" />
                    <span className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">{stat.value}</span>
                    <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest leading-tight">{stat.label}</span>
                 </div>
               ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}