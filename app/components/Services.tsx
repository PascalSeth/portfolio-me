'use client'
import { motion } from "framer-motion";
import { ArrowRight,  Check } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Custom web applications that solve real business problems.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    outcomes: ["50% faster tasks", "Real-time features", "Optimized UX"],
    price: "From $500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    title: "Mobile Apps & PWAs",
    description: "Native and progressive web apps that engage users.",
    technologies: ["React Native", "Flutter", "PWA"],
    outcomes: ["App Store featured", "90% retention"],
    price: "From $750",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "E-commerce Solutions",
    description: "High-converting stores with automation.",
    technologies: ["Shopify", "Stripe", "WooCommerce"],
    outcomes: ["340% conversion boost", "LTV +200%"],
    price: "From $800",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies that scale revenue.",
    technologies: ["Google Ads", "Meta", "SEO"],
    outcomes: ["300% more leads", "Revenue +250%"],
    price: "From $150/mo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Performance & SEO",
    description: "Lightning-fast sites that rank.",
    technologies: ["Core Web Vitals", "Technical SEO"],
    outcomes: ["8s → 1.2s load", "Traffic +300%"],
    price: "From $100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Complete Solutions",
    description: "End-to-end digital transformation.",
    technologies: ["Custom Software", "CRM", "Analytics"],
    outcomes: ["Full optimization", "CAC -50%"],
    price: "From $800",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
   return (
     <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-5"
          >
            What I Offer
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight">
            Services that
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
              drive results
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Clear solutions for real business challenges. Each service delivers measurable impact on your bottom line.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Web Development - Featured */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 min-h-[380px] group relative overflow-hidden rounded-3xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[0].image})` }}
            />
            {/* Gray Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/40" />

            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
              <div className="max-w-md">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-4">
                  {services[0].price}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                <p className="text-neutral-300 mb-4">{services[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {services[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {services[0].outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-primary" />
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Apps */}
          <motion.div variants={cardVariants} className="min-h-[380px] group relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[1].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/85 to-neutral-900/20" />

            <div className="relative h-full p-6 flex flex-col justify-end z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-3 self-start">
                {services[1].price}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{services[1].title}</h3>
              <p className="text-sm text-neutral-300 mb-3">{services[1].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {services[1].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* E-commerce */}
          <motion.div variants={cardVariants} className="min-h-[320px] group relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[2].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/85 to-neutral-900/20" />

            <div className="relative h-full p-6 flex flex-col justify-end z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-3 self-start">
                {services[2].price}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{services[2].title}</h3>
              <p className="text-sm text-neutral-300 mb-3">{services[2].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {services[2].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={cardVariants} className="min-h-[320px] group relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[3].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/85 to-neutral-900/20" />

            <div className="relative h-full p-6 flex flex-col justify-end z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-3 self-start">
                {services[3].price}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{services[3].title}</h3>
              <p className="text-sm text-neutral-300 mb-3">{services[3].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {services[3].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div variants={cardVariants} className="min-h-[320px] group relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[4].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/85 to-neutral-900/20" />

            <div className="relative h-full p-6 flex flex-col justify-end z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-3 self-start">
                {services[4].price}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{services[4].title}</h3>
              <p className="text-sm text-neutral-300 mb-3">{services[4].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {services[4].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Complete Solutions - Featured */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 min-h-[320px] group relative overflow-hidden rounded-3xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[5].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/85 to-neutral-900/30" />

            <div className="relative h-full p-6 md:p-8 flex flex-col justify-center z-10 max-w-lg">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-4 self-start">
                {services[5].price}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{services[5].title}</h3>
              <p className="text-neutral-300 mb-4">{services[5].description}</p>
              <div className="flex flex-wrap gap-2">
                {services[5].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-gradient-to-r from-primary to-orange-400">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3),_transparent_60%)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Ready to transform your business?
                </h3>
                <p className="text-primary-foreground/80 max-w-lg">
                  Let&apos;s discuss your unique needs and build something extraordinary.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 bg-card text-foreground font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl flex items-center gap-2"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl transition-all hover:bg-primary-foreground/10"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

