import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Section } from "@/components/SectionComponents";
import { Send, Mail, MapPin } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {

  return (
    <Layout>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="container-tight">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's talk about your <span className="gradient-text">growth</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Request early access, book a demo, or discuss how OptiMerce AI can transform your e-commerce operations.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="61e609a4-7aa3-481b-b46d-b0fc891c718a" />
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input type="text" name="name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your name" maxLength={100} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="you@company.com" maxLength={255} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <input type="text" name="company" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your company" maxLength={100} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Tell us about your needs, or request early access to our pilot program..." maxLength={1000} required />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Mail size={16} className="text-primary" /><a href="mailto:info@optimerceai.co.uk" className="text-primary hover:underline transition-colors">info@optimerceai.co.uk</a></div>
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
