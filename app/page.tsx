import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
