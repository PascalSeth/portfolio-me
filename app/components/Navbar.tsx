'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, TerminalSquare, Clock, ArrowUpRight } from 'lucide-react';
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 50);

    if (latest > 400 && latest > previous) {
      setHidden(true); 
    } else {
      setHidden(false); 
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 transition-all duration-500 
          ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div 
          className="relative flex items-center justify-between w-full max-w-6xl bg-white/40 backdrop-blur-2xl border border-white/60 px-4 md:px-8 py-3 rounded-full shadow-xl shadow-purple-500/5 group transition-all hover:bg-white/60"
        >
          {/* Creative Left: Time/Status */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
               <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">System.Active</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
               <Clock className="w-3 h-3" />
               <span className="font-mono text-[9px] uppercase tracking-widest">EST / 07:53</span>
            </div>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-10 group/logo">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
               <TerminalSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-medium text-lg md:text-xl tracking-tighter text-zinc-900">
              P.SETH <span className="text-purple-600/50 text-[10px] italic">v2</span>
            </span>
          </Link>

          {/* Right: Nav Links + CTA */}
          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden md:flex items-center gap-1 bg-zinc-900/5 p-1 rounded-full border border-black/5">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-6 py-2 rounded-full font-mono text-[11px] tracking-[0.15em] text-zinc-500 hover:text-zinc-900 uppercase transition-colors z-10"
                >
                  {hoveredLink === link.name && (
                    <motion.div 
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              ))}
            </div>

            <Magnetic>
              <Link 
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-zinc-900 text-white rounded-full font-mono text-[11px] uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Magnetic>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-white"
            >
               <MenuIcon />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Creative Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] bg-white/90 backdrop-blur-3xl flex flex-col items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-8 text-center">
               {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-display font-medium text-zinc-900 hover:text-purple-600 transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="1.5" rx="0.75" fill="currentColor" />
      <rect y="8.5" width="20" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}