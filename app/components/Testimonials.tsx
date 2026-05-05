'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Kwame Osei",
    role: "Tech Manager",
    content: "Pascal built a great payment system for us. It handles all our transactions perfectly without any issues.",
  },
  {
    name: "Efua Mensah",
    role: "Business Owner",
    content: "He built a fast platform that helped our business grow. Our user numbers went up by 300% in the first week.",
  },
  {
    name: "Chinedu Okafor",
    role: "Product Director",
    content: "The 3D work is amazing. It runs fast on all phones, even the cheaper ones in our market.",
  },
  {
    name: "Ama Serwaa",
    role: "Creative Lead",
    content: "It's hard to find someone who understands both design and code this well. Pascal is a great talent.",
  }
];

export default function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 lg:py-40 bg-transparent relative overflow-hidden border-t border-purple-100">
      
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-purple-600/40 mb-4">
            What clients say
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-zinc-900 uppercase italic">
            Testimonials.
          </h2>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll Row 1 */}
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 px-4"
        >
          {doubledTestimonials.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll Row 2 (Reverse) */}
      <div className="flex overflow-hidden mt-12 group">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 px-4"
        >
          {doubledTestimonials.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[450px] p-10 rounded-[3rem] bg-white/90 backdrop-blur-sm border border-white/60 hover:border-purple-200/50 transition-all duration-500 shadow-xl shadow-purple-500/5 group">
      <div className="flex flex-col h-full gap-8">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm border border-purple-100">
          <Quote className="w-5 h-5 text-purple-400" />
        </div>
        
        <p className="text-zinc-600 text-base md:text-lg leading-relaxed italic font-body">
          "{testimonial.content}"
        </p>

        <div className="pt-8 border-t border-purple-100 mt-auto">
          <h4 className="text-zinc-900 font-medium text-sm md:text-base tracking-tight">{testimonial.name}</h4>
          <p className="text-purple-600/60 font-mono text-[10px] uppercase tracking-widest mt-2">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}