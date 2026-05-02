import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/SectionComponents";
import { TrendingDown, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    icon: <TrendingDown size={24} />,
    title: "Reducing Stock-outs by 30%",
    client: "Mid-size fashion e-commerce brand (UK)",
    problem: "Frequent stockouts on bestselling SKUs during peak seasons, leading to lost revenue and poor customer experience. Manual replenishment processes couldn't keep up with demand variability.",
    approach: "Implemented OptiMerce's demand forecasting engine with seasonal decomposition and promotional effect modelling. Automated reorder triggers based on predicted demand and supplier lead times.",
    result: "30% reduction in stockout events within 3 months. £180K in recovered revenue from previously missed sales. 40% faster replenishment cycle.",
    metric: "30%",
    metricLabel: "Stockout reduction",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Improving Margins by 15%",
    client: "Consumer electronics retailer (multi-channel)",
    problem: "Pricing decisions were reactive—based on competitor scraping and gut feel. Margins were eroding on high-volume products while niche products were under-priced.",
    approach: "Deployed the pricing optimisation engine with elasticity modelling and competitive positioning analysis. Multi-objective optimisation balanced margin targets with market share goals.",
    result: "15% improvement in gross margins across the catalogue. Price adjustments were made 5x faster. Customer churn remained flat, indicating no negative demand impact.",
    metric: "15%",
    metricLabel: "Margin improvement",
  },
  {
    icon: <Target size={24} />,
    title: "Optimising Ad Spend Efficiency",
    client: "DTC health & wellness brand",
    problem: "Ad spend across Google, Meta, and TikTok was managed in silos with no cross-channel attribution. ROAS was declining despite increasing budgets.",
    approach: "OptiMerce's ad spend optimisation module unified attribution data across channels and applied budget allocation algorithms to shift spend towards highest-performing segments.",
    result: "42% improvement in blended ROAS. £50K monthly savings from reduced wasted spend. Clear attribution model adopted across marketing team.",
    metric: "42%",
    metricLabel: "ROAS improvement",
  },
];

const CaseStudiesPage = () => (
  <Layout>
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36" style={{ background: "linear-gradient(160deg, #0f172a 0%, #0c1a2e 60%, #0a1525 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[250px] sm:h-[350px] opacity-15" style={{ background: "radial-gradient(ellipse at top right, #4f46e5 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[150px] sm:h-[250px] opacity-10" style={{ background: "radial-gradient(ellipse at bottom left, #06b6d4 0%, transparent 65%)", filter: "blur(40px)" }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 block">Case Studies</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4 sm:mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            Real results from <span className="gradient-text">AI-driven optimisation</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore how businesses have transformed their operations with OptiMerce AI.
          </p>
        </motion.div>
      </div>
    </section>

    {cases.map((c, i) => (
      <Section key={i} className={i % 2 === 0 ? "" : "section-dark"}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{c.icon}</div>
            <div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-1 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>{c.title}</h2>
              <p className={`text-xs sm:text-sm ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.client}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center justify-center rounded-lg sm:rounded-xl bg-primary/5 border border-primary/10 p-5 sm:p-6">
              <span className="text-3xl sm:text-4xl font-bold gradient-text">{c.metric}</span>
              <span className={`text-xs sm:text-sm mt-1 text-center ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.metricLabel}</span>
            </div>
            <div>
              <h4 className={`font-semibold text-xs sm:text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Problem</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.problem}</p>
            </div>
            <div>
              <h4 className={`font-semibold text-xs sm:text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Approach</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.approach}</p>
            </div>
            <div>
              <h4 className={`font-semibold text-xs sm:text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Result</h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.result}</p>
            </div>
          </div>
        </motion.div>
      </Section>
    ))}

    <Section className="section-dark">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-hero-foreground mb-3 sm:mb-4">Want results like these?</h2>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity tap-highlight-transparent w-full sm:w-auto">
          Join the Pilot Program <ArrowRight size={18} className="hidden sm:block" />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default CaseStudiesPage;
