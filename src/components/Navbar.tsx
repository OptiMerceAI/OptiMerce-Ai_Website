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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-12 sm:h-13 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <img src="/8198cc75-e9d8-4ec1-ad82-dd129dadbeb3_removalai_preview.png" alt="OptiMerce AI Logo" className="h-8 sm:h-9 w-auto" />
          <span className="hidden sm:inline font-semibold text-sm sm:text-base text-gray-900">OptiMerce AI</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                location.pathname === l.href
                  ? "text-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-colors"
            style={{
              backgroundColor: "#2563eb",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1d4ed8"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
          >
            Early Access
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700 p-1.5 -mr-1.5"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-3 gap-0.5 max-w-7xl mx-auto">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 text-sm rounded-md transition-colors ${
                    location.pathname === l.href
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2.5 text-sm font-semibold rounded-lg text-white text-center transition-colors"
                style={{
                  backgroundColor: "#2563eb",
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1d4ed8"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
              >
                Early Access
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
