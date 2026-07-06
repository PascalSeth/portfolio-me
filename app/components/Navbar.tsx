'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Menu, X, TerminalSquare, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 100 && latest > previous) {
      setIsCompact(true); 
    } else if (latest < previous - 10 || latest < 50) {
      setIsCompact(false); 
    }
  });

  const showFull = !isCompact || isHovered;

  return (
    <>
      <motion.nav
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative flex items-center bg-white/70 backdrop-blur-2xl border border-white/60 p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group overflow-hidden"
        >
          {/* Scroll Progress Bar across the bottom of the island */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 origin-left opacity-50"
            style={{ scaleX }}
          />

          {/* Logo / Compact Avatar */}
          <Magnetic>
            <Link href="/" className="flex items-center gap-3 relative z-10 pl-2 pr-2">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-inner overflow-hidden relative">
                 <TerminalSquare className="w-5 h-5 text-white absolute z-10" />
                 {/* Tiny active pulse */}
                 <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,1)] animate-pulse" />
              </div>
              
              <AnimatePresence>
                {showFull && (
                  <motion.span 
                    layout
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    className="font-display font-medium text-lg tracking-tighter text-zinc-900 whitespace-nowrap overflow-hidden"
                  >
                    P.SETH <span className="text-purple-600/50 text-[10px] italic">v2</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </Magnetic>

          <AnimatePresence>
            {showFull && (
              <motion.div 
                layout
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-center overflow-hidden"
              >
                {/* Separator */}
                <div className="w-px h-8 bg-zinc-200 mx-4" />

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-1 mr-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onMouseEnter={() => setActiveLink(link.name)}
                      onMouseLeave={() => setActiveLink(null)}
                      className="relative px-5 py-2.5 rounded-full font-mono text-[11px] tracking-[0.15em] text-zinc-500 hover:text-zinc-900 uppercase transition-colors z-10 whitespace-nowrap"
                    >
                      {activeLink === link.name && (
                        <motion.div 
                          layoutId="island-hover"
                          className="absolute inset-0 bg-zinc-100 rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <Magnetic>
                  <Link 
                    href="#contact"
                    className="group relative hidden sm:inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-full font-mono text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Talk <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                  </Link>
                </Magnetic>

                {/* Mobile Toggle */}
                <button 
                  onClick={() => setIsOpen(true)}
                  className="md:hidden ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors shrink-0"
                >
                   <MenuIcon />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Full Screen Creative Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-zinc-900/95 backdrop-blur-3xl flex flex-col items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-10 text-center w-full max-w-sm">
               {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center justify-center text-5xl font-display font-medium text-white/50 hover:text-white transition-colors uppercase tracking-tighter w-full"
                  >
                    <span className="absolute -left-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 text-purple-500">→</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                 className="mt-10"
              >
                 <Link 
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 rounded-full font-mono text-xs uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
                  >
                    Start a project
                 </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="1.5" rx="0.75" fill="currentColor" />
      <rect y="8.5" width="14" height="1.5" rx="0.75" fill="currentColor" className="ml-auto" />
    </svg>
  );
}