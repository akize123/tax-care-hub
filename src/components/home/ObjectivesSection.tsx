import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Calculator, Shield, Target, Users, TrendingUp, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import taxTeamBg from "@/assets/tax-team.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [FileText, Calculator, Shield, Users, TrendingUp, Clock];

const ObjectivesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${taxTeamBg})` }} />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="container-narrow relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <Target size={20} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">{t.objectives.badge}</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            {t.objectives.title} <span className="text-gradient-gold">{t.objectives.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 gradient-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.objectives.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative rounded-xl border border-primary-foreground/20 bg-primary/50 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-primary-foreground">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-10">
          <Link to="/services" className="inline-block px-8 py-3 rounded-md text-base font-semibold gradient-gold text-primary transition-opacity hover:opacity-90">
            {t.objectives.learnMore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
