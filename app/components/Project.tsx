'use client';

import { useRef, useState } from "react";
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Terminal } from "lucide-react";


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  category: 'real' | 'personal';
}

const projects: Project[] = [
  {
    id: 0,
    title: "TrendiZip",
    description: "A premium multi-vendor fashion e-commerce ecosystem empowering independent creators to launch and scale their own personalized digital storefronts.",
    image: '/projects/trendizip.png',
    technologies: ["Next.js", "React", "Node.js", "Stripe"],
    liveUrl: "https://trendizip.com/",
    category: "real",
  },
  {
    id: 1,
    title: "BOTSVILLE",
    description: "Premier MLBB esports gaming community based in Ghana, fostering competitive talent and hosting regional tournaments.",
    image: '/projects/botsville.png',
    technologies: ["React", "Next.js", "TailwindCSS"],
    liveUrl: "https://botsvillegh.com/",
    category: "real",
  },
  {
    id: 2,
    title: "DivaDons",
    description: "Exclusive African e-commerce shop located in the US, delivering premium authentic fashion, beauty, and cultural products.",
    image: '/projects/divadons.png',
    technologies: ["Shopify", "React", "Node.js"],
    liveUrl: "https://divasanddonsluxury.netlify.app/",
    category: "real",
  },
  {
    id: 3,
    title: "TranzBook",
    description: "Transportation booking platform with real-time tracking and logistics management.",
    image: '/projects/tranzbook.png',
    technologies: ["React", "Express.js", "MySQL", "Google Maps API"],
    liveUrl: "https://tranzbook.co",
    category: "real",
  },
  {
    id: 4,
    title: "JL Espresso",
    description: "Premium coffee service platform offering espresso solutions, equipment maintenance, and training for businesses.",
    image: '/projects/jlespresso.png',
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.jlespressoservice.com/",
    category: "real",
  },
  {
    id: 5,
    title: "MyClean Services",
    description: "Professional cleaning booking platform with real-time scheduling and automated invoicing system.",
    image: '/projects/myclean.png',
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://mycleanapp.org/",
    category: "real",
  },
  {
    id: 6,
    title: "3D Portfolio",
    description: "Immersive 3D portfolio website with smooth animations and interactive elements.",
    image: '/projects/3dportfolio.png',
    technologies: ["Three.js", "React", "Next.js", "Framer Motion"],
    liveUrl: "https://sethpascal.netlify.app",
    category: "personal",
  },
  {
    id: 7,
    title: "Bird Notion Clone",
    description: "Full-featured note-taking application with real-time collaboration and rich text editing.",
    image: '/projects/birdnotion.png',
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://bird-notion.netlify.app/",
    category: "personal",
  },
  {
    id: 8,
    title: "CarHub Platform",
    description: "Car rental marketplace with advanced search, booking system, and payment integration.",
    image: '/projects/carhub.png',
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "https://pascalcarhub.netlify.app/",
    category: "personal",
  },
  {
    id: 9,
    title: "Fresco Art Gallery",
    description: "Digital art gallery platform with NFT integration, artist portfolios, and marketplace.",
    image: '/projects/fresco.png',
    technologies: ["React", "Node.js", "Web3", "Ethereum"],
    liveUrl: "https://fresco-food.netlify.app/",
    category: "personal",
  },
  {
    id: 10,
    title: "House of Bek",
    description: "Luxury fashion e-commerce platform with advanced product filtering and wishlist.",
    image: '/projects/houseofbek.png',
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    liveUrl: "https://houseofbek.netlify.app/",
    category: "personal",
  },
  {
    id: 11,
    title: "RayHealth",
    description: "Healthcare management system with patient portals, scheduling, and telemedicine integration.",
    image: '/projects/rayhealth.png',
    technologies: ["Next.js", "PostgreSQL", "Twilio", "React"],
    liveUrl: "https://rayhealthcareafrica.com/",
    category: "real",
  }
];

export default function Project() {
  const container = useRef(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section ref={container} id="projects" className="bg-transparent py-24 relative z-10 w-full overflow-hidden">
      



      <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-12 text-center relative z-20">
        <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tighter text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          Proven <span className="text-cyan-400 italic font-serif">Case Studies.</span>
        </h2>
      </div>

      {/* 
        This is the physical scrolling lane.
        Cards are spaced out using gap-[50svh] so the user must scroll 50svh to see the next card stick.
        This provides a flawless native CSS scroll experience without overhanging containers.
      */}
      <div className="relative w-full max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col pt-[5svh]" style={{ gap: '50svh' }}>
        {visibleProjects.map((project, i) => {
          return (
            <Card
              key={project.id}
              project={project}
              index={i}
            />
          )
        })}

        {/* 
          CRITICAL FIX: A 20svh spacer at the bottom of the section.
          This ensures the last card has exactly the right mathematical room (100svh - 80svh) to finish its transform without overlapping with the native CSS unpin.
        */}
        <div id="scan-btn-container" className="h-[20svh] w-full flex items-center justify-center relative z-20">
          {visibleCount < projects.length && (
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 5, projects.length))}
              className="group relative px-8 py-4 bg-[#0a0a0a] border border-cyan-500/50 font-mono text-xs md:text-sm uppercase tracking-[0.3em] overflow-hidden transition-all hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] z-50 rounded-lg"
            >
              <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3 text-cyan-400 font-bold mix-blend-plus-lighter">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Load More Projects //
              </span>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-fuchsia-500" />
              <span className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
            </button>
          )}

          {visibleCount > 5 && (
            <button
              onClick={() => {
                const btn = document.getElementById('scan-btn-container');
                let previousY = btn?.getBoundingClientRect().top;

                flushSync(() => {
                  setVisibleCount(5);
                });

                let newY = btn?.getBoundingClientRect().top;
                if (previousY !== undefined && newY !== undefined) {
                  window.scrollBy({ top: newY - previousY, behavior: 'instant' });
                }
              }}
              className="group relative px-8 py-4 bg-[#0a0a0a] border border-fuchsia-500/50 font-mono text-xs md:text-sm uppercase tracking-[0.3em] overflow-hidden transition-all hover:border-fuchsia-400 hover:bg-fuchsia-950/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] z-50 rounded-lg text-fuchsia-400 font-bold mix-blend-plus-lighter"
            >
              <div className="absolute inset-0 bg-fuchsia-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-3 text-fuchsia-400 font-bold mix-blend-plus-lighter">
                <Terminal className="w-4 h-4 text-fuchsia-400" />
                Show Less Projects //
              </span>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
              <span className="absolute top-0 left-0 w-2 h-2 bg-fuchsia-500" />
            </button>
          )}
        </div>
      </div>

    </section>
  )
}

function Card({ project, index }: any) {
  const tracker = useRef<HTMLDivElement>(null);

  // Independent scroll tracking using a fixed-height invisible anchor.
  const { scrollYProgress } = useScroll({
    target: tracker,
    offset: ["start 15vh", "end 15vh"]
  });

  // Scale down and push up gently as the user scrolls over 250svh (approx 2 cards of depth)
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const upwardYOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const cardOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <div className="relative w-full group cursor-crosshair">
      <div 
         ref={tracker} 
         className="absolute left-0 top-0 w-px h-[250svh] pointer-events-none"
      />
      
      {/* strictly fixing top to 15svh guarantees it never wildly drops off the screen due to mobile address bar resize */}
      <div 
        className="sticky flex items-start justify-center w-full z-10 top-[15svh]"
      >
        <motion.div
           style={{
             scale: cardScale,
             y: upwardYOffset,
             willChange: "transform",
           }}
           className="w-full flex justify-center origin-top transform-gpu h-[75svh] lg:h-[70svh] min-h-[500px] max-h-[750px]"
        >
          {/* THE NEW CINEMATIC DATA SLATE DESIGN */}
          <div className="relative flex flex-col w-full h-full bg-black border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.05)] transition-colors duration-500 group-hover:border-cyan-500/30">
            
            {/* Background Image Native Bleed */}
            <div className="absolute inset-0 z-0 bg-black">
               <Image 
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover object-left md:object-center opacity-60 md:opacity-[0.85] transition-transform duration-[3s] ease-out group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                 quality={80}
               />
            </div>

            {/* Flat darkening mask to guarantee constant legibility on mobile stacking */}
            <div className="absolute inset-0 bg-black/60 md:bg-transparent z-10 pointer-events-none" />

            {/* Heavy left-to-right reading gradient - leaves the right side crisp on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/95 md:via-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Holographic Scanline Hover Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.03)_50%)] bg-[size:100%_4px] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Cyber Brackets (Top Left, Bottom Right, etc.) */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-400 transition-colors duration-500 z-30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/10 group-hover:border-fuchsia-400 transition-colors duration-500 z-30 pointer-events-none" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-transparent transition-colors duration-500 z-30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/10 group-hover:border-transparent transition-colors duration-500 z-30 pointer-events-none" />

            {/* Massive Ghost Sequence Number */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 text-[120px] md:text-[250px] font-display font-bold text-white/[0.02] group-hover:text-cyan-400/[0.05] transition-colors duration-700 z-10 pointer-events-none selection:bg-transparent tracking-tighter">
               0{index + 1}
            </div>

            {/* Depth Darkening Overlay for scrolling stack */}
            <motion.div
              className="absolute inset-0 bg-black z-40 pointer-events-none"
              style={{ opacity: cardOverlayOpacity }}
            />

            {/* Data Console UI (Foreground) */}
            <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 md:p-16">
               
               {/* Header Console */}
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-neutral-950/80 backdrop-blur-md px-4 py-2 border border-white/10">
                     <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                     <span className="font-mono text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest">
                        {project.category} Project
                     </span>
                  </div>
                  <span className="font-mono text-[10px] text-white/30 tracking-[0.3em] hidden sm:block">SYS.INIT // SECURE</span>
               </div>

               {/* Main Data block */}
               <div className="max-w-2xl flex flex-col gap-6 border-l-2 border-cyan-500/30 pl-6 md:pl-10 relative">
                  {/* Subtle pulsing line on the border */}
                  <div className="absolute -left-[2px] top-0 w-[2px] h-12 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_3s_ease-in-out_Infinity]" />
                  
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                     {project.title}
                  </h3>
                  
                  <p className="text-gray-300 font-body text-sm md:text-lg lg:text-xl leading-relaxed max-w-xl text-shadow-sm font-medium pr-12 md:pr-0">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                     {project.technologies.slice(0, 4).map((tech: string) => (
                       <span key={tech} className="px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase cursor-crosshair hover:bg-cyan-950 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
                         {tech}
                       </span>
                     ))}
                  </div>

                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/btn w-max flex items-center gap-4 mt-6 bg-cyan-500 text-black px-6 py-3 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors relative overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                     <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                     <span className="relative z-10 flex items-center gap-4">
                        View Live Platform <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                     </span>
                  </a>
               </div>
               
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
