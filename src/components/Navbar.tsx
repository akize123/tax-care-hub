import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import taxcareLogo from "@/assets/taxcare-logo.jpeg";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { language, setLanguage, t, languageLabels } = useLanguage();


  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/blogs", label: t.nav.blogs },
    { to: "/help", label: t.nav.help },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10">
      <div className="flex items-center h-28 px-0 md:px-0 gap-6">
        <Link to="/" className="flex items-center shrink-0 h-28">
          <img src={taxcareLogo} alt="Tax Care Services Center" className="h-full w-auto object-cover" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2.5 rounded-md text-lg font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link
              to="/dashboard"
              className="ml-3 px-6 py-2.5 rounded-md text-lg font-semibold gradient-gold text-primary transition-opacity hover:opacity-90"
            >
              {t.nav.dashboard}
            </Link>
          ) : (
            <Link
              to="/login"
              className="ml-3 px-6 py-2.5 rounded-md text-lg font-semibold gradient-gold text-primary transition-opacity hover:opacity-90"
            >
              {t.nav.login}
            </Link>
          )}

          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-md text-primary-foreground/70 hover:text-primary-foreground transition-colors border border-primary-foreground/20 hover:border-primary-foreground/40"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto mr-4 flex items-center gap-1.5 px-3 py-2 rounded-md text-primary-foreground/70 hover:text-primary-foreground transition-colors border border-primary-foreground/20 hover:border-primary-foreground/40">
              <Globe size={18} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(languageLabels) as Language[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? "bg-accent/10 font-semibold" : ""}
                >
                  {languageLabels[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground ml-auto mr-4"
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
                to={user ? "/dashboard" : "/login"}
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 rounded-md text-sm font-semibold gradient-gold text-primary text-center"
              >
                {user ? t.nav.dashboard : t.nav.login}
              </Link>
              {/* Mobile Language Selector */}
              <div className="flex gap-2 mt-3 px-3">
                {(Object.keys(languageLabels) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                      language === lang
                        ? "gradient-gold text-primary"
                        : "text-primary-foreground/60 border border-primary-foreground/20 hover:text-primary-foreground"
                    }`}
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};

export default Navbar;
