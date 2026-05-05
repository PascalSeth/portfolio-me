'use client';

import { useRef, useState } from "react";
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
    id: 0,
    title: "TrendiZip",
    description: "A premium multi-vendor fashion e-commerce ecosystem empowering independent creators.",
    image: '/projects/trendizip.png',
    technologies: ["Next.js", "React", "Node.js", "Stripe"],
    liveUrl: "https://trendizip.com/",
    category: "real",
  },
  {
    id: 1,
    title: "BOTSVILLE",
    description: "Premier MLBB esports gaming community based in Ghana, fostering competitive talent.",
    image: '/projects/botsville.png',
    technologies: ["React", "Next.js", "TailwindCSS"],
    liveUrl: "https://botsvillegh.com/",
    category: "real",
  },
  {
    id: 2,
    title: "DivaDons",
    description: "Exclusive African e-commerce shop delivering premium authentic fashion and beauty products.",
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
    technologies: ["React", "Express.js", "MySQL", "Google Maps"],
    liveUrl: "https://tranzbook.co",
    category: "real",
  },
  {
    id: 4,
    title: "JL Espresso",
    description: "Premium coffee service platform offering equipment maintenance and training.",
    image: '/projects/jlespresso.png',
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.jlespressoservice.com/",
    category: "real",
  },
  {
    id: 5,
    title: "MyClean Services",
    description: "Professional cleaning booking platform with real-time scheduling and automated invoicing.",
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
    id: 11,
    title: "RayHealth",
    description: "Healthcare management system with patient portals and telemedicine integration.",
    image: '/projects/rayhealth.png',
    technologies: ["Next.js", "PostgreSQL", "Twilio", "React"],
    liveUrl: "https://rayhealthcareafrica.com/",
    category: "real",
  }
];

export default function Project() {
  const container = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section ref={container} id="projects" className="bg-transparent py-24 relative z-10 w-full overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-20 text-center relative z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-purple-600/60 mb-4 block">
          Recent Projects
        </span>
        <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-zinc-900 uppercase">
          Case <span className="text-purple-600 italic">Studies.</span>
        </h2>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-[15svh] pt-[5svh]">
        {visibleProjects.map((project, i) => {
          return (
            <Card
              key={project.id}
              project={project}
              index={i}
            />
          )
        })}

        <div id="scan-btn-container" className="h-[20svh] w-full flex items-center justify-center relative z-20">
          {visibleCount < projects.length && (
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 4, projects.length))}
              className="group relative px-10 py-5 bg-zinc-900 text-white font-mono text-xs uppercase tracking-[0.3em] overflow-hidden transition-all rounded-full shadow-xl hover:bg-purple-600 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Terminal className="w-4 h-4" /> Load More Work //
              </span>
            </button>
          )}
        </div>
      </div>

    </section>
  );
}

function Card({ project, index }: any) {
  const tracker = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: tracker,
    offset: ["start 15vh", "end 15vh"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const upwardYOffset = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const cardOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

  return (
    <div className="relative w-full group cursor-pointer">
      <div 
         ref={tracker} 
         className="absolute left-0 top-0 w-px h-[180svh] pointer-events-none"
      />
      
      <div 
        className="sticky flex items-start justify-center w-full z-10 top-[15svh]"
      >
        <motion.div
           style={{
             scale: cardScale,
             y: upwardYOffset,
             willChange: "transform",
           }}
           className="w-full flex justify-center origin-top transform-gpu h-[70svh] min-h-[500px] max-h-[700px]"
        >
          <div className="relative flex flex-col w-full h-full bg-white/90 backdrop-blur-sm border border-white/60 overflow-hidden shadow-2xl rounded-[3rem] group-hover:border-purple-200/50 transition-colors duration-500 transform-gpu">
            
            <div className="absolute inset-0 z-0 bg-zinc-100">
               <Image 
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover opacity-60 transition-transform duration-[3s] ease-out group-hover:scale-105"
                 quality={80}
               />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/90 md:via-white/60 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute top-1/2 -translate-y-1/2 right-12 text-[200px] font-display font-bold text-black/[0.03] group-hover:text-purple-600/[0.05] transition-colors duration-700 z-10 pointer-events-none tracking-tighter">
               0{index + 1}
            </div>

            <motion.div
              className="absolute inset-0 bg-white z-40 pointer-events-none"
              style={{ opacity: cardOverlayOpacity }}
            />

            <div className="relative z-20 w-full h-full flex flex-col justify-between p-8 md:p-16">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 border border-purple-100 rounded-full shadow-sm">
                     <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
                     <span className="font-mono text-[10px] text-purple-600 uppercase tracking-widest">
                        {project.category}
                     </span>
                  </div>
               </div>

               <div className="max-w-2xl flex flex-col gap-6 border-l-2 border-purple-500/30 pl-8 relative">
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 tracking-tighter leading-[0.9]">
                     {project.title}
                  </h3>
                  
                  <p className="text-zinc-600 font-body text-base md:text-lg leading-relaxed max-w-lg">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                     {project.technologies.slice(0, 4).map((tech: string) => (
                       <span key={tech} className="px-3 py-1.5 bg-white/80 border border-purple-100 text-purple-600/70 text-[10px] font-mono tracking-[0.2em] uppercase rounded-full">
                         {tech}
                       </span>
                     ))}
                  </div>

                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/btn w-max flex items-center gap-4 mt-6 bg-zinc-900 text-white px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-purple-600 transition-all rounded-full shadow-lg">
                     <span className="relative z-10 flex items-center gap-4">
                        View Project <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
