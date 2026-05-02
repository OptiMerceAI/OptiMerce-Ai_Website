import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section, SectionHeading, FeatureCard } from "@/components/SectionComponents";
import { TrendingUp, Zap, Users, CircleAlert as AlertCircle, Settings, ChartBar as BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useCasesHero from "@/assets/use-cases-hero.jpg";

const useCases = [
  {
    icon: <TrendingUp size={20} />,
    title: "Campaign Management",
    description: "Streamline multi-channel campaigns with unified analytics and real-time performance tracking.",
  },
  {
    icon: <Zap size={20} />,
    title: "Infrastructure Monitoring",
    description: "Monitor system health across all environments with intelligent alerting and predictive diagnostics.",
  },
  {
    icon: <Users size={20} />,
    title: "Pipeline Visualization",
    description: "Get a complete view of your sales pipeline with AI-powered forecasting and deal insights.",
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Design Collaboration",
    description: "Collaborate seamlessly with version control, asset management, and real-time commenting.",
  },
  {
    icon: <Settings size={20} />,
    title: "Support Hub",
    description: "Consolidate customer tickets across channels with AI-powered triage and knowledge base.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Analytics & Reports",
    description: "Generate custom reports with predictive insights and automated recommendations.",
  },
];

const UseCasesPage = () => (
  <Layout>
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(150deg, #07101f 0%, #0d1b33 55%, #071220 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] rounded-full opacity-[0.18]" style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 65%)", filter: "blur(55px)" }} />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(ellipse at top right, #0ea5e9 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute bottom-0 left-0 w-[450px] h-[300px] opacity-[0.1]" style={{ background: "radial-gradient(ellipse at bottom left, #1d4ed8 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)", backgroundSize: "50px 50px" }} />
      </div>
      <div className="container-tight relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Use Cases</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Built for e-commerce businesses that want to <span className="gradient-text">grow smarter</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            See how OptiMerce AI addresses the unique challenges of different e-commerce segments.
          </p>
        </motion.div>
      </div>
    </section>

    <Section>
      <SectionHeading eyebrow="Real-World Applications" title="Powerful use cases across your business" />
      <div className="grid md:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <FeatureCard key={index} icon={useCase.icon} title={useCase.title} description={useCase.description} />
        ))}
      </div>
    </Section>

    <Section className="section-dark">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading eyebrow="How It Works" title="Proven methodology for growth" light />
          <div className="space-y-6">
            {[
              { step: "Assess", desc: "We analyze your e-commerce operations and identify opportunities where AI can drive impact." },
              { step: "Implement", desc: "Our platform integrates seamlessly with your systems to start delivering insights and optimization." },
              { step: "Optimize", desc: "Continuous monitoring and refinement ensure your AI strategies evolve with your business needs." },
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
          <img src={useCasesHero} alt="E-commerce optimization use cases" className="w-full h-auto" />
        </motion.div>
      </div>
    </Section>

    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to unlock your potential?</h2>
        <p className="text-muted-foreground mb-8">Discover how OptiMerce AI can transform your e-commerce operations and drive measurable growth.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Get Started <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  </Layout>
);

export default UseCasesPage;
