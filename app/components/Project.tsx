'use client';

import { useRef, useState } from "react";
import { flushSync } from 'react-dom';
import { motion, useScroll, useTransform } from "framer-motion";
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
    id: 1,
    title: "JL Espresso",
    description: "Premium coffee service platform offering espresso solutions, equipment maintenance, and training for businesses.",
    image: '/projects/jlespresso.png',
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.jlespressoservice.com/",
    category: "real",
  },
  {
    id: 2,
    title: "MyClean Services",
    description: "Professional cleaning booking platform with real-time scheduling and automated invoicing system.",
    image: '/projects/myclean.png',
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://mycleanapp.org/",
    category: "real",
  },
  {
    id: 3,
    title: "RayHealth",
    description: "Healthcare management system with patient portals, scheduling, and telemedicine integration.",
    image: '/projects/rayhealth.png',
    technologies: ["Next.js", "PostgreSQL", "Twilio", "React"],
    liveUrl: "https://rayhealthcareafrica.com/",
    category: "real",
  },
  {
    id: 4,
    title: "TranzBook",
    description: "Transportation booking platform with real-time tracking and logistics management.",
    image: '/projects/tranzbook.png',
    technologies: ["React", "Express.js", "MySQL", "Google Maps API"],
    liveUrl: "https://tranzbook.co",
    category: "real",
  },
  {
    id: 5,
    title: "3D Portfolio",
    description: "Immersive 3D portfolio website with smooth animations and interactive elements.",
    image: '/projects/3dportfolio.png',
    technologies: ["Three.js", "React", "Next.js", "Framer Motion"],
    liveUrl: "https://sethpascal.netlify.app",
    category: "personal",
  },
  {
    id: 6,
    title: "Bird Notion Clone",
    description: "Full-featured note-taking application with real-time collaboration and rich text editing.",
    image: '/projects/birdnotion.png',
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://bird-notion.netlify.app/",
    category: "personal",
  },
  {
    id: 7,
    title: "CarHub Platform",
    description: "Car rental marketplace with advanced search, booking system, and payment integration.",
    image: '/projects/carhub.png',
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "https://pascalcarhub.netlify.app/",
    category: "personal",
  },
  {
    id: 8,
    title: "Fresco Art Gallery",
    description: "Digital art gallery platform with NFT integration, artist portfolios, and marketplace.",
    image: '/projects/fresco.png',
    technologies: ["React", "Node.js", "Web3", "Ethereum"],
    liveUrl: "https://fresco-food.netlify.app/",
    category: "personal",
  },
  {
    id: 9,
    title: "House of Bek",
    description: "Luxury fashion e-commerce platform with advanced product filtering and wishlist.",
    image: '/projects/houseofbek.png',
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    liveUrl: "https://houseofbek.netlify.app/",
    category: "personal",
  },
];

export default function Project() {
  const container = useRef(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleProjects = projects.slice(0, visibleCount);
  
  // Track scroll over the entire wrapper to synchronize the 3D shrink and upward offset
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} id="projects" className="bg-neutral-950 py-24 relative z-10 w-full">
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-12 text-center sticky top-10 md:top-20 z-50 pointer-events-none">
        <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tighter text-white drop-shadow-2xl">
          Selected <span className="text-primary italic font-serif">Works.</span>
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
  // This completely decouples the card's animation from the container's dynamic array length!
  // It fixes the "Show More" jump since previously-loaded trackers don't change height.
  const { scrollYProgress } = useScroll({
    target: tracker,
    offset: ["start 15vh", "end 15vh"]
  });

  // Scale down and push up gently as the user scrolls over 250svh (approx 2 cards of depth)
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const upwardYOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const cardOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <>
      {/* Absolute tracker physically pinned perfectly parallel with where this card inherently lives in the DOM. */}
      {/* top calculation: parent pt is 5svh, each card takes 75svh + 50svh gap = 125svh step-size! */}
      <div 
         ref={tracker} 
         className="absolute left-0 w-px h-[250svh] pointer-events-none"
         style={{ top: `calc(5svh + ${index * 125}svh)` }} 
      />
      <div 
        className="sticky flex items-start justify-center w-full z-10"
        // strictly fixing top to 15svh guarantees it never wildly drops off the screen due to mobile address bar resize
        style={{ top: '15svh' }}
      >
      <motion.div 
        style={{ 
          scale: cardScale,
          y: upwardYOffset,
          willChange: "transform",
        }} 
        className="w-full flex justify-center origin-top transform-gpu h-[75svh] lg:h-[70svh] min-h-[500px] max-h-[750px]"
      >
        <div className="relative flex flex-col md:flex-row w-full h-full bg-neutral-900 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]">
          
          {/* Depth Darkening Overlay */}
          <motion.div 
             className="absolute inset-0 bg-black z-50 pointer-events-none rounded-[3rem]"
             style={{ opacity: cardOverlayOpacity }}
          />

          {/* Content Area */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between h-full z-10 relative bg-neutral-900">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${project.category === 'real' ? 'bg-primary' : 'bg-purple-500'} shadow-[0_0_10px_currentColor] animate-pulse`} />
                <span className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest">{project.category} Project</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium text-white mb-4 md:mb-6 leading-tight tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-2 md:line-clamp-none">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                 {project.technologies.slice(0,4).map((tech: string) => (
                   <span key={tech} className="px-3 py-1.5 border border-white/10 text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-wider rounded-full bg-white/5">
                     {tech}
                   </span>
                 ))}
             </div>
            </div>
            
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group w-max flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold text-xs md:text-sm rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-xl mt-4 md:mt-6">
               View Site <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Image Area */}
          <div className="relative w-full md:w-1/2 h-[45%] md:h-full bg-black p-4 md:p-8 flex items-center justify-center border-t md:border-l md:border-t-0 border-white/5">
             <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl">
               <Image 
                 src={project.image} 
                 alt={project.title}
                 fill
                 className="object-contain object-bottom md:object-cover md:object-top transition-transform duration-1000 md:group-hover:scale-105"
                 quality={100}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
             </div>
          </div>

        </div>
      </motion.div>
    </div>
    </>
  )
}
