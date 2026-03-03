import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Users } from "lucide-react";
import taxConsultation from "@/assets/tax-consultation.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Eye, label: t.mission.vision, text: t.mission.visionText },
    { icon: CheckCircle, label: t.mission.promise, text: t.mission.promiseText },
    { icon: Users, label: t.mission.approach, text: t.mission.approachText },
  ];

  return (
    <section className="section-padding gradient-navy text-primary-foreground">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <Target size={24} className="text-accent" />
              <p className="text-accent font-semibold uppercase tracking-widest text-sm">{t.mission.badge}</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t.mission.title}</h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">{t.mission.p1}</p>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">{t.mission.p2}</p>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-primary-foreground/5 p-4 rounded-lg">
                  <item.icon size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">{item.label}</h4>
                    <p className="text-primary-foreground/60 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="h-full">
            <img src={taxConsultation} alt="Tax consultation meeting" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
