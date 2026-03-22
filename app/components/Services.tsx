'use client';

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Terminal } from "lucide-react";
import { Avatar } from "./Avatar";


const services = [
  {
    title: "Enterprise Web Applications",
    description: "I build robust, blazingly-fast web applications custom-tailored to streamline your internal operations, engage users, and securely scale with your business.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    outcomes: ["Accelerated Workflows", "Reduced Overhead", "Bank-grade Security"],
    price: "Custom Quote",
  },
  {
    title: "High-Conversion E-Commerce",
    description: "Transform your digital storefront with modern, headless architecture designed specifically to absolutely minimize bounce rates and maximize your global sales.",
    technologies: ["Shopify Plus", "Stripe", "Next.js Commerce"],
    outcomes: ["Increased Conversions", "Lightning-fast Checkouts", "Seamless Inventory"],
    price: "Custom Quote",
  },
  {
    title: "Technical SEO & Load Optimization",
    description: "Stop losing customers to slow load times. I refactor digital architecture to pass strictly enforced Core Web Vitals, driving raw organic traffic and superior user retention.",
    technologies: ["Core Web Vitals", "Edge Rendering", "Lighthouse"],
    outcomes: ["Higher Organic Rankings", "Instant Millisecond Loads", "Maximized Retention"],
    price: "Custom Quote",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "Deliver a flawless, native-feeling experience to your users across both iOS and Android without the massive overhead of maintaining completely separate codebases.",
    technologies: ["React Native", "Progressive Web Apps", "TailwindCSS"],
    outcomes: ["Unified Brand Experience", "Wider Market Reach", "Direct Push Engagement"],
    price: "Custom Quote",
  },
  {
    title: "Digital Ecosystem Consulting",
    description: "Let me completely modernize your legacy systems. I engineer cohesive cloud strategies that future-proof your tech stack while drastically reducing automated server costs.",
    technologies: ["AWS / Vercel", "System Architecture", "API Integration"],
    outcomes: ["Future-Proof Infrastructure", "Optimized Server Costs", "Automated Scalability"],
    price: "Custom Quote",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  
  // Tracks exactly which service the user is hovering to drive both the Accordion UI and the 3D Avatar state!
  const [activeService, setActiveService] = useState<number | null>(0);

  return (
    <section ref={containerRef} id="services" className="relative bg-transparent text-white py-32 lg:py-48 min-h-[150svh]">
      
      {/* 
        BORDERLESS 3D BACKGROUND STICKY LAYER 
        This wrapper stays in the viewport as the user scrolls down the section.
        The Avatar is pinned to the extreme bottom right corner.
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="sticky top-0 h-screen w-full overflow-hidden">
            
            {/* Intense Background Aesthetics */}

            
            {/* The Avatar elegantly positioned in the bottom right corner */}
            <div className="absolute bottom-10 right-0 lg:right-10 w-full lg:w-[50vw] h-[70svh] lg:h-[85svh] pointer-events-auto z-10 opacity-70 lg:opacity-100 mix-blend-screen transition-opacity duration-1000">
               <Avatar 
                  actionName={
                    activeService === null ? "Standing" :
                    activeService % 2 === 0 ? "Typing" : "Warrior"
                  } 
                  scale={2.0} 
               />
               {/* HUD overlay for the avatar */}
               <div className="absolute bottom-[15%] left-[30%] pointer-events-none hidden lg:flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse" />
                 <span className="font-mono text-[10px] text-fuchsia-500/50 uppercase tracking-[0.2em]">Viewing: {activeService !== null ? `Service 0${activeService + 1}` : 'Idle'}</span>
               </div>
            </div>

            {/* Aggressive fade masks to ensure text legibility on smaller screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 lg:via-neutral-950/70 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[40svh] bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[20svh] bg-gradient-to-b from-neutral-950 to-transparent z-20 pointer-events-none" />
         </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-30 max-w-[1600px]">
        
        {/* Left-Aligned Services Content */}
        <div className="w-full lg:w-[70%] xl:w-[60%] flex flex-col gap-12 lg:gap-16 pt-10 lg:pt-0">
          
          {/* Section Header */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             viewport={{ once: true }}
             className="mb-8"
          >
            <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-cyan-400 mb-6 flex items-center gap-3">
              <Terminal className="w-4 h-4 text-cyan-400" /> My Services
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-display font-medium tracking-tighter text-white mb-6 leading-[0.8] mix-blend-difference">
              WHAT I <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-white italic pr-4">DO.</span>
            </h2>
            <p className="text-white/50 font-body text-base lg:text-xl leading-relaxed max-w-lg mt-8">
              Delivering highly scalable digital ecosystems. From cloud infrastructure engineering to breathtaking modern interfaces.
            </p>
          </motion.div>

          {/* Flawlessly Smooth Accordion List using Framer Motion LayoutGroup logic */}
          <div 
             className="flex flex-col border-t-2 border-white/10 relative" 
          >
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

// Sleek Expanding Row Component utilizing layoutId for perfect background gliding!
function ServiceRow({ service, index, isActive, onClick }: any) {
  return (
    <div 
      className="group relative border-b border-white/10 transition-colors duration-500 cursor-pointer w-full text-left"
      onClick={onClick}
    >
      {/* MAGIC HOVER STATE Background */}
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
                    <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-[0.2em] mb-3 border-b border-cyan-500/20 pb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-black border border-white/10 text-white/70 text-[10px] font-mono tracking-[0.2em] uppercase rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 sm:border-l sm:border-white/10 sm:pl-10 mt-6 sm:mt-0">
                    <p className="font-mono text-[10px] text-fuchsia-500 uppercase tracking-[0.2em] mb-3 border-b border-fuchsia-500/20 pb-2 hidden sm:block">Key Benefits</p>
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
                   <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em]">Starting At</span>
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
