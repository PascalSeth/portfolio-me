'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, Send, Terminal } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from '@formspree/react';
import { useEffect } from 'react';
import Magnetic from './Magnetic';
import { Avatar } from './Avatar';


const contactMethods = [
   { icon: Mail, label: 'Email', value: 'pascalelikem@gmail.com', href: 'mailto:pascalelikem@gmail.com', description: 'Replies fast' },
   { icon: MessageCircle, label: 'WhatsApp', value: '+233 54 371 1728', href: 'https://wa.me/+233543711728', description: 'Quick chat' },
   { icon: Calendar, label: 'Meeting', value: 'Book a time', href: '#', description: '30-min call' }
];

export default function Contact() {
   const [state, handleSubmit] = useForm("mwpgjkww");

   useEffect(() => {
      if (state.succeeded) {
         toast.success('Message sent successfully! Will get back to you soon.');
      }
   }, [state.succeeded]);

   return (
      <section id="contact" className="py-24 lg:py-40 bg-transparent relative overflow-hidden min-h-[120vh] lg:min-h-screen flex items-center">

         {/* 
         3D ENVIRONMENT 
         Preserving Avatar logic as requested.
      */}
         <div className="absolute inset-0 z-0 pointer-events-none">

            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full pointer-events-auto z-10 opacity-40 lg:opacity-70">
               <Avatar actionName="Warrior" scale={1.4} />
            </div>

            {/* Ethereal Light Gradient Masks */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-10 pointer-events-none backdrop-blur-[1px]" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
         </div>

         <div className="container mx-auto px-6 lg:px-12 relative z-20 max-w-[1600px]">

            <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col gap-12 lg:gap-16 pt-20 lg:pt-0">

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
               >
                  <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-purple-600/60 mb-6 flex items-center gap-3">
                     <Terminal className="w-4 h-4 text-purple-500/50" /> Contact
                  </span>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-medium tracking-tighter mb-6 text-zinc-900 leading-[0.8]">
                     LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 italic pr-4 uppercase">Talk.</span>
                  </h2>
                  <p className="text-zinc-500 text-base md:text-lg lg:text-xl font-body max-w-lg leading-relaxed">
                     Ready to grow your business? Send me a message and let's build something great together.
                  </p>
               </motion.div>

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
                           <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 hover:border-purple-200/50 transition-all duration-500 group h-full shadow-sm">
                              <method.icon className="w-8 h-8 text-purple-400/50 group-hover:text-purple-600 transition-colors mb-6" />
                              <h3 className="text-base font-display font-medium text-zinc-900 mb-2 tracking-wide block">{method.label}</h3>
                              <p className="text-zinc-500 group-hover:text-purple-600 transition-colors text-xs font-mono">{method.value}</p>
                           </a>
                        </Magnetic>
                     </motion.div>
                  ))}
               </div>

               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/40 p-8 sm:p-12 lg:p-16 rounded-[3rem] border border-white/60 backdrop-blur-xl shadow-xl shadow-purple-500/5 flex flex-col justify-center"
               >
                  <form onSubmit={handleSubmit} className="space-y-12 group">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                        <div className="relative group/input mt-4">
                           <input type="text" name="name" required className="w-full bg-transparent border-b border-purple-200 pb-4 text-lg lg:text-xl text-zinc-900 placeholder-transparent focus:outline-none focus:border-purple-600 peer transition-colors" placeholder="Name" />
                           <label className="absolute left-0 top-0 text-zinc-400 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-purple-600 pointer-events-none -top-6">
                              Your Name
                           </label>
                        </div>
                        <div className="relative group/input mt-4">
                           <input type="email" name="email" required className="w-full bg-transparent border-b border-purple-200 pb-4 text-lg lg:text-xl text-zinc-900 placeholder-transparent focus:outline-none focus:border-purple-600 peer transition-colors" placeholder="Email" />
                           <label className="absolute left-0 top-0 text-zinc-400 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-purple-600 pointer-events-none -top-6">
                              Your Email
                           </label>
                        </div>
                     </div>

                     <div className="relative group/input mt-10 text-zinc-900">
                        <textarea rows={4} name="message" required className="w-full bg-transparent border-b border-purple-200 pb-4 text-lg lg:text-xl text-zinc-900 placeholder-transparent focus:outline-none focus:border-purple-600 peer transition-colors resize-none" placeholder="Message" />
                        <label className="absolute left-0 top-0 text-zinc-400 text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-purple-600 pointer-events-none -top-6">
                           Your Message
                        </label>
                     </div>

                     <div className="pt-8 flex justify-end">
                        <Magnetic>
                           <button type="submit" disabled={state.submitting} className="group/btn relative flex items-center justify-center gap-4 px-12 py-5 lg:py-6 bg-zinc-900 text-white rounded-full overflow-hidden disabled:opacity-50 cursor-pointer font-mono tracking-[0.2em] uppercase text-xs font-bold transition-all hover:scale-[1.02] shadow-xl shadow-purple-500/10">
                              <span className="relative z-10">{state.submitting ? 'Sending...' : 'Send Message'}</span>
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
