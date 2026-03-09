import { motion } from "framer-motion";
import { Clock, Phone, Mail, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WorkingHoursSection = () => {
  const { language } = useLanguage();

  const hours = [
    {
      day: { en: "Monday", fr: "Lundi", rw: "Kuwa mbere" },
      time: "8:00 AM – 5:00 PM",
      open: true,
    },
    {
      day: { en: "Tuesday", fr: "Mardi", rw: "Kuwa kabiri" },
      time: "8:00 AM – 5:00 PM",
      open: true,
    },
    {
      day: { en: "Wednesday", fr: "Mercredi", rw: "Kuwa gatatu" },
      time: "8:00 AM – 5:00 PM",
      open: true,
    },
    {
      day: { en: "Thursday", fr: "Jeudi", rw: "Kuwa kane" },
      time: "8:00 AM – 5:00 PM",
      open: true,
    },
    {
      day: { en: "Friday", fr: "Vendredi", rw: "Kuwa gatanu" },
      time: "8:00 AM – 5:00 PM",
      open: true,
    },
    {
      day: { en: "Saturday", fr: "Samedi", rw: "Kuwa gatandatu" },
      time: "10:00 AM – 2:00 PM",
      open: true,
    },
    {
      day: { en: "Sunday", fr: "Dimanche", rw: "Ku cyumweru" },
      time: { en: "Closed", fr: "Fermé", rw: "Bafunze" },
      open: false,
    },
  ];

  const contacts = [
    {
      icon: Phone,
      label: { en: "Call Us", fr: "Appelez-nous", rw: "Duhamagare" },
      value: "+250 781 093 714",
      sub: { en: "Available during working hours", fr: "Disponible pendant les heures de travail", rw: "Igihe cy'akazi" },
      href: "tel:+250781093714",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: MessageCircle,
      label: { en: "WhatsApp", fr: "WhatsApp", rw: "WhatsApp" },
      value: "+250 781 093 714",
      sub: { en: "Quick responses guaranteed", fr: "Réponses rapides garanties", rw: "Ibisubizo byihuse" },
      href: "https://wa.me/250781093714",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: Mail,
      label: { en: "Email", fr: "Email", rw: "Imeri" },
      value: "akizeisrael123@gmail.com",
      sub: { en: "Reply within 24 hours", fr: "Réponse sous 24h", rw: "Igisubizo mu masaha 24" },
      href: "mailto:akizeisrael123@gmail.com",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: MapPin,
      label: { en: "Visit Us", fr: "Visitez-nous", rw: "Tuzure" },
      value: "Kigali, Rwanda",
      sub: { en: "KG 123 St, Gasabo District", fr: "KG 123 Rue, District Gasabo", rw: "KG 123 Ruyira, Akarere ka Gasabo" },
      href: "https://maps.google.com/?q=Kigali,Rwanda",
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  const todayIndex = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  // Map JS day index to our array: Mon=0..Sun=6
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  const labels = {
    badge: { en: "Availability", fr: "Disponibilité", rw: "Igihe Turaboneka" },
    title: { en: "Our Hours", fr: "Nos Horaires", rw: "Igihe Cyacu" },
    titleGold: { en: "& Contacts", fr: "& Contacts", rw: "& Itumanaho" },
    subtitle: {
      en: "We are here to help you navigate tax regulations with ease. Reach us through any of the channels below.",
      fr: "Nous sommes là pour vous aider à naviguer les réglementations fiscales. Contactez-nous via l'un des canaux ci-dessous.",
      rw: "Turi hano kugufasha gukurikirana amategeko y'imisoro. Twandikire ukoresheje imwe mu nzira zikurikira.",
    },
    hoursTitle: { en: "Opening Hours", fr: "Heures d'Ouverture", rw: "Amasaha y'Akazi" },
    timezone: { en: "All times in East Africa Time (EAT) – GMT+3", fr: "Tous les horaires en heure d'Afrique de l'Est (EAT) – GMT+3", rw: "Amasaha yose mu gihe cy'Iburasirazuba bwa Afrika (EAT) – GMT+3" },
    today: { en: "Today", fr: "Aujourd'hui", rw: "Uyu munsi" },
    contactTitle: { en: "Get In Touch", fr: "Nous Contacter", rw: "Turandikire" },
  };

  const t = (obj: Record<string, string>) => obj[language] ?? obj.en;

  return (
    <section className="section-padding gradient-navy text-primary-foreground relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-narrow relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock size={18} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">
              {t(labels.badge)}
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t(labels.title)}{" "}
            <span className="text-gradient-gold">{t(labels.titleGold)}</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
            {t(labels.subtitle)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                {t(labels.hoursTitle)}
              </h3>
            </div>

            <div className="space-y-1">
              {hours.map((item, index) => {
                const isToday = index === adjustedToday;
                const dayLabel = t(item.day);
                const timeLabel = typeof item.time === "string"
                  ? item.time
                  : t(item.time as Record<string, string>);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      isToday
                        ? "bg-accent/15 border border-accent/30"
                        : "hover:bg-primary-foreground/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      )}
                      <span
                        className={`font-medium text-sm ${
                          isToday ? "text-accent font-semibold" : "text-primary-foreground/80"
                        }`}
                      >
                        {dayLabel}
                        {isToday && (
                          <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                            {t(labels.today)}
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        item.open ? "text-accent" : "text-primary-foreground/40"
                      }`}
                    >
                      {timeLabel}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Timezone note */}
            <div className="mt-6 flex items-start gap-2 px-4 py-3 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-primary-foreground/50 text-xs leading-relaxed">
                {t(labels.timezone)}
              </p>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                {t(labels.contactTitle)}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 hover:border-accent/40 rounded-2xl p-5 transition-all duration-300 flex flex-col gap-3"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${contact.color} transition-colors`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-wider mb-1">
                        {t(contact.label)}
                      </p>
                      <p className="text-primary-foreground font-semibold text-sm break-all leading-snug group-hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                      <p className="text-primary-foreground/40 text-xs mt-1">
                        {t(contact.sub)}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
