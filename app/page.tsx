import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CyberBackground from "./components/CyberBackground";
import BootLoader from "./components/BootLoader";

export default function Home() {
  return (
    <>
      {/* 1. Global Terminal Boot Sequence */}
      <BootLoader />

      {/* 2. Global Consolidated Heavy Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <CyberBackground />
      </div>

      {/* 3. Global Content Plane */}
      <div className="relative z-10 font-body">
        <Hero />
        <Project />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
