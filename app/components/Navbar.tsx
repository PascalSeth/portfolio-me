'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, TerminalSquare } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  // Hide Navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Set smaller padding styling state
    setScrolled(latest > 50);

    // Hide/Show logic
    if (latest > 150 && latest > previous) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { 
            y: 0, 
            opacity: 1, 
            // Cyber Glitch Effect on Entrance
            x: [0, -5, 5, -2, 2, 0],
            filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(0deg)"],
            transition: { duration: 0.4, ease: "easeOut" }
          },
          hidden: { 
            y: "-120%", 
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" }
          },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 transition-[padding] duration-500 
          ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div 
          className="relative flex items-center justify-between w-full max-w-7xl bg-neutral-950/80 backdrop-blur-xl border border-cyan-500/30 px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.1)] group transition-colors hover:border-cyan-400/60"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 0)" }}
        >
          {/* Cyber accents borders */}
          <div className="absolute top-0 left-0 w-16 h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
          <div className="absolute bottom-0 right-16 w-24 h-[2px] bg-fuchsia-500 shadow-[0_0_15px_#d946ef]" />
          <div className="absolute top-0 right-0 w-[2px] h-8 bg-cyan-400/50" />
          <div className="absolute bottom-4 left-0 w-[2px] h-8 bg-fuchsia-400/50" />
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-10 group/logo">
            <TerminalSquare className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover/logo:text-fuchsia-400 transition-colors" />
            <span className="font-display font-medium text-lg md:text-xl tracking-widest uppercase text-white group-hover/logo:text-cyan-400 transition-colors">
              P.SETH <span className="text-cyan-500/50 text-[10px] md:text-xs font-mono ml-1 hidden sm:inline-block">v2.0_</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link 
                  href={link.href}
                  className="relative font-mono text-xs lg:text-sm tracking-[0.2em] text-gray-400 hover:text-cyan-400 uppercase transition-colors group/link py-2 flex items-center"
                >
                  <span className="opacity-0 group-hover/link:opacity-100 text-cyan-500 mr-2 transition-opacity duration-300">{'<'}</span>
                  {link.name}
                  <span className="opacity-0 group-hover/link:opacity-100 text-cyan-500 ml-2 transition-opacity duration-300">{'/>'}</span>
                  
                  {/* Glitch underline track */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-400 group-hover/link:w-[80%] transition-all duration-300" />
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* System Status / CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Sys.Online</span>
            </div>
            
            <Magnetic>
              <Link 
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold font-mono text-xs uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300 overflow-hidden group/btn"
                style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-100" />
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-cyan-400 hover:text-white transition-colors relative z-10 p-2 border border-cyan-500/30 rounded bg-cyan-950/30"
          >
             <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Cyber Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-neutral-950 flex flex-col justify-center px-6 sm:px-12"
          >
            {/* Cyber Grid Bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header HUD */}
            <div className="absolute top-6 sm:top-12 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center border-b-2 border-cyan-500/30 pb-4">
              <span className="font-mono text-cyan-400 tracking-[0.2em] text-[10px] sm:text-xs uppercase flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-[ping_2s_infinite]" /> Terminal Active
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-fuchsia-400 transition-colors border border-white/10 p-2 rounded hover:border-fuchsia-500/50 bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links Array */}
            <div className="flex flex-col gap-6 sm:gap-10 relative z-10 mt-12 sm:mt-24">
               {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col border-l-2 border-cyan-900 hover:border-cyan-400 pl-6 sm:pl-8 py-2 transition-all duration-300"
                  >
                    <span className="text-cyan-500/50 font-mono text-[10px] sm:text-xs mb-2 tracking-widest uppercase flex items-center gap-2">
                       0{i + 1} <span className="w-4 h-px bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
                    </span>
                    <span className="text-4xl sm:text-6xl font-display font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 uppercase tracking-tighter transition-all duration-500">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Direct Connect Button (Mobile only) */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               className="mt-16 relative z-10 md:hidden"
            >
               <Link 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-5 bg-cyan-500 text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
               >
                 Execute Connection
               </Link>
            </motion.div>

            {/* Footer Data */}
            <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 border-t-2 border-cyan-500/30 pt-4 flex justify-between items-end text-[8px] sm:text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <span className="flex flex-col gap-1">
                 <span>Encryption: 256-BIT</span>
                 <span className="text-cyan-400">Security: Enabled</span>
              </span>
              <span className="text-white/60">P.SETH / © 2026</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}