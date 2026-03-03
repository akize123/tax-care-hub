import { motion } from "framer-motion";
import { FileCheck, Calculator, Search, FileText, Briefcase, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import BookingDialog from "@/components/BookingDialog";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [FileCheck, Calculator, Search, FileText, Briefcase, Shield];

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.services.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-4">{t.services.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-xl mx-auto mb-8">{t.services.desc}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <BookingDialog>
              <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                {t.services.bookService} <ArrowRight className="ml-2" size={18} />
              </Button>
            </BookingDialog>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((s, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card p-8 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <BookingDialog>
                    <button className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      {t.services.bookNow} <ArrowRight size={14} />
                    </button>
                  </BookingDialog>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t.services.ctaTitle}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">{t.services.ctaDesc}</p>
            <BookingDialog>
              <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                {t.services.ctaButton} <ArrowRight className="ml-2" size={18} />
              </Button>
            </BookingDialog>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
