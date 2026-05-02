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
      <section className="bg-slate-900 py-20 sm:py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-slate-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 block">Contact</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4 sm:mb-6">
              Let's talk about your <span className="gradient-text">growth</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Request early access, book a demo, or discuss how OptiMerce AI can transform your e-commerce operations.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-3">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm" placeholder="Your name" maxLength={100} />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-3">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm" placeholder="you@company.com" maxLength={255} />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-3">Company</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm" placeholder="Your company" maxLength={100} />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-3">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none text-sm" placeholder="Tell us about your needs, or request early access to our pilot program..." maxLength={1000} />
              </div>
              <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 tap-highlight-transparent">
                {loading ? "Sending..." : "Send Message"} <Send size={16} className="hidden sm:block" />
              </button>
            </form>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 rounded-lg sm:rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4 sm:mb-6 text-base">Get in Touch</h3>
              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Mail size={18} className="text-primary flex-shrink-0" /><a href="mailto:info@optimerceai.co.uk" className="text-primary hover:underline transition-colors break-all">info@optimerceai.co.uk</a></div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-primary flex-shrink-0" /><span>United Kingdom</span></div>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5">
              <h3 className="font-semibold text-foreground mb-3 text-base">Pilot Program</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">We're accepting a limited number of partners for our early access pilot. Get hands-on access to OptiMerce AI and help shape the product.</p>
            </div>
            <div className="rounded-lg sm:rounded-xl overflow-hidden border border-border">
              <img src={contactHero} alt="OptiMerce AI network" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
