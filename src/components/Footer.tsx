import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import taxcareLogo from "@/assets/taxcare-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/blogs", label: t.nav.blogs },
    { to: "/contact", label: t.nav.contact },
  ];

  const services = [
    "Tax Declaration",
    "Tax Consultation",
    "Document Filing",
    "Compliance Review",
    "RRA Updates",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer grid */}
      <div className="container-narrow px-4 md:px-8 lg:px-16 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img
                src={taxcareLogo}
                alt="Tax Care Services Center"
                className="h-9 w-auto object-contain rounded-sm"
              />
            </div>
            <p className="text-primary-foreground/55 text-xs leading-relaxed mb-5 max-w-[220px]">
              {t.footer.desc}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:border-accent hover:text-accent transition-all"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:border-accent hover:text-accent transition-all"
              >
                <Twitter size={14} />
              </a>
              <a
                href="mailto:akizeisrael123@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:border-accent hover:text-accent transition-all"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-accent text-sm mb-4 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/55 hover:text-accent transition-colors text-xs flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-semibold text-accent text-sm mb-4 uppercase tracking-wider">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-primary-foreground/55 text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-accent text-sm mb-4 uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/55 text-xs">
                <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Phone size={13} className="text-accent shrink-0 mt-0.5" />
                <a
                  href="tel:+250781093714"
                  className="text-primary-foreground/55 hover:text-accent transition-colors"
                >
                  +250 781 093 714
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Mail size={13} className="text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:akizeisrael123@gmail.com"
                  className="text-primary-foreground/55 hover:text-accent transition-colors break-all"
                >
                  akizeisrael123@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-primary-foreground/35">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.designedBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
