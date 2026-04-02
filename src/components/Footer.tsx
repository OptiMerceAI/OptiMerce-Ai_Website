import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="section-dark border-t border-border/10">
    <div className="container-tight px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">O</span>
            </div>
            <span className="font-semibold text-lg text-hero-foreground">OptiMerce AI</span>
          </div>
          <p className="text-sm text-surface-dark-foreground leading-relaxed">
            AI-powered decision engine for e-commerce growth. Built in the UK.
          </p>
        </div>
        <div>
          <h4 className="text-hero-foreground font-medium text-sm mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-surface-dark-foreground">
            <li><Link to="/product" className="hover:text-primary transition-colors">Product</Link></li>
            <li><Link to="/architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
            <li><Link to="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link></li>
            <li><Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-hero-foreground font-medium text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-surface-dark-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-hero-foreground font-medium text-sm mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-surface-dark-foreground">
            <li><span className="cursor-default">Privacy Policy</span></li>
            <li><span className="cursor-default">Terms of Service</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-surface-dark-foreground">© 2026 OptiMerce AI. All rights reserved. A Jwalit Ltd company.</p>
        <p className="text-xs text-surface-dark-foreground">Built with ❤️ in the United Kingdom</p>
      </div>
    </div>
  </footer>
);

export default Footer;
