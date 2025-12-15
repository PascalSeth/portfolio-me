'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Shield } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Happy Clients', value: '20+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Technologies', value: '7+' }
];

const values = [
  {
    icon: CheckCircle,
    title: 'Results-Driven',
    description: 'Every project delivers measurable business impact'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is my priority, not just writing code'
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Quick turnaround without compromising quality'
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Built to last with enterprise-grade security'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                You Get Results,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Not Just Code</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  You run a business. You need a website that actually brings in customers, not just looks pretty.
                  That&apos;s why I combine technical expertise with marketing strategy to build fast, secure sites that convert visitors into clients while driving growth through targeted campaigns.
                </p>
                <p>
                  No tech headaches. No endless revisions. Just a professional online presence that works
                  24/7 to grow your business while you focus on what you do best.
                </p>
                <p>
                  From startups to enterprise clients, I&apos;ve helped businesses like yours increase conversions,
                  reduce costs, and scale efficiently. Let&apos;s build something that actually moves your business forward.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <value.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-2xl">
                <Image
                  src="https://i.pinimg.com/736x/5a/4f/5e/5a4f5e048e161fee448cc357aab65b19.jpg"
                  alt="Happy client"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl object-cover"
                />
                {/* <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Pascal Seth
                  </h3>
                  <p className="text-muted-foreground">
                    Senior Software Developer
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Turning complex requirements into simple, scalable solutions
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}