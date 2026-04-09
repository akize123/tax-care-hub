import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import rraLogo from "@/assets/partners/rra-logo.png";
import bkLogo from "@/assets/partners/bk-logo.png";
import imBankLogo from "@/assets/partners/im-bank-logo.png";
import equityBankLogo from "@/assets/partners/equity-bank-logo.png";
import bkTechouseLogo from "@/assets/partners/bk-techouse-logo.png";
import rdbLogo from "@/assets/partners/rdb-logo.png";

const partners = [
  { name: "Rwanda Revenue Authority", logo: rraLogo },
  { name: "Bank of Kigali", logo: bkLogo },
  { name: "I&M Bank", logo: imBankLogo },
  { name: "Equity Bank", logo: equityBankLogo },
  { name: "BK TecHouse", logo: bkTechouseLogo },
  { name: "RDB", logo: rdbLogo },
];

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            <Handshake size={16} className="text-accent" />
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">{t.partners.badge}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {t.partners.title1} <span className="text-gradient-gold">{t.partners.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">{t.partners.desc}</p>
          <div className="w-20 h-1 gradient-gold mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div key={partner.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-card rounded-xl p-8 flex flex-col items-center justify-center gap-4 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center overflow-hidden border-2 border-border">
                <img src={partner.logo} alt={partner.name} className="w-14 h-14 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="font-display font-bold text-xl text-accent">${partner.name.split(' ').map(w => w[0]).join('')}</span>`;
                    }
                  }}
                />
              </div>
              <span className="font-semibold text-sm text-foreground text-center">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
