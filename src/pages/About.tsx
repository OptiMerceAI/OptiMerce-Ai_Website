import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/SectionComponents";
import { Lightbulb, Target, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

const AboutPage = () => (
  <Layout>
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 block">About</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4 sm:mb-6">
            Empowering SMEs with <span className="gradient-text">intelligent AI</span>
          </h1>
          <p className="text-base sm:text-lg text-white leading-relaxed">
            OptiMerce AI was founded with a clear mission: make enterprise-grade AI accessible to every e-commerce business.
          </p>
        </motion.div>
      </div>
    </section>

    <Section>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        <div>
          <SectionHeading eyebrow="Our Story" title="From frustration to innovation" />
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>OptiMerce AI was born from a firsthand understanding of the challenges e-commerce businesses face. As data scientists and e-commerce operators, our founding team saw how small and medium-sized businesses were locked out of the AI-driven optimisation tools that large enterprises take for granted.</p>
            <p>The tools available were either too expensive, too complex, or too fragmented—forcing growing brands to make critical pricing, inventory, and advertising decisions based on intuition rather than intelligence.</p>
            <p>We set out to build a single, unified AI decision engine that combines demand forecasting, pricing optimisation, inventory intelligence, and ad spend management—all accessible through an intuitive interface designed for operators, not data scientists.</p>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg sm:rounded-xl overflow-hidden border border-border">
            <img src={aboutHero} alt="London cityscape — OptiMerce AI headquarters" className="w-full h-48 sm:h-56 object-cover" />
          </motion.div>
          {[
            { icon: <Lightbulb size={20} />, title: "Innovation-First", desc: "We combine cutting-edge ML research with practical, production-ready engineering to deliver solutions that actually work." },
            { icon: <Target size={20} />, title: "Mission-Driven", desc: "Every feature we build is measured by its impact on our customers' bottom line and operational efficiency." },
            { icon: <MapPin size={20} />, title: "UK-Based", desc: "Headquartered in the United Kingdom, building technology that serves global e-commerce businesses." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-border">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="section-dark">
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-hero-foreground mb-4 sm:mb-6">Our Vision</h2>
          <p className="text-base sm:text-lg md:text-xl text-surface-dark-foreground leading-relaxed mb-6 sm:mb-8">
            "We believe every e-commerce business deserves access to the same AI-powered decision-making capabilities as the world's largest retailers. OptiMerce AI is building that future—one intelligent decision at a time."
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity tap-highlight-transparent w-full sm:w-auto">
            Get in Touch <ArrowRight size={18} className="hidden sm:block" />
          </Link>
        </motion.div>
      </div>
    </Section>
  </Layout>
);

export default AboutPage;
