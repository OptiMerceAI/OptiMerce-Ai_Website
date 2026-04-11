import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading, FeatureCard } from "@/components/SectionComponents";
import { TrendingUp, DollarSign, Package, ChartBar as BarChart3, ArrowRight, Zap, Target, ChartLine as LineChart, Quote } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import howItWorksImg from "@/assets/how-it-works.jpg";

const Hero = () => (
  <section className="section-dark relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/55" />
    </div>
    <div className="container-tight px-4 py-20 md:py-28 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/10 text-white border border-white/25 mb-6 backdrop-blur-sm drop-shadow-md">
          <Zap size={12} /> Pilot Program Now Open
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 drop-shadow-md tracking-tight">
          AI-Powered Optimisation for{" "}
          <span className="gradient-text">E-commerce Growth</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl drop-shadow-md font-light">
          Unify demand forecasting, pricing optimisation, inventory intelligence, and ad spend management with a single AI-driven decision engine.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#800080" }}
          >
            Request Early Access <ArrowRight size={16} />
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Explore Platform
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <Section className="section-dark">
    <SectionHeading
      eyebrow="The Problem"
      title="E-commerce SMEs are drowning in fragmented tools"
      description="Most growing brands or merchants manage pricing, inventory, advertising, and forecasting across disconnected spreadsheets and siloed platforms—costing time, margin, and growth."
      light
    />
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { stat: "68%", label: "of SMEs still use spreadsheets for demand planning" },
        { stat: "£2.1T", label: "lost annually to overstock and stockouts globally" },
        { stat: "42%", label: "of ad spend is wasted due to poor attribution" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="card-dark text-center"
        >
          <p className="text-4xl font-bold gradient-text mb-2">{item.stat}</p>
          <p className="text-sm text-surface-dark-foreground">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Solution = () => (
  <Section>
    <SectionHeading
      eyebrow="The Solution"
      title="One decision engine. Every lever optimised."
      description="OptiMerce AI connects your data sources and applies multi-objective optimisation to maximise profit, minimise waste, and scale intelligently."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <FeatureCard icon={<LineChart size={20} />} title="Demand Forecasting" description="ML-powered predictions using sales history, seasonality, and external signals to anticipate demand shifts." />
      <FeatureCard icon={<DollarSign size={20} />} title="Pricing Optimisation" description="Dynamic pricing recommendations that balance competitiveness with margin protection in real time." />
      <FeatureCard icon={<Package size={20} />} title="Inventory Intelligence" description="Optimal reorder points, safety stock calculations, and allocation strategies across channels." />
      <FeatureCard icon={<BarChart3 size={20} />} title="Ad Spend Optimisation" description="Allocate advertising budgets across channels to maximise ROAS using predictive attribution." />
    </div>
    {/* Dashboard visual */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 rounded-xl overflow-hidden border border-border shadow-2xl"
    >
      <img src={dashboardMockup} alt="OptiMerce AI Platform Dashboard" className="w-full h-auto" />
    </motion.div>
  </Section>
);

const HowItWorks = () => (
  <Section className="section-dark relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={howItWorksImg} alt="" className="w-full h-full object-cover opacity-100" />
    </div>
    <div className="relative z-10">
      <SectionHeading eyebrow="How It Works" title="From data to decisions in three steps" light />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { step: "01", title: "Connect Your Data", desc: "Integrate with Shopify, Amazon, Google Ads, and more. Our connectors ingest your sales, inventory, and advertising data automatically." },
          { step: "02", title: "AI Analyses & Optimises", desc: "Our forecasting and optimisation engines process your data, identifying patterns and generating actionable recommendations." },
          { step: "03", title: "Act on Insights", desc: "Receive clear recommendations on pricing, stock levels, and ad allocation. Apply them with one click or automate fully." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="relative card-dark">
            <span className="text-5xl font-bold gradient-text mb-4 block">{item.step}</span>
            <h3 className="text-xl font-semibold text-hero-foreground mb-3">{item.title}</h3>
            <p className="text-surface-dark-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const Testimonials = () => (
  <Section>
    <SectionHeading eyebrow="Testimonials" title="Trusted by forward-thinking brands" />
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { quote: "OptiMerce's forecasting accuracy transformed how we manage seasonal inventory. We reduced stockouts by 30% in the first quarter.", author: "Sarah Mitchell", role: "Head of Operations, FashionDirect" },
        { quote: "The pricing engine alone paid for itself within weeks. We're seeing 15% better margins without losing competitiveness.", author: "James Cooper", role: "CEO, TechGear UK" },
      ].map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="bg-card border border-border rounded-xl p-8">
          <Quote size={24} className="text-primary/30 mb-4" />
          <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
          <div>
            <p className="font-semibold text-foreground">{t.author}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const CTASection = () => (
  <Section className="section-dark">
    <div className="text-center max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">Ready to optimise your e-commerce operations?</h2>
        <p className="text-surface-dark-foreground mb-8">Join our pilot program and get early access to the OptiMerce AI decision engine.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#800080" }}>
          Request Early Access <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  </Section>
);

const Index = () => (
  <Layout>
    <Hero />
    <Problem />
    <Solution />
    <HowItWorks />
    <Testimonials />
    <CTASection />
  </Layout>
);

export default Index;
