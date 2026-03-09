import { motion } from "framer-motion";
import { Clock, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WorkingHoursSection = () => {
  const { language } = useLanguage();

  const hours = [
    {
      day: { en: "Monday - Friday", fr: "Lundi - Vendredi", rw: "Kuwa mbere - Ijumaa" },
      time: "8:00 AM - 5:00 PM",
    },
    {
      day: { en: "Saturday", fr: "Samedi", rw: "Sande" },
      time: "10:00 AM - 2:00 PM",
    },
    {
      day: { en: "Sunday", fr: "Dimanche", rw: "Icyumweru" },
      time: { en: "Closed", fr: "Fermé", rw: "Ku mugenge" },
    },
  ];

  const contacts = [
    {
      icon: Phone,
      label: { en: "Phone", fr: "Téléphone", rw: "Terefone" },
      value: "+250 (0) 790 123 456",
      action: "tel:+250790123456",
    },
    {
      icon: MessageCircle,
      label: { en: "WhatsApp", fr: "WhatsApp", rw: "WhatsApp" },
      value: "+250 790 123 456",
      action: "https://wa.me/250790123456",
    },
    {
      icon: Clock,
      label: { en: "Email", fr: "Email", rw: "Imeri" },
      value: "akizeisrael123@gmail.com",
      action: "mailto:akizeisrael123@gmail.com",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock size={20} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">
              {language === "fr" ? "Horaires" : language === "rw" ? "Igihe" : "Working Hours"}
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {language === "fr" ? "Nos " : language === "rw" ? "Igihe " : "Our "}
            <span className="text-gradient-gold">
              {language === "fr" ? "Horaires & Contact" : language === "rw" ? "Cy'Imirimo & Vyigize" : "Hours & Contacts"}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock size={24} className="text-accent" />
              {language === "fr" ? "Horaires d'Ouverture" : language === "rw" ? "Igihe Cy'Gusheganya" : "Opening Hours"}
            </h3>
            <div className="space-y-4">
              {hours.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between pb-4 border-b border-border last:border-0"
                >
                  <p className="font-semibold text-foreground">
                    {item.day[language as keyof typeof item.day] || item.day.en}
                  </p>
                  <p className="text-accent font-semibold">
                    {typeof item.time === "string" ? item.time : item.time[language as keyof typeof item.time] || item.time.en}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-accent">{language === "fr" ? "Fuseau Horaire:" : language === "rw" ? "Igihe cy'Ubwoko:" : "Timezone:"}</span>
                <br />
                East Africa Time (EAT) / {language === "fr" ? "Heure d'Afrique de l'Est" : language === "rw" ? "Igihe cy'Iburasirazuba bya Afrika" : "GMT+3"}
              </p>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              {language === "fr" ? "Nous Contacter" : language === "rw" ? "Twigize Ibazo" : "Get In Touch"}
            </h3>
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.action}
                  target={contact.action.startsWith("http") ? "_blank" : undefined}
                  rel={contact.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block bg-card border border-border hover:border-accent hover:bg-accent/5 rounded-lg p-5 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground/60 mb-1">
                        {contact.label[language as keyof typeof contact.label] || contact.label.en}
                      </p>
                      <p className="font-semibold text-foreground break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
