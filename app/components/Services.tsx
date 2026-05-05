'use client';

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Terminal } from "lucide-react";
import { Avatar } from "./Avatar";


const services = [
  {
    title: "Fast Web Applications",
    description: "I build fast web applications tailored to your business needs, helping you improve efficiency and user engagement.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    outcomes: ["Faster Workflows", "Reduced Costs", "Solid Security"],
    price: "Custom Quote",
  },
  {
    title: "Modern E-Commerce",
    description: "I create online stores that are easy to use and fast to load, helping you reach more customers and sell more products.",
    technologies: ["Shopify", "Stripe", "Next.js"],
    outcomes: ["More Sales", "Easy Checkout", "Stock Management"],
    price: "Custom Quote",
  },
  {
    title: "Speed & SEO Optimization",
    description: "I optimize your website to load instantly and rank higher on search engines, so you don't lose potential customers.",
    technologies: ["Performance", "SEO", "Optimization"],
    outcomes: ["Higher Rankings", "Instant Loading", "Better Retention"],
    price: "Custom Quote",
  },
  {
    title: "Mobile App Development",
    description: "I develop apps for iOS and Android that feel fast and professional, giving your users a great mobile experience.",
    technologies: ["React Native", "PWA", "TailwindCSS"],
    outcomes: ["iOS & Android", "Wider Reach", "Direct Engagement"],
    price: "Custom Quote",
  },
  {
    title: "Technical Consulting",
    description: "I help you modernize your old systems and plan for the future, making sure your technology works for you.",
    technologies: ["Architecture", "Cloud Strategy", "Integrations"],
    outcomes: ["Future-Proof", "Lower Costs", "Auto-Scaling"],
    price: "Custom Quote",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState<number | null>(0);

  return (
    <section ref={containerRef} id="services" className="relative bg-transparent text-zinc-900 py-24 lg:py-40 min-h-[140svh]">
      
      {/* 
        3D BACKGROUND STICKY LAYER 
        Preserving Avatar logic as requested.
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="sticky top-0 h-screen w-full overflow-hidden">
            
            {/* The Avatar elegantly positioned in the bottom right corner - Now using a fixed Sitting (Typing) pose */}
            <div className="absolute bottom-10 right-0 lg:right-10 w-full lg:w-[50vw] h-[70svh] lg:h-[85svh] pointer-events-auto z-10 opacity-70 lg:opacity-100 transition-opacity duration-1000">
               <Avatar 
                  actionName="Typing" 
                  scale={2.0} 
               />
               {/* HUD overlay for the avatar - Creative Light Theme */}
               <div className="absolute bottom-[15%] left-[30%] pointer-events-none hidden lg:flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                 <span className="font-mono text-[10px] text-purple-600/60 uppercase tracking-[0.2em]">Status: Working</span>
               </div>
            </div>

            {/* Creative Light Gradient Masks - Simplified for performance */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[40svh] bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />
         </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30 max-w-[1600px]">
        <div className="w-full lg:w-[70%] xl:w-[60%] flex flex-col gap-12 lg:gap-16 pt-10 lg:pt-0">
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="mb-8"
          >
            <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-purple-600/60 mb-6 flex items-center gap-3">
              <Terminal className="w-4 h-4 text-purple-500/50" /> Services
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-medium tracking-tighter text-zinc-900 mb-6 leading-[0.8]">
              WHAT I <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 italic pr-4 uppercase">DO.</span>
            </h2>
            <p className="text-zinc-500 font-body text-base lg:text-xl leading-relaxed max-w-lg mt-8">
              I build high-quality websites and digital tools. From fast apps to modern stores, I help your business succeed online.
            </p>
          </motion.div>

          <div className="flex flex-col border-t-2 border-purple-100 relative">
            {services.map((service, index) => (
              <ServiceRow 
                key={index} 
                service={service} 
                index={index} 
                isActive={activeService === index}
                onClick={() => setActiveService(activeService === index ? null : index)}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index, isActive, onClick }: any) {
  return (
    <div 
      className="group relative border-b border-purple-100 transition-colors duration-500 cursor-pointer w-full text-left overflow-hidden"
      onClick={onClick}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div 
            layoutId="services-hover-bg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent z-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6 md:p-10 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="flex items-end gap-6">
            <motion.span 
              animate={{ color: isActive ? "#9333ea" : "rgba(0,0,0,0.2)" }}
              className="font-mono text-xs sm:text-sm tracking-widest transition-colors duration-300"
            >
              0{index + 1} //
            </motion.span>
            
            <motion.h3 
              animate={{ 
                 x: isActive ? 10 : 0,
                 color: isActive ? "#000000" : "rgba(0,0,0,0.7)"
              }}
              transition={{ duration: 0.5 }} 
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tighter"
            >
              {service.title}
            </motion.h3>
          </div>
          
          <motion.div 
            animate={{ 
               rotate: isActive ? -45 : 0, 
               opacity: isActive ? 1 : 0.2,
               color: isActive ? "#9333ea" : "#000000"
            }}
            className="hidden sm:block"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 pb-4 pl-0 sm:pl-[4.5rem]">
                <p className="text-zinc-500 font-body text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="flex-1">
                    <p className="font-mono text-[10px] text-purple-600/40 uppercase tracking-[0.2em] mb-3 border-b border-purple-100 pb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-white/90 border border-purple-100 text-purple-600/70 text-[10px] font-mono tracking-[0.2em] uppercase rounded-full shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 sm:border-l sm:border-purple-100 sm:pl-10 mt-6 sm:mt-0">
                    <p className="font-mono text-[10px] text-blue-600/40 uppercase tracking-[0.2em] mb-3 border-b border-blue-100 pb-2 hidden sm:block">Benefits</p>
                    <div className="space-y-3">
                      {service.outcomes.map((outcome: string) => (
                        <div key={outcome} className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                          <Check className="w-3 h-3 text-purple-500/50 flex-shrink-0" /> {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-purple-100 flex items-center justify-between">
                   <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">Estimate</span>
                   <span className="font-mono text-sm text-purple-600 font-bold px-6 py-2 bg-purple-50/50 border border-purple-200/50 rounded-full shadow-sm">{service.price}</span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
