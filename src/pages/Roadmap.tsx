import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/SectionComponents";
import { Rocket, Cpu, Globe, Expand, CircleCheck as CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: <Rocket size={24} />,
    phase: "Phase 1",
    title: "MVP — Forecasting & Insights",
    timeline: "Q1–Q2 2026",
    status: "In Progress",
    items: ["Demand forecasting engine (time-series + ML)", "Shopify & Amazon data connectors", "Interactive insights dashboard", "Basic pricing recommendations", "Pilot program with select partners"],
  },
  {
    icon: <Cpu size={24} />,
    phase: "Phase 2",
    title: "Optimisation Engine",
    timeline: "Q3–Q4 2026",
    status: "Planned",
    items: ["Multi-objective optimisation module", "Dynamic pricing engine", "Ad spend allocation optimiser", "Automated reorder triggers", "API access for integrations"],
  },
  {
    icon: <Globe size={24} />,
    phase: "Phase 3",
    title: "Scaling & Integrations",
    timeline: "Q1–Q2 2027",
    status: "Planned",
    items: ["WooCommerce, eBay, Etsy connectors", "ERP & warehouse system integrations", "Custom model training per client", "White-label partner programme", "SOC 2 Type II certification"],
  },
  {
    icon: <Expand size={24} />,
    phase: "Phase 4",
    title: "International Expansion",
    timeline: "Q3 2027+",
    status: "Vision",
    items: ["Multi-currency & multi-market optimisation", "Localised demand models", "Regional data centres (EU, US, APAC)", "Enterprise-grade SLA offerings", "Strategic partnerships & marketplace"],
  },
];

const RoadmapPage = () => (
  <Layout>
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 block">Roadmap</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4 sm:mb-6">
            Building the future of <span className="gradient-text">e-commerce intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-white leading-relaxed">
            A clear, phased approach from MVP to global scale—designed for sustainable growth and technical excellence.
          </p>
        </motion.div>
      </div>
    </section>

    <Section className="section-dark">
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />
        <div className="space-y-8 sm:space-y-12">
          {phases.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative md:pl-16">
              <div className="absolute left-0 top-0 hidden md:flex">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i === 0 ? "bg-primary text-primary-foreground" : "bg-surface-dark-elevated text-primary border border-border/10"}`}>{p.icon}</div>
              </div>
              <div className="card-dark p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-primary font-mono text-xs sm:text-sm font-medium">{p.phase}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{p.status}</span>
                  <span className="text-xs text-surface-dark-foreground">{p.timeline}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-hero-foreground mb-3 sm:mb-4">{p.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-surface-dark-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0 flex-shrink-0" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default RoadmapPage;
