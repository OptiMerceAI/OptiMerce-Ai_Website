import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container-tight">{children}</div>
  </section>
);

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-2xl mb-8 md:mb-12"
  >
    {eyebrow && (
      <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">
        {eyebrow}
      </span>
    )}
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
        light ? "text-hero-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`text-lg leading-relaxed ${
          light ? "text-surface-dark-foreground" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    )}
  </motion.div>
);

export const FeatureCard = ({
  icon,
  title,
  description,
  dark = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  dark?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`group rounded-xl border p-6 transition-all duration-300 hover:border-primary/30 ${
      dark
        ? "bg-surface-dark-elevated border-border/10 hover:glow-sm"
        : "bg-card border-border hover:shadow-lg"
    }`}
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h3
      className={`text-lg font-semibold mb-2 ${
        dark ? "text-hero-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm leading-relaxed ${
        dark ? "text-surface-dark-foreground" : "text-muted-foreground"
      }`}
    >
      {description}
    </p>
  </motion.div>
);
