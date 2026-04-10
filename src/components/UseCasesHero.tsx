import { motion } from "framer-motion";
import { Zap, TrendingUp, ShoppingCart, Package, DollarSign, ChartBar as BarChart3 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Retail", "Logistics", "Analytics", "Pricing"];

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Optimization",
    description: "Maximize sales velocity and customer lifetime value with AI-driven demand forecasting and dynamic pricing strategies.",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict market trends weeks in advance using advanced machine learning models trained on multi-channel data.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Reduce stockouts and overstock situations with intelligent reorder recommendations based on demand patterns.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing",
    description: "Automate price optimization across all channels while maintaining competitiveness and maximizing margins.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw sales data into actionable insights with real-time dashboards and performance analytics.",
  },
  {
    icon: Zap,
    title: "Marketing ROI",
    description: "Allocate ad spend intelligently across channels with predictive performance metrics and conversion optimization.",
  },
];

export const UseCasesHero = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#060d1f",
      }}
    >
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 pt-24 md:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                Use Cases
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent Commerce
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Unlock competitive advantages across every aspect of your e-commerce operation. From demand forecasting to dynamic pricing, our AI-powered platform helps you make smarter decisions faster.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300"
              size="lg"
            >
              Explore Solutions
            </Button>
            <Button
              variant="outline"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300"
              size="lg"
            >
              View Pricing
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mb-20"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative p-6 rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {useCase.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/30 rounded-xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UseCasesHero;
