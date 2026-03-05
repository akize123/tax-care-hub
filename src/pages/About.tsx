import { motion } from "framer-motion";
import { Lightbulb, Award, TrendingUp, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const valueIcons = [Lightbulb, Award, TrendingUp, Heart];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.about.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-6">{t.about.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">{t.about.desc}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-display text-3xl font-bold mb-6">{t.about.storyTitle}</h2>
            <motion.div className="space-y-4 text-muted-foreground leading-relaxed" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {[t.about.storyP1, t.about.storyP2, t.about.storyP3, t.about.storyP4].map((p, i) => (
                <motion.p key={i} variants={fadeUp} custom={i}>{p}</motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">{t.about.journeyBadge}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.journeyTitle}</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {t.about.milestones.map((m, i) => (
                <motion.div key={m.year} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center z-10">
                    <span className="text-primary font-bold text-xs">{m.year.slice(-2)}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="ml-12 md:ml-0 md:w-1/2 bg-card p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                  >
                    <span className="text-accent font-bold text-sm">{m.year}</span>
                    <h3 className="font-display text-lg font-semibold mt-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">{t.about.valuesBadge}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.valuesTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center glass-card p-8 cursor-default hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
