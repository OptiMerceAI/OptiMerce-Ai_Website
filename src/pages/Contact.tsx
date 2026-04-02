import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section } from "@/components/SectionComponents";
import { Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="section-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHero} alt="" className="w-full h-full object-cover opacity-100" />
        </div>
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground leading-tight mb-6">
              Let's talk about your <span className="gradient-text">growth</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground leading-relaxed">
              Request early access, book a demo, or discuss how OptiMerce AI can transform your e-commerce operations.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your name" maxLength={100} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="you@company.com" maxLength={255} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your company" maxLength={100} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Tell us about your needs, or request early access to our pilot program..." maxLength={1000} />
              </div>
              <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Mail size={16} className="text-primary" />hello@optimerce.ai</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-primary" />United Kingdom</div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
              <h3 className="font-semibold text-foreground mb-2">Pilot Program</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We're accepting a limited number of partners for our early access pilot. Get hands-on access to OptiMerce AI and help shape the product.</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={contactHero} alt="OptiMerce AI network" className="w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
