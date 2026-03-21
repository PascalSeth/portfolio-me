'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Radio } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Vance",
    role: "CTO, Nexus Corp",
    content: "An absolute masterclass in digital engineering. The architecture delivered wasn't just functional, it felt alive.",
    id: "LOG_01",
    freq: "144.2Hz"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Synthetix",
    content: "We asked for a website and received a hyper-optimized digital ecosystem. Conversion rates skyrocketed by 300% on launch week.",
    id: "LOG_02",
    freq: "89.4Hz"
  },
  {
    name: "Marcus Cole",
    role: "Director, Omega Tech",
    content: "The level of 3D integration and WebGL optimization is unparalleled. It runs flawlessly even on low-end mobile hardware.",
    id: "LOG_03",
    freq: "210.8Hz"
  },
  {
    name: "Elena Rostova",
    role: "Lead Designer, Voxel",
    content: "Rarely do you find an engineer who understands both deep backend logic and high-end aesthetic motion design. Truly top tier.",
    id: "LOG_04",
    freq: "305.1Hz"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll tracking for the massive horizontal slider!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dual opposing directional transforms bound directly to the user's vertical scrollwheel
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} id="testimonials" className="py-24 lg:py-40 bg-neutral-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
       
       {/* Cinematic Background Aesthetics */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-0" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

       <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-[1600px] mb-20 lg:mb-32">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
         >
            <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-fuchsia-500 mb-6 flex items-center gap-3">
               <Radio className="w-4 h-4 text-fuchsia-500 animate-pulse" /> Intercepted Comms
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-medium tracking-tighter text-white leading-[0.8]">
              CLIENT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-white italic pr-4">LOGS.</span>
            </h2>
         </motion.div>
       </div>

       {/* The Infinite Custom Marquee Sliders - Hardware Accelerated */}
       <div className="relative z-10 flex flex-col gap-8 w-[200vw] lg:w-[150vw] -ml-[50vw] lg:-ml-[25vw] pointer-events-none">
          
          <motion.div style={{ x: x1 }} className="flex gap-8 px-4 pointer-events-auto">
             {/* Duplicate array for seamless infinite illusion matching the parallax offset bounds */}
             {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`top-${i}`} testimonial={t} index={i} />
             ))}
          </motion.div>

          <motion.div style={{ x: x2 }} className="flex gap-8 px-4 pointer-events-auto">
             {[...testimonials, ...testimonials, ...testimonials].reverse().map((t, i) => (
                <TestimonialCard key={`bottom-${i}`} testimonial={t} index={i} />
             ))}
          </motion.div>

       </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: any) {
  return (
    <div className="group flex-shrink-0 w-[320px] md:w-[450px] p-8 lg:p-10 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-md relative overflow-hidden cursor-crosshair shadow-2xl">
       
       {/* Pseudo Glitch Sweep on Hover */}
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out z-0" />
       
       <div className="relative z-10 flex flex-col h-full justify-between gap-8">
          
          {/* Diagnostic Header Data */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
             <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-cyan-500 tracking-[0.2em] uppercase">Packet: {testimonial.id}</span>
                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">Freq: {testimonial.freq}</span>
             </div>
             
             {/* Live Audio Waveform Animation directly driven by Framer Motion array interpolation! */}
             <div className="flex items-center gap-[3px] h-6 px-3 py-1 bg-black/40 rounded-full border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                {[...Array(5)].map((_, i) => (
                   <motion.div 
                     key={i}
                     animate={{ height: ["20%", "100%", "40%", "90%", "20%"] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                     className="w-[3px] bg-cyan-500/50 group-hover:bg-cyan-400 rounded-full transition-colors duration-500"
                   />
                ))}
             </div>
          </div>

          <p className="text-white/60 font-body text-base md:text-lg leading-relaxed mix-blend-screen transition-colors duration-300 group-hover:text-white/90">
             "{testimonial.content}"
          </p>

          <div className="flex items-center gap-4 mt-4 pt-6 border-t border-white/5">
             <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-cyan-950/20 group-hover:border-cyan-500/20 transition-colors">
                <Terminal className="w-4 h-4 text-white/30 group-hover:text-cyan-400 transition-colors" />
             </div>
             <div className="flex flex-col gap-1">
                <h4 className="text-white/80 font-display font-medium text-sm tracking-wide">{testimonial.name}</h4>
                <p className="text-fuchsia-500/70 font-mono text-[10px] uppercase tracking-widest">{testimonial.role}</p>
             </div>
          </div>

       </div>
    </div>
  );
}