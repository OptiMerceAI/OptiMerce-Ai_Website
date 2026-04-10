import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: string;
}

interface UseCasesSectionProps {
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
  categories?: string[];
}

const defaultUseCases: UseCase[] = [
  {
    id: "1",
    icon: "🎯",
    title: "Campaign Management",
    description:
      "Streamline multi-channel campaigns with unified analytics and real-time performance tracking.",
    category: "Marketing",
  },
  {
    id: "2",
    icon: "⚙️",
    title: "Infrastructure Monitoring",
    description:
      "Monitor system health across all environments with intelligent alerting and predictive diagnostics.",
    category: "Engineering",
  },
  {
    id: "3",
    icon: "💼",
    title: "Pipeline Visualization",
    description:
      "Get a complete view of your sales pipeline with AI-powered forecasting and deal insights.",
    category: "Sales",
  },
  {
    id: "4",
    icon: "🎨",
    title: "Design Collaboration",
    description:
      "Collaborate seamlessly with version control, asset management, and real-time commenting.",
    category: "Design",
  },
  {
    id: "5",
    icon: "🎧",
    title: "Support Hub",
    description:
      "Consolidate customer tickets across channels with AI-powered triage and knowledge base.",
    category: "Support",
  },
  {
    id: "6",
    icon: "📊",
    title: "Analytics & Reports",
    description:
      "Generate custom reports with predictive insights and automated recommendations.",
    category: "Marketing",
  },
];

const defaultCategories = ["Marketing", "Engineering", "Sales", "Design", "Support"];

export default function UseCasesSection({
  title = "Use Cases",
  subtitle = "Discover solutions built for your team",
  useCases = defaultUseCases,
  categories = defaultCategories,
}: UseCasesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCases = selectedCategory
    ? useCases.filter((uc) => uc.category === selectedCategory)
    : useCases;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
            {title}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {subtitle}
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === null
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCases.map((useCase) => (
            <motion.div
              key={useCase.id}
              variants={itemVariants}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:bg-white/10 hover:border-white/20 cursor-pointer backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{useCase.icon}</div>

              <h3 className="text-lg font-bold text-white mb-2">
                {useCase.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {useCase.description}
              </p>

              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:gap-2.5 transition-all duration-200">
                Learn more
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
