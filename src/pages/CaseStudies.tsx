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
    <section className="bg-white py-24 md:py-32 border-b border-slate-100">
      <div className="container-tight">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Real results from <span className="gradient-text">AI-driven optimisation</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore how businesses have transformed their operations with OptiMerce AI.
          </p>
        </motion.div>
      </div>
    </section>

    {cases.map((c, i) => (
      <Section key={i} className={i % 2 === 0 ? "" : "section-dark"}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{c.icon}</div>
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold mb-1 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>{c.title}</h2>
              <p className={`text-sm ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.client}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center rounded-xl bg-primary/5 border border-primary/10 p-6">
              <span className="text-4xl font-bold gradient-text">{c.metric}</span>
              <span className={`text-sm mt-1 ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.metricLabel}</span>
            </div>
            <div>
              <h4 className={`font-semibold text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Problem</h4>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.problem}</p>
            </div>
            <div>
              <h4 className={`font-semibold text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Approach</h4>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.approach}</p>
            </div>
            <div>
              <h4 className={`font-semibold text-sm mb-2 ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>Result</h4>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{c.result}</p>
            </div>
          </div>
        </motion.div>
      </Section>
    ))}

    <Section className="section-dark">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-hero-foreground mb-4">Want results like these?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Join the Pilot Program <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default CaseStudiesPage;
