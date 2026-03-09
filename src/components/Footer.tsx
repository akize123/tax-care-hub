import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
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

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={taxcareLogo} alt="Tax Care Services Center" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/60 hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {t.footer.services.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" />Kigali, Rwanda</li>
              <li className="flex items-center gap-2"><a href="tel:+250781093714" className="hover:text-accent transition-colors"><Phone size={16} className="text-accent shrink-0 inline mr-2" />+250 781 093 714</a></li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-accent shrink-0" />akizeisrael123@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.designedBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
