import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading, FeatureCard } from "@/components/SectionComponents";
import { Brain, Cpu, Lightbulb, TrendingUp, ShieldCheck, Gauge, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const ProductPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-100" />
      </div>
      <div className="container-tight relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-white text-sm font-bold tracking-widest uppercase mb-3 block drop-shadow-md">Product</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            The AI Decision Engine for <span className="gradient-text">E-commerce</span>
          </h1>
          <p className="text-lg text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
            OptiMerce AI is a unified platform that transforms fragmented e-commerce data into intelligent, profit-maximising decisions—automatically.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Core capabilities */}
    <Section>
      <SectionHeading eyebrow="Core Capabilities" title="Three engines. One platform." description="OptiMerce AI combines forecasting, optimisation, and recommendation into a seamless decision pipeline." />
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard icon={<Brain size={20} />} title="Forecasting Engine" description="Time-series models enhanced with external signals to predict demand at SKU level with high accuracy." />
        <FeatureCard icon={<Cpu size={20} />} title="Optimisation Engine" description="Multi-objective optimisation that balances margin, revenue, and inventory cost simultaneously." />
        <FeatureCard icon={<Lightbulb size={20} />} title="Recommendation Engine" description="Actionable insights delivered as clear recommendations—pricing adjustments, reorder triggers, budget shifts." />
      </div>
    </Section>

    {/* Dashboard mockup with real image */}
    <Section className="section-dark">
      <SectionHeading eyebrow="Platform" title="From data to decisions" light />
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden border border-border/10 glow-md">
        <img src={dashboardMockup} alt="OptiMerce AI Dashboard — demand forecasting, pricing optimization, and inventory management" className="w-full h-auto" />
      </motion.div>
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {[
          { label: "Forecast Accuracy", value: "94.2%", change: "+3.1%" },
          { label: "Margin Improvement", value: "15.8%", change: "+2.4%" },
          { label: "Stock-out Rate", value: "2.1%", change: "-5.2%" },
          { label: "ROAS", value: "4.2x", change: "+0.8x" },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center card-dark">
            <p className="text-2xl md:text-3xl font-bold text-hero-foreground">{m.value}</p>
            <p className="text-xs text-primary mt-1">{m.change}</p>
            <p className="text-sm text-surface-dark-foreground mt-1">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Benefits */}
    <Section>
      <SectionHeading eyebrow="Benefits" title="Measurable impact across your operations" />
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard icon={<TrendingUp size={20} />} title="Increase Margins" description="Dynamic pricing and cost optimisation drive sustainable margin improvements of 10-20%." />
        <FeatureCard icon={<ShieldCheck size={20} />} title="Reduce Stock Issues" description="Intelligent safety stock and reorder points cut stockouts and overstock by up to 30%." />
        <FeatureCard icon={<Gauge size={20} />} title="Improve Efficiency" description="Automate manual planning tasks and free your team to focus on strategy and growth." />
      </div>
    </Section>

    {/* CTA */}
    <Section className="section-dark">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">See OptiMerce AI in action</h2>
        <p className="text-surface-dark-foreground mb-8">Book a demo to explore how our platform can transform your operations.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Book a Demo <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default ProductPage;
