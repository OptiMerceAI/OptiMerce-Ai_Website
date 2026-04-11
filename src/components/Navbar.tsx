import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Architecture", href: "/architecture" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container-tight flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg text-hero-foreground">OptiMerce AI</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === l.href
                  ? "text-primary"
                  : "text-surface-dark-foreground hover:text-hero-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-medium rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#800080" }}
          >
            Request Early Access
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-hero-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-border/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    location.pathname === l.href
                      ? "text-primary"
                      : "text-surface-dark-foreground hover:text-hero-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2 text-sm font-medium rounded-lg text-white text-center"
                style={{ backgroundColor: "#800080" }}
              >
                Request Early Access
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
