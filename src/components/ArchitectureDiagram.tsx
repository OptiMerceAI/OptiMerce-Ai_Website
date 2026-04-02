import { motion } from "framer-motion";
import { Database, Layers, Brain, Cpu, Lightbulb, Monitor, RefreshCw, Shield, Server, ChevronRight, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

/* ─── Node data ─── */
interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  items: string[];
  icon: ReactNode;
  gradient: string;
  borderColor: string;
}

const pipelineLayers: DiagramNode[] = [
  {
    id: "sources", label: "Data Sources", items: ["Shopify (Webhook + REST Admin API)", "Amazon UK (SP-API)", "eBay (REST Sell API)", "Google Ads / Meta / Amazon Ads", "Fulfilment + competitor price feeds"],
    icon: <Database size={15} />, gradient: "from-slate-700/60 to-slate-800/80", borderColor: "border-slate-500/50",
  },
  {
    id: "ingestion", label: "Layer 1", sublabel: "Data Ingestion", items: ["Event-based ingestion via Kafka / Amazon MSK", "Connector microservices per marketplace", "OAuth / SP-API tokens / rate-limited backoff", "Apache Avro schema validation", "Apache Flink dedupe, enrichment, transform"],
    icon: <Layers size={15} />, gradient: "from-blue-900/50 to-blue-950/70", borderColor: "border-blue-500/40",
  },
  {
    id: "feature", label: "Layer 2", sublabel: "Feature Store", items: ["Feast feature store", "Redis online serving (<10ms)", "S3 / Apache Parquet offline store", "Apache Spark batch features", "Point-in-time correctness for training/serving"],
    icon: <Server size={15} />, gradient: "from-cyan-900/40 to-cyan-950/60", borderColor: "border-cyan-500/40",
  },
  {
    id: "ml", label: "Layer 3", sublabel: "ML Inference", items: ["XGBoost / LightGBM", "Temporal Fusion Transformer (PyTorch)", "Bayesian Structural Time Series", "Stacked generalisation meta-learner", "MLflow tracking + SageMaker endpoints", "Rolling 4-hour inference cycle"],
    icon: <Brain size={15} />, gradient: "from-indigo-900/50 to-indigo-950/70", borderColor: "border-indigo-500/40",
  },
  {
    id: "optimisation", label: "Layer 4", sublabel: "Prescriptive Optimisation", items: ["Dynamic Margin Guardian", "Inventory Fluidity Engine", "Promotion Sequencer", "CASH Ad Spend Harmoniser", "Multi-objective optimisation:", "margin · stockout risk · ad efficiency"],
    icon: <Cpu size={15} />, gradient: "from-emerald-900/40 to-emerald-950/60", borderColor: "border-emerald-500/40",
  },
];

const supportNodes: DiagramNode[] = [
  {
    id: "constraints", label: "Constraint Framework", items: ["Margin floors / MAP policies", "Inventory availability / safety stock", "Working capital limits", "Ad budgets / CPA constraints", "Marketplace fees / fulfilment capacity"],
    icon: <Shield size={15} />, gradient: "from-amber-900/30 to-amber-950/50", borderColor: "border-amber-500/30",
  },
  {
    id: "threads", label: "Micro-Decision Threads", items: ["Stateful workflows via AWS Step Functions", "Shared state across pricing, inventory, promotion", "Prevents conflicting recommendations", "Compensating transactions / rollback on violations"],
    icon: <RefreshCw size={15} />, gradient: "from-teal-900/30 to-teal-950/50", borderColor: "border-teal-500/30",
  },
  {
    id: "api", label: "Layer 5", sublabel: "API & Application", items: ["FastAPI + Strawberry GraphQL", "Kong API Gateway + AWS API Gateway", "JWT auth / RBAC / multi-tenant access", "Merchant dashboard + real-time alerts", "Ranked, actionable recommendations"],
    icon: <Monitor size={15} />, gradient: "from-violet-900/40 to-violet-950/60", borderColor: "border-violet-500/40",
  },
];

const outputNode: DiagramNode = {
  id: "outputs", label: "Merchant Outputs", items: ["Price recommendations with projected margin impact", "Stock reallocation / reorder actions with stockout-risk reduction", "Promotional triggers with expected uplift", "Ad budget reallocation with expected ROAS improvement", "Explainable recommendations delivered to the dashboard", "Seller approves actions; outputs feed back into learning loop"],
  icon: <Lightbulb size={15} />, gradient: "from-cyan-900/30 to-slate-900/50", borderColor: "border-cyan-400/30",
};

const feedbackNode: DiagramNode = {
  id: "feedback", label: "Feedback Loop", items: ["Seller actions captured", "Outcomes measured", "Continuous retraining"],
  icon: <RefreshCw size={15} />, gradient: "from-emerald-900/30 to-slate-900/50", borderColor: "border-emerald-400/30",
};

/* ─── Node Component ─── */
const NodeBox = ({ node, delay = 0, className = "" }: { node: DiagramNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
    className={`group relative rounded-lg border ${node.borderColor} bg-gradient-to-b ${node.gradient} backdrop-blur-md p-3.5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default ${className}`}
    style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)" }}
  >
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "inset 0 0 20px rgba(59,130,246,0.08), 0 0 30px rgba(59,130,246,0.06)" }} />
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md flex items-center justify-center bg-primary/15 text-primary ring-1 ring-primary/20 shrink-0">
          {node.icon}
        </div>
        <div className="min-w-0">
          {node.sublabel ? (
            <>
              <span className="text-[9px] font-mono text-primary/60 block leading-none tracking-wider uppercase">{node.label}</span>
              <span className="text-[11px] font-semibold text-hero-foreground leading-tight">{node.sublabel}</span>
            </>
          ) : (
            <span className="text-[11px] font-semibold text-hero-foreground leading-tight">{node.label}</span>
          )}
        </div>
      </div>
      <ul className="space-y-[3px]">
        {node.items.map((item, i) => (
          <li key={i} className="text-[9.5px] text-surface-dark-foreground/80 leading-[1.4] flex items-start gap-1.5">
            <span className="w-[3px] h-[3px] rounded-full bg-primary/40 mt-[5px] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

/* ─── Inline Arrow Components ─── */
const HorizontalArrow = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    className="flex items-center justify-center self-center origin-left"
  >
    <div className="relative flex items-center">
      {/* Glow line */}
      <div className="w-8 h-[3px] rounded-full bg-primary/30 blur-sm absolute" />
      {/* Main line */}
      <div className="w-8 h-[2.5px] rounded-full bg-gradient-to-r from-primary/50 to-primary/80" />
      {/* Arrowhead */}
      <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-primary/80 ml-[-1px]" />
    </div>
  </motion.div>
);

const VerticalArrow = ({ delay = 0, dashed = false, label }: { delay?: number; dashed?: boolean; label?: string }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    whileInView={{ opacity: 1, scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    className="flex flex-col items-center justify-center origin-top py-1"
  >
    {label && (
      <span className="text-[8px] font-mono text-primary/50 mb-1 tracking-wider">{label}</span>
    )}
    <div className="relative flex flex-col items-center">
      {/* Glow */}
      <div className={`w-[3px] h-8 rounded-full bg-primary/20 blur-sm absolute`} />
      {/* Line */}
      <div className={`w-[2.5px] h-8 rounded-full ${dashed ? "border-l-[2.5px] border-dashed border-primary/50 bg-transparent" : "bg-gradient-to-b from-primary/40 to-primary/80"}`} />
      {/* Arrowhead */}
      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-primary/80 mt-[-1px]" />
    </div>
  </motion.div>
);

/* ─── Main Diagram ─── */
const ArchitectureDiagram = () => {
  return (
    <div className="relative w-full overflow-x-auto">
      <div className="min-w-[960px] relative" style={{ padding: "32px 24px 28px" }}>
        {/* Blueprint dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(217,91%,60%) 0.8px, transparent 0.8px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10">
          {/* Title bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
            <div>
              <h3 className="text-sm font-bold text-primary tracking-wide">
                OptiMerce AI — Five-Layer Technical Architecture
              </h3>
              <p className="text-[10px] text-surface-dark-foreground/60 font-mono tracking-wider mt-0.5">
                DATA INGESTION → FEATURE STORE → ML INFERENCE → PRESCRIPTIVE OPTIMISATION → APPLICATION DELIVERY
              </p>
            </div>
          </motion.div>

          {/* ══════ Row 1: Pipeline layers with arrows between them ══════ */}
          <div className="flex items-stretch gap-0 mb-1">
            {pipelineLayers.map((node, i) => (
              <div key={node.id} className="contents">
                <div className="flex-1 min-w-0">
                  <NodeBox node={node} delay={0.1 + i * 0.1} />
                </div>
                {i < pipelineLayers.length - 1 && (
                  <HorizontalArrow delay={0.15 + i * 0.1} />
                )}
              </div>
            ))}
          </div>

          {/* ══════ Arrow row: 3 vertical arrows aligned to support grid ══════ */}
          <div className="grid grid-cols-3 gap-3 px-8">
            <VerticalArrow delay={0.7} />
            <VerticalArrow delay={0.8} />
            <VerticalArrow delay={0.9} />
          </div>

          {/* ══════ Row 2: Support nodes ══════ */}
          <div className="grid grid-cols-3 gap-3 mb-1 px-8">
            {supportNodes.map((node, i) => (
              <NodeBox key={node.id} node={node} delay={0.65 + i * 0.1} />
            ))}
          </div>

          {/* ══════ Arrow row: single vertical arrow down to outputs ══════ */}
          <div className="flex justify-center">
            <VerticalArrow delay={1.1} dashed />
          </div>

          {/* ══════ Row 3: Outputs + Feedback ══════ */}
          <div className="grid grid-cols-[1fr_220px] gap-3 px-16">
            <NodeBox node={outputNode} delay={0.95} />
            <div className="relative">
              <NodeBox node={feedbackNode} delay={1.05} />
              {/* Feedback loop indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-[2px] h-16 border-l-[2px] border-dashed border-emerald-500/40 rounded" />
                <div className="text-[8px] font-mono text-emerald-500/50 mt-1 writing-mode-vertical" style={{ writingMode: "vertical-rl" }}>
                  ↑ feeds back to Layer 1
                </div>
              </motion.div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="flex items-center justify-end gap-5 mt-5 mr-4"
          >
            <div className="flex items-center gap-2 text-[9px] text-surface-dark-foreground/50 font-mono">
              <div className="w-5 h-[2.5px] rounded bg-primary/60" />
              Data flow
            </div>
            <div className="flex items-center gap-2 text-[9px] text-surface-dark-foreground/50 font-mono">
              <div className="w-5 border-t-[2px] border-dashed border-primary/50" />
              Decision output
            </div>
            <div className="flex items-center gap-2 text-[9px] text-emerald-500/50 font-mono">
              <div className="w-5 border-t-[2px] border-dashed border-emerald-500/40" />
              Feedback loop
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
