import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import stevenPhoto from "@/assets/steven-ceo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const teamNames = ["Steven M.", "Grace K.", "Jean P.", "Aline N."];
const teamPhotos = [stevenPhoto, null, null, null];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            <Users size={16} className="text-accent" />
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">{t.team.badge}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.team.title1} <span className="text-gradient-gold">{t.team.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-5 rounded-full" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t.team.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.team.members.map((member, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-52 overflow-hidden">
                {teamPhotos[i] ? (
                  <img src={teamPhotos[i]!} alt={teamNames[i]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full gradient-navy flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-4xl opacity-80">
                      {teamNames[i].split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold mb-1">{teamNames[i]}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
