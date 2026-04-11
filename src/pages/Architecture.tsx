import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading } from "@/components/SectionComponents";
import { ArrowDown, ArrowRight, Database, Layers, Brain, Cpu, Lightbulb, Monitor, RefreshCw, Shield, Lock, Gauge } from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";


const layers = [
  {
    num: "0",
    title: "Data Sources",
    items: ["Shopify (Webhook + REST Admin API)", "Amazon UK (SP-API)", "eBay (REST Sell API)", "Google Ads / Meta / Amazon Ads", "Fulfilment + competitor price feeds"],
    icon: <Database size={20} />,
  },
  {
    num: "1",
    title: "Data Ingestion",
    items: ["Event-based ingestion via Kafka / Amazon MSK", "Connector microservices per marketplace", "OAuth / SP-API tokens / rate-limited backoff", "Apache Avro schema validation", "Apache Flink dedupe, enrichment, transform"],
    icon: <Layers size={20} />,
  },
  {
    num: "2",
    title: "Feature Store",
    items: ["Feast feature store", "Redis online serving (<10ms)", "S3 / Apache Parquet offline store", "Apache Spark batch features", "Point-in-time correctness for training/serving"],
    icon: <Database size={20} />,
  },
  {
    num: "3",
    title: "ML Inference",
    items: ["XGBoost / LightGBM", "Temporal Fusion Transformer (PyTorch)", "Bayesian Structural Time Series", "Stacked generalisation meta-learner", "MLflow tracking + SageMaker endpoints", "Rolling 4-hour inference cycle"],
    icon: <Brain size={20} />,
  },
  {
    num: "4",
    title: "Prescriptive Optimisation Engine",
    items: ["Dynamic Margin Guardian", "Inventory Fluidity Engine", "Promotion Sequencer", "CASH Ad Spend Harmoniser", "Multi-objective optimisation: margin · stockout risk · ad efficiency"],
    icon: <Cpu size={20} />,
  },
  {
    num: "5",
    title: "API & Application Layer",
    items: ["FastAPI + Strawberry GraphQL", "Kong API Gateway + AWS API Gateway", "JWT auth / RBAC / multi-tenant access", "Merchant dashboard + real-time alerts", "Ranked, actionable recommendations"],
    icon: <Monitor size={20} />,
  },
];

const constraintFramework = [
  "Margin floors / MAP policies",
  "Inventory availability / safety stock",
  "Working capital limits",
  "Ad budgets / CPA constraints",
  "Marketplace fees / fulfilment capacity",
];

const microDecisionThreads = [
  "Stateful workflows via AWS Step Functions",
  "Shared state across pricing, inventory, promotion",
  "Prevents conflicting recommendations",
  "Compensating transactions / rollback on violations",
];

const merchantOutputs = [
  "Price recommendations with projected margin impact",
  "Stock reallocation / reorder actions with stockout-risk reduction",
  "Promotional triggers with expected uplift",
  "Ad budget reallocation with expected ROAS improvement",
  "Explainable recommendations delivered to the dashboard",
  "Seller approves actions; outputs feed back into learning loop",
];

const feedbackLoop = [
  "Seller actions captured",
  "Outcomes measured",
  "Continuous retraining",
];

const ArchitecturePage = () => (
  <Layout>
    {/* Hero — Architecture Diagram */}
    <section className="bg-hero section-padding relative">
      <div className="container-tight">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-8">
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">Architecture</span>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground leading-tight mb-6">
            Five-Layer Technical Architecture
          </h1>
          <p className="text-lg text-surface-dark-foreground leading-relaxed max-w-2xl">
            A modular, production-grade pipeline that transforms raw marketplace data into ranked, actionable decisions — spanning data ingestion, feature engineering, ML inference, prescriptive optimisation, and real-time merchant delivery.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="rounded-xl overflow-hidden border border-border/10 bg-[hsl(222,47%,6%)]">
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </section>

    {/* Layer-by-Layer Breakdown */}
    <Section className="section-dark">
      <SectionHeading eyebrow="System Layers" title="Six-stage decision pipeline" description="Each layer is independently deployable, horizontally scalable, and observable. Data flows from marketplace APIs through to ranked merchant actions." light />
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
            <div className="rounded-xl border border-border/10 bg-surface-dark-elevated p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                {layer.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-hero-foreground mb-2">
                  <span className="text-primary font-mono mr-2">Layer {layer.num}</span>— {layer.title}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-surface-dark-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-1.5"><ArrowDown size={16} className="text-primary/30" /></div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Core Innovation Diagram */}
    <Section className="section-dark">
      <SectionHeading eyebrow="Core Innovation" title="What makes the architecture different" description="OptiMerce AI coordinates pricing, inventory, and advertising decisions in one SME-calibrated optimisation system." light />

      {/* Code-rendered corporate diagram */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/10 bg-[hsl(222,47%,6%)] mb-12 overflow-hidden relative">
        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, hsl(217,91%,60%) 0.8px, transparent 0.8px)", backgroundSize: "20px 20px" }} />

        <div className="relative z-10 p-6 md:p-8">
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
            <div>
              <h3 className="text-sm font-bold text-primary tracking-wide">OptiMerce AI — Core Innovation Summary</h3>
              <p className="text-[10px] text-surface-dark-foreground/60 font-mono tracking-wider mt-0.5">FOUR DIFFERENTIATORS THAT DEFINE THE PLATFORM</p>
            </div>
          </div>

          {/* 2x2 Innovation grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Behaviour-Fused Demand Forecasting", callout: "Predict demand shifts before they become visible in sales history.", items: ["Combines live behavioural signals with historical transaction data", "Inputs: basket abandonment, browse-to-purchase rates, session recency", "Signals move before sales data, enabling earlier demand response"], gradient: "from-blue-900/40 to-blue-950/60", border: "border-blue-500/30" },
              { num: "02", title: "Multi-Objective Optimisation Architecture", callout: "One decision engine across pricing, inventory, and advertising.", items: ["Does not solve for price or stock in isolation", "Balances margin targets, stockout risk, and ad efficiency simultaneously", "Reflects real operating trade-offs of founder-led e-commerce businesses"], gradient: "from-emerald-900/30 to-emerald-950/50", border: "border-emerald-500/30" },
              { num: "03", title: "SKU-Level Distributed Optimisation", callout: "Granular decisions per product, per marketplace, per commercial context.", items: ["Recommendations at individual SKU level, not account or category", "200 active SKUs = 200 context-specific recommendations", "Per-product, per-marketplace, per-commercial-context precision"], gradient: "from-amber-900/30 to-amber-950/50", border: "border-amber-500/30" },
              { num: "04", title: "Prescriptive Decision Outputs", callout: "From dashboards to ranked actions with measurable impact.", items: ["Tells the merchant what action to take", "Quantifies expected outcome: margin impact, stockout reduction, ROAS uplift", "Explainable recommendations delivered to the dashboard"], gradient: "from-violet-900/30 to-violet-950/50", border: "border-violet-500/30" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`group rounded-lg border ${item.border} bg-gradient-to-b ${item.gradient} backdrop-blur-md p-5 shadow-lg hover:shadow-2xl transition-all duration-300`}
                style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)" }}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "inset 0 0 20px rgba(59,130,246,0.08), 0 0 30px rgba(59,130,246,0.06)" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-primary/50 tracking-widest font-bold bg-primary/10 rounded px-2 py-0.5 ring-1 ring-primary/20">{item.num}</span>
                    <h4 className="text-[12px] font-semibold text-hero-foreground leading-tight">{item.title}</h4>
                  </div>
                  <ul className="space-y-1 mb-3">
                    {item.items.map((point, j) => (
                      <li key={j} className="text-[10px] text-surface-dark-foreground/80 leading-[1.5] flex items-start gap-1.5">
                        <span className="w-[3px] h-[3px] rounded-full bg-primary/40 mt-[5px] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border/10 pt-2">
                    <p className="text-[9px] font-mono text-primary/60 tracking-wider uppercase mb-0.5">Website callout</p>
                    <p className="text-[10px] text-primary/80 font-medium italic leading-relaxed">"{item.callout}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom combined message bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 p-4 flex items-center gap-3"
          >
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
            <p className="text-[11px] text-surface-dark-foreground/90 leading-relaxed">
              <span className="font-semibold text-hero-foreground">Combined message:</span> OptiMerce AI coordinates pricing, inventory, and advertising decisions in one SME-calibrated optimisation system.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>

    {/* Merchant Outputs + Feedback Loop */}
    <Section>
      <SectionHeading eyebrow="Delivery" title="Merchant outputs & feedback loop" description="Actionable recommendations with projected impact, continuously refined through a closed-loop learning system." />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lightbulb size={18} className="text-primary" /> Merchant Outputs
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {merchantOutputs.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <RefreshCw size={18} className="text-primary" /> Feedback Loop
          </h3>
          <ul className="space-y-2">
            {feedbackLoop.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowRight size={14} className="text-accent shrink-0" />{item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Seller approves actions; outcomes feed back into the learning loop for continuous model retraining.</p>
        </div>
      </div>
    </Section>

    {/* Design Principles */}
    <Section className="section-dark">
      <SectionHeading eyebrow="Engineering" title="Scalability & design principles" light />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Gauge size={20} />, title: "Low Latency", desc: "Redis feature serving <10ms. Rolling 4-hour inference cycle. Recommendations delivered in under 200ms." },
          { icon: <Shield size={20} />, title: "Data Security", desc: "JWT auth, RBAC, multi-tenant isolation. SOC 2 alignment and GDPR-compliant data handling." },
          { icon: <Lock size={20} />, title: "Production-Grade", desc: "MLflow model registry, SageMaker endpoints, Kong API Gateway, compensating transactions with rollback on violations." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border/10 bg-surface-dark-elevated p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-hero-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-surface-dark-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  </Layout>
);

export default ArchitecturePage;
