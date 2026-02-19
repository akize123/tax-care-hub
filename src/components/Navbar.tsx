import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/help", label: "Help" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
            <span className="font-display font-bold text-primary text-sm">TC</span>
          </div>
          <span className="font-display font-bold text-primary-foreground text-lg tracking-tight">
            Tax Care
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-3 px-5 py-2 rounded-md text-sm font-semibold gradient-gold text-primary transition-opacity hover:opacity-90"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-border/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-accent bg-navy-light"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 rounded-md text-sm font-semibold gradient-gold text-primary text-center"
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
