import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Jean Pierre M.",
    initials: "JP",
    role: { en: "Small Business Owner", fr: "Propriétaire PME", rw: "Nyir'ikigo gito" },
    text: {
      en: "Tax Care handled my entire declaration in 3 days. I used to spend weeks trying to figure it out myself. Highly recommended!",
      fr: "Tax Care a géré toute ma déclaration en 3 jours. Je passais des semaines à essayer de le faire moi-même. Fortement recommandé!",
      rw: "Tax Care yatunganyije imenyesha ryanjye ryose mu minsi 3. Nahoraga mara ibyumweru mbigeza ku ruhare. Ndabishyigikiye cyane!",
    },
    rating: 5,
    color: "border-l-accent",
  },
  {
    name: "Diane U.",
    initials: "DU",
    role: { en: "Freelance Consultant", fr: "Consultante Indépendante", rw: "Umujyanama wikorera" },
    text: {
      en: "Professional, fast, and affordable. The team walked me through every step. I'm a client for life!",
      fr: "Professionnel, rapide et abordable. L'équipe m'a accompagnée à chaque étape. Je suis cliente à vie!",
      rw: "Umwuga, byihuse, kandi bihendutse. Itsinda ryanyobotoye buri ntambwe. Ndi umukiriya burundu!",
    },
    rating: 5,
    color: "border-l-blue-400",
  },
  {
    name: "Eric N.",
    initials: "EN",
    role: { en: "NGO Director", fr: "Directeur ONG", rw: "Umuyobozi w'Umuryango" },
    text: {
      en: "Our organization needed compliance support and Tax Care delivered beyond expectations. Trustworthy and thorough.",
      fr: "Notre organisation avait besoin d'un soutien en conformité et Tax Care a dépassé nos attentes.",
      rw: "Umuryango wacu wari ukeneye ubufasha mu kwubahiriza amategeko na Tax Care yabikoze neza cyane.",
    },
    rating: 5,
    color: "border-l-emerald-400",
  },
  {
    name: "Grace K.",
    initials: "GK",
    role: { en: "Entrepreneur", fr: "Entrepreneure", rw: "Rwiyemezamirimo" },
    text: {
      en: "I was worried about penalties from late filing. Tax Care not only fixed everything but also saved me money. Amazing service!",
      fr: "J'avais peur des pénalités pour déclaration tardive. Tax Care a non seulement tout résolu mais m'a aussi fait économiser.",
      rw: "Nari mfite ubwoba bw'ihazabu zo gutinda. Tax Care ntabwo gusa yakosowe ibintu byose ahubwo yarantunguye n'amafaranga!",
    },
    rating: 5,
    color: "border-l-purple-400",
  },
];

const TestimonialsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="section-padding gradient-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-narrow relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            {language === "fr" ? "Témoignages" : language === "rw" ? "Ibyo Abakiriya Bavuga" : "Testimonials"}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            {language === "fr" ? "Ce Que Disent Nos " : language === "rw" ? "Ibyo Abakiriya Bacu " : "What Our "}
            <span className="text-gradient-gold">
              {language === "fr" ? "Clients" : language === "rw" ? "Bavuga" : "Clients Say"}
            </span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-primary-foreground/5 border-l-4 ${t.color} rounded-r-xl p-7 hover:bg-primary-foreground/10 transition-colors group`}
            >
              {/* Large decorative quote */}
              <Quote
                size={48}
                className="absolute top-4 right-5 text-accent/10 group-hover:text-accent/20 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-primary-foreground/75 leading-relaxed mb-6 text-base italic">
                "{t.text[language as keyof typeof t.text] || t.text.en}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm font-display">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-primary-foreground text-sm">{t.name}</p>
                  <p className="text-primary-foreground/50 text-xs mt-0.5">
                    {t.role[language as keyof typeof t.role] || t.role.en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
