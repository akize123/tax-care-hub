import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-primary text-sm">TC</span>
              </div>
              <span className="font-display font-bold text-lg">Tax Care</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner in tax declaration services. We simplify the complex so you can focus on what matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/blogs", label: "Blogs" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/60 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Tax Declaration</li>
              <li>Tax Consultation</li>
              <li>Document Filing</li>
              <li>Compliance Review</li>
              <li>RRA Updates</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent shrink-0" />
                Kigali, Rwanda
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                +250 788 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" />
                info@taxcare.rw
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Tax Care Services Center. All rights reserved.</p>
          <p>Designed by Steven</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
