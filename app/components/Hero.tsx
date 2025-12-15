import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const FloatingBadge = ({ 
  children, 
  variant = "teal",
  className = ""
}: { 
  children: React.ReactNode; 
  variant?: "teal" | "purple";
  className?: string;
}) => (
  <div 
    className={`px-6 py-3 rounded-full font-medium text-sm tracking-wide cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 ${
      variant === "teal" 
        ? "bg-primary text-primary-foreground" 
        : "bg-secondary text-secondary-foreground"
    } ${className}`}
  >
    {children}
  </div>
);

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden">
      {/* Main content container */}
      <div className=" mx-auto px-6 lg:px-12 min-h-screen flex ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center w-full py-6">
          
          {/* Left side - Image and badges */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Portrait image */}
            <div className="relative">
              <Image
                src='/avatar.jpg'
                alt="Professional portrait"
                width={450}
                height={600}
                className="w-80 md:w-96 lg:w-[450px] h-auto object-cover rounded-lg"
              />
              
              {/* Floating badges around the image */}
              <div className="absolute -left-4 md:-left-8 top-1/4 animate-[float_4s_ease-in-out_infinite]">
                <FloatingBadge variant="purple">
                  Full-Stack
                </FloatingBadge>
              </div>
              
              <div className="absolute -right-4 md:-right-12 bottom-1/3 animate-[float_4s_ease-in-out_infinite_1s]">
                <FloatingBadge variant="teal">
                  Senior Developer
                </FloatingBadge>
              </div>

              <div className="absolute -right-4 md:-right-12 top-1 animate-[float_4s_ease-in-out_infinite_2s]">
                <FloatingBadge variant="purple">
                  Digital Marketer
                </FloatingBadge>
              </div>
            </div>
            
            {/* Name with arrow */}
            <div className="absolute -bottom-4 text-gray-300 left-0 lg:left-0">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold  tracking-tight flex items-end gap-4">
                <span>Pascal</span>
              </h1>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold  tracking-tight flex items-center gap-4">
                <span>Seth</span>
                <ArrowRight className="w-10 h-10 md:w-14 md:h-14  mt-2" strokeWidth={1.5} />
              </h1>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <div className="space-y-6">
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-body">
                / This is me
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
                Senior Software Developer & Digital Marketing Expert
              </h2>
              
              <p className="text-muted-foreground font-body text-base md:text-lg max-w-md leading-relaxed">
                With over 5 years of hands-on experience, I design and build high-performance digital products while driving growth through strategic marketing. From custom software to conversion-optimized campaigns, I deliver measurable results that scale your business.
              </p>

              <p className="text-muted-foreground font-body text-base md:text-lg max-w-md leading-relaxed">
                I specialize in turning complex requirements into clean, intuitive, and scalable solutions — on time and within budget. From startup MVPs to enterprise-grade platforms, I deliver work that looks stunning and performs flawlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-muted-foreground text-sm tracking-widest uppercase animate-[bounce-subtle_2s_ease-in-out_infinite]">
        <span className="text-xs tracking-wider">scroll for more</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}

export default Hero;
