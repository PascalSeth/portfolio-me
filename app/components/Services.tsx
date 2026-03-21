'use client'

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Avatar } from "./Avatar";

const services = [
  {
    title: "Full-Stack Web Engineering",
    description: "Custom high-performance web applications that solve complex business infrastructure problems.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    outcomes: ["50% faster systems", "Real-time sync", "Optimized UX"],
    price: "From $500",
  },
  {
    title: "Mobile Architecture & PWAs",
    description: "Native and progressive web applications engineered for total cross-platform immersion.",
    technologies: ["React Native", "Flutter", "PWA"],
    outcomes: ["Cross-platform scale", "90% retention"],
    price: "From $750",
  },
  {
    title: "E-commerce Scale Systems",
    description: "High-converting bespoke storefronts powered by automated backends and headless CMS.",
    technologies: ["Shopify", "Stripe", "PostgreSQL"],
    outcomes: ["340% conversion boost", "LTV +200%"],
    price: "From $800",
  },
  {
    title: "Technical SEO & Load",
    description: "Blazingly fast websites that rank organically. Refactoring architectures to pass Core Web Vitals.",
    technologies: ["Core Web Vitals", "Edge Rendering", "Lighthouse"],
    outcomes: ["8s → 1.2s load", "Traffic +300%"],
    price: "From $300",
  },
  {
    title: "Full Digital Metamorphosis",
    description: "End-to-end digital transformation involving cloud infrastructures, custom CRM, and analytics.",
    technologies: ["Custom Software", "AWS/Vercel", "Analytics"],
    outcomes: ["Full automation", "Overhead -50%"],
    price: "From $1200",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  
  // Tracks exactly which service the user is hovering to drive both the Accordion UI and the 3D Avatar state!
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section ref={containerRef} id="services" className="relative bg-neutral-950 text-white min-h-[120vh]">
      
      {/* Mobile Background Avatar */}
      <div className="absolute inset-0 w-full h-[100vh] lg:hidden pointer-events-none opacity-20 mix-blend-screen z-0 overflow-hidden">
        <Avatar actionName="Standing" scale={4.5} />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto relative">
        
        {/* 
          LEFT COLUMN: The Interactive 3D Presenter 
        */}
        <div className="hidden lg:flex w-5/12 h-screen sticky top-0 flex-col justify-center items-center z-[1] border-r border-white/5 bg-neutral-950 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] pointer-events-none mix-blend-overlay" />
          
          <div className="absolute top-20 left-10 pointer-events-none opacity-10">
             <h2 className="text-[140px] font-display font-medium leading-none writing-vertical-rl text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '2px white' }}>
               SERVICES
             </h2>
          </div>

          <div className="w-full h-[85%] relative pointer-events-auto">
            {/* The Avatar dynamically reflecting state. Transitions are handled natively in Three.js crossFadeFrom! */}
            <Avatar 
                actionName={
                  activeService === null ? "Standing" :
                  activeService % 2 === 0 ? "Typing" : "Warrior"
                } 
                scale={3.6} 
            />
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-white/10 pt-4 z-10">
             <div className="font-mono text-xs text-white/40 uppercase tracking-widest flex items-center gap-3">
                <span className="w-12 h-[1px] bg-white/20" /> Matrix 03
             </div>
             <div className="font-mono text-cyan-400 text-[10px] uppercase tracking-[0.2em] flex flex-col items-end gap-1">
               <span className="flex items-center gap-2">Sandbox <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" /></span>
               <span className="text-white/30">Index: {activeService !== null ? `0${activeService + 1}` : 'IDLE'}</span>
             </div>
          </div>
        </div>

        {/* 
          RIGHT COLUMN: The Dynamic Interactive Accordion
        */}
        <div className="w-full lg:w-7/12 relative z-10 py-24 lg:py-32 px-4 sm:px-8 xl:px-20">
          
          <div className="mb-24">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400 mb-6 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-fuchsia-400" /> System Capabilities
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tighter text-white mb-6 leading-[0.9]">
              Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-white italic pr-2">Excellence.</span>
            </h2>
            <p className="text-white/50 font-body text-base sm:text-lg leading-relaxed max-w-lg">
              Delivering highly scalable digital ecosystems. From raw cloud infrastructure configurations to breathtaking user interfaces.
            </p>
          </div>

          {/* Flawlessly Smooth Accordion List using Framer Motion LayoutGroup logic */}
          <div 
             className="flex flex-col border-t-2 border-white/10 relative" 
             onMouseLeave={() => setActiveService(null)}
          >
            {services.map((service, index) => (
              <ServiceRow 
                key={index} 
                service={service} 
                index={index} 
                isActive={activeService === index}
                onHover={() => setActiveService(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sleek Expanding Row Component utilizing layoutId for perfect background gliding!
function ServiceRow({ service, index, isActive, onHover }: any) {
  return (
    <div 
      className="group relative border-b border-white/10 transition-colors duration-500 cursor-pointer w-full text-left"
      onMouseEnter={onHover}
      onClick={onHover}
    >
      {/* 
        MAGIC HOVER STATE
        Using AnimatePresence with layoutId creates a flawlessly smooth block highlighting 
        that 'glides' physically between rows instead of jarringly appearing via CSS.
      */}
      <AnimatePresence>
        {isActive && (
          <motion.div 
            layoutId="services-hover-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/5 to-transparent z-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6 md:p-10 w-full">
        
        {/* Row Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="flex items-end gap-6">
            <motion.span 
              animate={{ color: isActive ? "#22d3ee" : "rgba(255,255,255,0.3)" }}
              className="font-mono text-xs sm:text-sm tracking-widest transition-colors duration-300"
            >
              0{index + 1} //
            </motion.span>
            
            <motion.h3 
              animate={{ 
                 x: isActive ? 10 : 0,
                 color: isActive ? "#ffffff" : "rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tighter"
            >
              {service.title}
            </motion.h3>
          </div>
          
          <motion.div 
            animate={{ 
               rotate: isActive ? -45 : 0, 
               opacity: isActive ? 1 : 0.2,
               color: isActive ? "#22d3ee" : "#ffffff"
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Apple-like Buttery Smooth Expandable Content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} /* Premium cubic-bezier easing */
              className="overflow-hidden"
            >
              {/* Added consistent padding inside the hidden container to prevent margin collapsing jitter! */}
              <div className="pt-8 pb-4 pl-0 sm:pl-[4.5rem]">
                <p className="text-white/60 font-body text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="flex-1">
                    <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-[0.2em] mb-3 border-b border-cyan-500/20 pb-2">Technical Loadout</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-black border border-white/10 text-white/70 text-[10px] font-mono tracking-widest uppercase rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 sm:border-l sm:border-white/10 sm:pl-10">
                    <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-[0.2em] mb-3 border-b border-fuchsia-500/20 pb-2 hidden sm:block">Business Impact</p>
                    <div className="space-y-3">
                      {service.outcomes.map((outcome: string) => (
                        <div key={outcome} className="flex items-center gap-3 text-xs font-mono text-white/50 uppercase tracking-widest">
                          <Check className="w-3 h-3 text-fuchsia-400 flex-shrink-0" /> {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="font-mono text-xs text-white/40 uppercase">Starting Protocol</span>
                   <span className="font-mono text-sm text-cyan-400 font-bold px-4 py-2 border border-cyan-500/20 rounded-full">{service.price}</span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
