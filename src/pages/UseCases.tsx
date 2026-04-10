import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/SectionComponents";
import { ShoppingCart, Globe, Warehouse, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const useCases = [
  {
    icon: <ShoppingCart size={24} />,
    title: "E-commerce Sellers (Shopify / Amazon)",
    problem: "Individual sellers struggle with manual pricing adjustments, reactive inventory management, and inefficient ad spend across platforms.",
    solution: "OptiMerce connects directly to Shopify and Amazon, providing automated pricing recommendations, demand forecasts, and ad budget optimisation across all listings.",
    outcomes: ["20-30% reduction in stockouts", "15% margin improvement through dynamic pricing", "3x faster decision-making on inventory replenishment"],
  },
  {
    icon: <Globe size={24} />,
    title: "Multi-channel Brands",
    problem: "Brands selling across multiple channels face conflicting pricing strategies, fragmented demand signals, and duplicated inventory costs.",
    solution: "A unified view of demand and inventory across all channels, with optimisation that accounts for channel-specific dynamics and cannibalisation effects.",
    outcomes: ["Unified demand view across 5+ channels", "Consistent pricing strategy reducing channel conflict", "25% reduction in excess inventory"],
  },
  {
    icon: <Warehouse size={24} />,
    title: "Inventory-heavy Businesses",
    problem: "Businesses with large product catalogues and significant working capital tied up in inventory face constant trade-offs between service levels and carrying costs.",
    solution: "Advanced safety stock calculations, optimal reorder point modelling, and predictive allocation that minimise carrying costs while maintaining target service levels.",
    outcomes: ["30% reduction in carrying costs", "98%+ service level achievement", "Automated reorder triggers saving 10+ hours/week"],
  },
];

const UseCasesPage = () => (
  <Layout>
    <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      <div className="container-tight relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-slate-400 text-sm font-bold tracking-widest uppercase mb-3 block">Use Cases</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Built for e-commerce businesses that want to <span className="gradient-text">grow smarter</span>
          </h1>
          <p className="text-lg text-slate-300 font-medium leading-relaxed">
            See how OptiMerce AI addresses the unique challenges of different e-commerce segments.
          </p>
        </motion.div>
      </div>
    </section>

    {useCases.map((uc, i) => (
      <Section key={i} className={i % 2 === 0 ? "" : "section-dark"}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{uc.icon}</div>
            <h2 className={`text-2xl md:text-3xl font-bold ${i % 2 === 0 ? "text-foreground" : "text-hero-foreground"}`}>{uc.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-destructive mb-3">Problem</h3>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{uc.problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary mb-3">Solution</h3>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>{uc.solution}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-accent mb-3">Expected Outcomes</h3>
              <ul className="space-y-2">
                {uc.outcomes.map((o, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-foreground"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>
    ))}

    <Section className="section-dark">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-hero-foreground mb-4">See your use case in action</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Request a Demo <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default UseCasesPage;
