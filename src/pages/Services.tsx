import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading, FeatureCard } from "@/components/SectionComponents";
import { Database, ChartBar as BarChart3, Wrench, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";

const ServicesPage = () => (
  <Layout>
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(150deg, #07101f 0%, #0d1b33 55%, #071220 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] rounded-full opacity-[0.18]" style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 65%)", filter: "blur(55px)" }} />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(ellipse at top right, #0ea5e9 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute bottom-0 left-0 w-[450px] h-[300px] opacity-[0.1]" style={{ background: "radial-gradient(ellipse at bottom left, #1d4ed8 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)", backgroundSize: "50px 50px" }} />
      </div>
      <div className="container-tight relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            AI & Data Consulting for <span className="gradient-text">E-commerce</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Beyond our platform, we offer hands-on consulting to help e-commerce businesses build data-driven capabilities from the ground up.
          </p>
        </motion.div>
      </div>
    </section>

    <Section>
      <SectionHeading eyebrow="What We Offer" title="Expert services tailored to your needs" />
      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard icon={<Database size={20} />} title="Data Strategy" description="Assessment of your current data landscape, identification of high-value data sources, and creation of a roadmap for data-driven decision making." />
        <FeatureCard icon={<BarChart3 size={20} />} title="Analytics Implementation" description="End-to-end setup of analytics infrastructure—from data pipelines and warehousing to dashboards and automated reporting." />
        <FeatureCard icon={<Brain size={20} />} title="Custom AI Solutions" description="Bespoke machine learning models for demand forecasting, customer segmentation, churn prediction, and recommendation systems." />
        <FeatureCard icon={<Wrench size={20} />} title="Optimisation Solutions" description="Custom-built optimisation engines for pricing, inventory allocation, logistics routing, and resource planning." />
      </div>
    </Section>

    {/* Services visual */}
    <Section className="section-dark">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading eyebrow="Engagement Model" title="How we work with you" light />
          <div className="space-y-6">
            {[
              { step: "Discovery", desc: "We audit your data, systems, and processes to identify the highest-impact opportunities for AI and optimisation." },
              { step: "Build", desc: "Our team designs and implements solutions—whether that's integrating our platform, building custom models, or setting up data infrastructure." },
              { step: "Scale", desc: "We provide ongoing support, model monitoring, and iterative improvements as your business grows and data evolves." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-dark">
                <span className="text-3xl font-bold text-primary/20 mb-3 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-semibold text-hero-foreground mb-2">{item.step}</h3>
                <p className="text-sm text-surface-dark-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-xl overflow-hidden border border-border/10 glow-sm">
          <img src={servicesHero} alt="AI consulting and data strategy" className="w-full h-auto" />
        </motion.div>
      </div>
    </Section>

    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">Let's discuss your challenges</h2>
        <p className="text-muted-foreground mb-8">Book a free consultation to explore how our expertise can accelerate your e-commerce growth.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Book a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default ServicesPage;
