'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from '@formspree/react';
import { useEffect } from 'react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pascalelikem@gmail.com',
    href: 'mailto:pascalelikem@gmail.com',
    description: 'Typically reply within 2 hours'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+233 54 371 1728',
    href: 'https://wa.me/+233543711728',
    description: 'Quick questions & updates'
  },
  {
    icon: Calendar,
    label: 'Schedule Call',
    value: 'Book a meeting',
    href: '#',
    description: '30-minute consultation'
  }
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpgjkww");

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully! Will get back to you soon.');
    }
  }, [state.succeeded]);

   return (
     <section id="contact" className="py-20 bg-muted/30">
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
            Ready to Build
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Something Amazing?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your project and create a solution that drives real results for your business.
            I&apos;m here to help you succeed.
          </p>

          {/* Big CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-primary hover:bg-primary/90 text-white! text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-12"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select name="projectType" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  <option value="">Select a service</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="cloud">Cloud Migration</option>
                  <option value="optimization">Performance Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <select name="budget" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="over-15k">Over $15,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Prefer a different way to connect? Choose what works best for you.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.label}
                    </div>
                    <div className="text-muted-foreground">
                      {method.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {method.description}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Location</span>
              </div>
              <p className="text-muted-foreground">
                Available for remote projects worldwide.
                Open to relocation opportunities.
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20"
            >
              <div className="text-2xl font-bold text-primary mb-2">
                {"< 2 hours"}
              </div>
              <div className="text-sm text-muted-foreground">
                Average response time
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
