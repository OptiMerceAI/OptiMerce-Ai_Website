import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const useCaseCategories = [
  "Marketing",
  "Engineering",
  "Sales",
  "Design",
  "Support",
];

const useCases = [
  {
    icon: "🎯",
    title: "Campaign Management",
    description:
      "Streamline multi-channel campaigns with unified analytics and real-time performance tracking.",
    category: "Marketing",
  },
  {
    icon: "⚙️",
    title: "Infrastructure Monitoring",
    description:
      "Monitor system health across all environments with intelligent alerting and predictive diagnostics.",
    category: "Engineering",
  },
  {
    icon: "💼",
    title: "Pipeline Visualization",
    description:
      "Get a complete view of your sales pipeline with AI-powered forecasting and deal insights.",
    category: "Sales",
  },
  {
    icon: "🎨",
    title: "Design Collaboration",
    description:
      "Collaborate seamlessly with version control, asset management, and real-time commenting.",
    category: "Design",
  },
  {
    icon: "🎧",
    title: "Support Hub",
    description:
      "Consolidate customer tickets across channels with AI-powered triage and knowledge base.",
    category: "Support",
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    description:
      "Generate custom reports with predictive insights and automated recommendations.",
    category: "Marketing",
  },
];

const UseCasesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCases = selectedCategory
    ? useCases.filter((uc) => uc.category === selectedCategory)
    : useCases;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Layout>
      <section
        className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center"
        style={{ backgroundColor: "var(--bg-deep)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none glow-pulse"
          style={{
            background: `
              radial-gradient(ellipse 140% 130% at 50% 0%, rgba(30, 80, 200, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 100% 90% at 50% 0%, rgba(50, 120, 255, 0.14) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 50% 0%, rgba(80, 150, 255, 0.22) 0%, transparent 60%)
            `,
          }}
        />

        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              backgroundPosition: "0 0",
            }}
          />
        </div>

        <div className="container-tight relative z-10 px-4 py-28 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-block mb-6 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--accent-blue)",
                }}
              >
                Use Cases
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance"
              style={{ color: "var(--text-primary)" }}
            >
              Built for every team, every workflow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl text-balance"
              style={{ color: "var(--text-muted)" }}
            >
              Discover how teams across the globe use our platform to streamline
              workflows, accelerate collaboration, and drive measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{
                  background: "var(--accent-blue)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "translateY(-2px)";
                  (e.target as HTMLButtonElement).style.boxShadow =
                    "0 8px 24px rgba(59, 130, 246, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "translateY(0)";
                  (e.target as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Get Started
                <ArrowRight size={18} />
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor =
                    "var(--accent-blue)";
                  (e.target as HTMLButtonElement).style.background =
                    "rgba(59, 130, 246, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor =
                    "rgba(255,255,255,0.2)";
                  (e.target as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {useCaseCategories.map((category, index) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  style={{
                    background:
                      selectedCategory === category
                        ? "var(--accent-blue)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      selectedCategory === category
                        ? `1px solid var(--accent-blue)`
                        : "1px solid rgba(255,255,255,0.1)",
                    color:
                      selectedCategory === category
                        ? "white"
                        : "var(--text-muted)",
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      (e.target as HTMLButtonElement).style.borderColor =
                        "rgba(255,255,255,0.3)";
                      (e.target as HTMLButtonElement).style.background =
                        "rgba(255,255,255,0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      (e.target as HTMLButtonElement).style.borderColor =
                        "rgba(255,255,255,0.1)";
                      (e.target as HTMLButtonElement).style.background =
                        "rgba(255,255,255,0.05)";
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 md:py-32 px-4">
        <div className="container-tight">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCases.map((useCase, index) => (
              <motion.div
                key={`${useCase.title}-${index}`}
                variants={itemVariants}
                className="group rounded-2xl border p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  element.style.background =
                    "rgba(59, 130, 246, 0.05)";
                  element.style.boxShadow =
                    "0 0 30px rgba(59, 130, 246, 0.2)";
                  element.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.borderColor = "var(--card-border)";
                  element.style.background = "var(--card-bg)";
                  element.style.boxShadow = "none";
                  element.style.transform = "translateY(0)";
                }}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {useCase.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {useCase.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: "var(--accent-blue)" }}
                >
                  Learn more
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="relative w-full overflow-hidden py-20 md:py-32 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
      >
        <div className="container-tight text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to transform your workflow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Join thousands of teams that are already seeing results. Start your
            free trial today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: "var(--accent-blue)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 24px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              Get Started Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCasesPage;
