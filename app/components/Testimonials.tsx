'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Pascal developed our transportation booking platform from the ground up, integrating complex logistics APIs and creating an intuitive user interface. The platform now processes thousands of bookings monthly with 99.9% uptime and has become our primary revenue driver.",
    author: "Emmanuel Asare",
    role: "Founder",
    company: "Tranzbook",
    avatar: "",
    results: ["5000+ monthly bookings", "99.9% uptime", "Revenue growth 300%"],
    rating: 5
  },
  {
    id: 2,
    quote: "Working with Pascal on our cleaning services app was exceptional. He built a robust mobile platform with real-time booking, payment processing, and GPS tracking. We've onboarded 500+ service providers and served over 2000 customers since launch.",
    author: "Francis Osei",
    role: "CEO",
    company: "Myclean App",
    avatar: "",
    results: ["2000+ customers served", "500+ providers onboarded", "4.8★ average rating"],
    rating: 5
  },
  {
    id: 3,
    quote: "Pascal transformed our coffee shop's online presence with a beautiful e-commerce platform. The custom ordering system and inventory management have increased our online sales by 150% and made operations much more efficient.",
    author: "JL Mensah",
    role: "Owner",
    company: "JL Espresso",
    avatar: "",
    results: ["150% sales increase", "Streamlined operations", "Enhanced customer experience"],
    rating: 5
  },
  {
    id: 4,
    quote: "The health management app Pascal created for us reached 10,000 downloads in the first year. The secure patient data handling, intuitive UI, and telemedicine features have revolutionized how our users manage their healthcare.",
    author: "Dr. Raymond Addo",
    role: "Medical Director",
    company: "RayHealth",
    avatar: "",
    results: ["10k+ downloads", "95% user satisfaction", "Improved patient outcomes"],
    rating: 5
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Projects Completed" },
  { value: "200%", label: "Average ROI Increase" },
  { value: "8hrs", label: "Average Response Time" }
];

const trustedClients = [
  { name: "DVLA", logo: "https://www.dvla.gov.gh/images/new_logo.png" },
  { name: "Tranzbook", logo: "https://tranzbook.co/logoalt.png" },
  { name: "MycleanApp", logo: "https://mycleanapp.org/a1.png" },
  { name: "Jl Espresso", logo: "https://www.jlespressoservice.com/jlexpresso/JLLogo.png" },
  { name: "Stan Paraclete", logo: "https://www.stanparaclete.com/_next/image?url=%2Flogo-bg.png&w=256&q=75" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Real Results From
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Real Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients say about working together
            and the measurable impact on their businesses.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow max-w-2xl mx-auto"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.results.map((result) => (
                      <span
                        key={result}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-8">
            Trusted by startups and enterprises worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedClients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}