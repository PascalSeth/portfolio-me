'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, Send, Terminal } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from '@formspree/react';
import { useEffect } from 'react';
import Magnetic from './Magnetic';
import { Avatar } from './Avatar';

const contactMethods = [
   { icon: Mail, label: 'Email', value: 'pascalelikem@gmail.com', href: 'mailto:pascalelikem@gmail.com', description: 'Replies within 2 hours' },
   { icon: MessageCircle, label: 'WhatsApp', value: '+233 54 371 1728', href: 'https://wa.me/+233543711728', description: 'Quick questions' },
   { icon: Calendar, label: 'Schedule Call', value: 'Book a meeting', href: '#', description: '30-min consultation' }
];

export default function Contact() {
   const [state, handleSubmit] = useForm("mwpgjkww");

   useEffect(() => {
      if (state.succeeded) {
         toast.success('Message sent successfully! Will get back to you soon.');
      }
   }, [state.succeeded]);

   return (
      <section id="contact" className="py-24 lg:py-40 bg-neutral-950 relative overflow-hidden min-h-[120vh] lg:min-h-screen flex items-center">

         {/* 
        BORDERLESS 3D ENVIRONMENT 
        The Avatar natively takes up the complete background space of the section, 
        positioned to walk beautifully on the right half of the screen.
      */}
         <div className="absolute inset-0 z-0 pointer-events-none">

            {/* Noise overlay for cinematic grading over the 3D scene */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay z-20" />

            {/* The 3D Canvas spanning the right side natively */}
            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full pointer-events-auto z-10">
               <Avatar actionName="Standing" scale={2.2} />
            </div>

            {/* 
           Deep gradient fade protecting the form legibility on the left 
           This creates an ultra-sleek, atmospheric vignette where the 3D model steps out of the shadows.
         */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 lg:via-neutral-950/80 to-transparent z-10 pointer-events-none" />

            {/* Bottom fade blending seamlessly into the footer */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" />
         </div>

         <div className="container mx-auto px-6 lg:px-12 relative z-20 max-w-[1600px]">

            {/* Left-Aligned Master Layout */}
            <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col gap-12 lg:gap-16 pt-20 lg:pt-0">

               {/* Section Header */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
               >
                  <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-cyan-400 mb-6 flex items-center gap-3">
                     <Terminal className="w-4 h-4 text-cyan-400" /> Secure Communications
                  </span>
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-medium tracking-tighter mb-6 text-white leading-[0.8] mix-blend-difference">
                     INITIATE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-white italic pr-4">CONTACT.</span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg lg:text-xl font-body max-w-lg leading-relaxed">
                     Have a sophisticated digital project in mind? Let's engineer something breathtaking. My comms link is currently open.
                  </p>
               </motion.div>

               {/* The Fast Links Grid Container */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                  {contactMethods.map((method, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="h-full"
                     >
                        <Magnetic>
                           <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 lg:p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-500 group h-full backdrop-blur-md shadow-2xl">
                              <method.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white/30 group-hover:text-cyan-400 transition-colors mb-6" />
                              <h3 className="text-sm lg:text-base font-display font-medium text-white mb-2 tracking-wide block">{method.label}</h3>
                              <p className="text-white/40 group-hover:text-white/60 transition-colors text-xs font-mono">{method.value}</p>
                           </a>
                        </Magnetic>
                     </motion.div>
                  ))}
               </div>

               {/* The Master Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900/40 p-8 sm:p-12 lg:p-14 rounded-[3rem] border border-white/5 backdrop-blur-md shadow-2xl flex flex-col justify-center"
               >
                  <form onSubmit={handleSubmit} className="space-y-12 group">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                        <div className="relative group/input mt-4">
                           <input type="text" name="name" required className="w-full bg-transparent border-b border-white/10 pb-4 text-lg lg:text-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors" placeholder="Name" />
                           <label className="absolute left-0 top-0 text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cyan-400 pointer-events-none -top-6">
                              Legal Designation (Name)
                           </label>
                        </div>
                        <div className="relative group/input mt-4">
                           <input type="email" name="email" required className="w-full bg-transparent border-b border-white/10 pb-4 text-lg lg:text-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors" placeholder="Email" />
                           <label className="absolute left-0 top-0 text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cyan-400 pointer-events-none -top-6">
                              Transmission Address (Email)
                           </label>
                        </div>
                     </div>

                     <div className="relative group/input mt-10 text-white">
                        <textarea rows={4} name="message" required className="w-full bg-transparent border-b border-white/10 pb-4 text-lg lg:text-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 peer transition-colors resize-none" placeholder="Message" />
                        <label className="absolute left-0 top-0 text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cyan-400 pointer-events-none -top-6">
                           Encrypted Message Payload
                        </label>
                     </div>

                     <div className="pt-8 flex justify-end">
                        <Magnetic>
                           <button type="submit" disabled={state.submitting} className="group/btn relative flex items-center justify-center gap-4 px-10 py-5 lg:py-6 bg-white text-black rounded-[2rem] overflow-hidden disabled:opacity-50 cursor-pointer font-mono tracking-[0.2em] uppercase text-xs font-bold transition-transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                              <span className="relative z-10">{state.submitting ? 'Transmitting...' : 'Send Transmission'}</span>
                              <Send className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                           </button>
                        </Magnetic>
                     </div>
                  </form>
               </motion.div>

            </div>
         </div>
      </section>
   );
}
