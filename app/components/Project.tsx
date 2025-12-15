'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

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
    title: "3D Interactive Portfolio",
    description:
      "Immersive 3D portfolio website with smooth animations and interactive elements. Features advanced Three.js integration with optimized performance and SEO.",
    image: '/projects/3dportfolio.png',
    technologies: ["Three.js", "React", "Next.js", "Framer Motion", "WebGL"],
    liveUrl: "https://sethpascal.netlify.app",
    category: "personal",
  },
  {
    id: 2,
    title: "Bird Notion Clone",
    description:
      "Full-featured note-taking application with real-time collaboration, rich text editing, and cloud synchronization. Built with modern web technologies.",
    image: '/projects/birdnotion.png',
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://bird-notion.netlify.app/",
    category: "personal",
  },
  {
    id: 3,
    title: "CarHub - Car Rental Platform",
    description:
      "Comprehensive car rental marketplace with advanced search, booking system, and payment integration. Features real-time availability and user dashboards.",
    image: '/projects/carhub.png',
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Mapbox API"],
    liveUrl: "https://pascalcarhub.netlify.app/",
    category: "personal",
  },
  {
    id: 4,
    title: "Fresco - Art Gallery Platform",
    description:
      "Digital art gallery platform with NFT integration, artist portfolios, and marketplace functionality. Connects artists with collectors worldwide.",
    image: '/projects/fresco.png',
    technologies: ["React", "Node.js", "Web3", "IPFS", "Ethereum", "Tailwind CSS"],
    liveUrl: "https://fresco-food.netlify.app/",
    category: "personal",
  },
  {
    id: 5,
    title: "House of Bek - Fashion E-commerce",
    description:
      "Luxury fashion e-commerce platform with advanced product filtering, wishlist functionality, and seamless checkout experience.",
    image: '/projects/houseofbek.png',
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS", "Payment APIs"],
    liveUrl: "https://houseofbek.netlify.app/",
    category: "personal",
  },
  {
    id: 6,
    title: "MyClean - Cleaning Services",
    description:
      "Professional cleaning services booking platform with real-time scheduling, service customization, and automated invoicing system.",
    image: '/projects/myclean.png',
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Calendar API"],
    liveUrl: "https://mycleanapp.org/",
    category: "real",
  },
  {
    id: 7,
    title: "RayHealth - Healthcare Platform",
    description:
      "Comprehensive healthcare management system with patient portals, appointment scheduling, and telemedicine integration.",
    image: '/projects/rayhealth.png',
    technologies: ["Next.js", "PostgreSQL", "Twilio", "HIPAA Compliance", "React"],
    liveUrl: "https://rayhealthcareafrica.com/",
    category: "real",
  },
  {
    id: 8,
    title: "TranzBook - Transportation Booking",
    description:
      "Multi-modal transportation booking platform with real-time tracking, multi-currency payments, and integrated logistics management.",
    image: '/projects/tranzbook.png',
    technologies: ["React", "Express.js", "MySQL", "Google Maps API", "Payment Gateway"],
    liveUrl: "https://tranzbook.co",
    category: "real",
  },
  {
    id: 9,
    title: "Jl Espresso - Coffee Service",
    description:
      "Professional coffee service platform offering premium espresso solutions, equipment maintenance, and training for businesses and events.",
    image: '/projects/jlespresso.png',
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Booking System"],
    liveUrl: "https://www.jlespressoservice.com/",
    category: "real",
  },
];


export default function Project() {
  const realProjects = projects.filter(p => p.category === 'real');
  const personalProjects = projects.filter(p => p.category === 'personal');

  return (
    <div id="projects">
      {/* Real Projects Section */}
      <ProjectSection title="Real Projects" description="Professional projects I've developed for clients and businesses." projects={realProjects} />

      {/* Personal Projects Section */}
      <ProjectSection title="Personal Projects" description="Personal projects and experiments I've built for learning and fun." projects={personalProjects} />
    </div>
  );
}

function ProjectSection({ title, description, projects }: { title: string; description: string; projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalProjects = projects.length;

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const headerHeight = useTransform(scrollYProgress, [0, 0.05], [200, 0]);

  if (totalProjects === 0) return null;

  return (
    <section ref={containerRef} className="relative" style={{ height: `${totalProjects * 100}vh` }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen bg-background overflow-hidden flex flex-col">
        {/* Header */}
        <motion.div
          className="flex-shrink-0 text-center bg-gradient-to-b from-background via-background to-transparent overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3"
          >
            {title}
          </motion.h2>
          <motion.p           style={{ opacity: headerOpacity, height: headerHeight }}
  className="text-muted-foreground text-lg max-w-2xl mx-auto px-6">
            {description}
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="flex-1 relative">
          {projects.map((project, index) => {
            return (
              <ProjectSlideWrapper
                key={project.id}
                project={project}
                index={index}
                totalProjects={totalProjects}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {projects.map((_, index) => (
            <ProgressDot
              key={index}
              index={index}
              totalProjects={totalProjects}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSlideWrapper({
  project,
  index,
  totalProjects,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  totalProjects: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const progress = useTransform(
    scrollYProgress,
    [(index - 0.5) / totalProjects, index / totalProjects, (index + 0.5) / totalProjects],
    [0, 0.5, 1]
  );
  const zIndex = useTransform(progress, [0, 0.5, 1], [0, 10, 0]);
  const isLast = index === totalProjects - 1;

  return (
    <motion.div style={{ position: "absolute", inset: 0, zIndex }}>
      <ProjectSlideInner project={project} progressValue={progress} isLast={isLast} />
    </motion.div>
  );
}

function ProjectSlideInner({
  project,
  progressValue,
  isLast = false,
}: {
  project: Project;
  progressValue: MotionValue<number>;
  isLast?: boolean;
}) {
  const opacity = useTransform(progressValue, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, isLast ? 1 : 0]);
  const x = useTransform(progressValue, [0, 0.5, 1], isLast ? [300, 0, 0] : [300, 0, -300]);
  const scale = useTransform(progressValue, [0, 0.5, 1], isLast ? [0.95, 1, 1] : [0.95, 1, 0.95]);
  const pointerEvents = "auto";

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ opacity, x, scale, pointerEvents }}
    >
      <div className="max-w-4xl w-full flex flex-col items-center space-y-3">
        {/* Image with Overlay */}
        <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Technologies Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ) : (
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Technologies Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-foreground">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  index,
  totalProjects,
  scrollYProgress,
}: {
  index: number;
  totalProjects: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scale = useTransform(
    scrollYProgress,
    [index / totalProjects, (index + 0.5) / totalProjects, (index + 1) / totalProjects],
    [1, 1.5, 1]
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [index / totalProjects, (index + 0.5) / totalProjects, (index + 1) / totalProjects],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div
      className="w-3 h-3 rounded-full bg-primary cursor-pointer"
      style={{ scale, opacity: bgOpacity }}
    />
  );
}
