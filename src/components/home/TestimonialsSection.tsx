import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Jean Pierre M.",
    role: { en: "Small Business Owner", fr: "Propriétaire PME", rw: "Nyir'ikigo gito" },
    text: {
      en: "Tax Care handled my entire declaration in 3 days. I used to spend weeks trying to figure it out myself. Highly recommended!",
      fr: "Tax Care a géré toute ma déclaration en 3 jours. Je passais des semaines à essayer de le faire moi-même. Fortement recommandé!",
      rw: "Tax Care yatunganyije imenyesha ryanjye ryose mu minsi 3. Nahoraga mara ibyumweru mbigeza ku ruhare. Ndabishyigikiye cyane!",
    },
    rating: 5,
  },
  {
    name: "Diane U.",
    role: { en: "Freelance Consultant", fr: "Consultante Indépendante", rw: "Umujyanama wikorera" },
    text: {
      en: "Professional, fast, and affordable. The team walked me through every step. I'm a client for life!",
      fr: "Professionnel, rapide et abordable. L'équipe m'a accompagnée à chaque étape. Je suis cliente à vie!",
      rw: "Umwuga, byihuse, kandi bihendutse. Itsinda ryanyobotoye buri ntambwe. Ndi umukiriya burundu!",
    },
    rating: 5,
  },
  {
    name: "Eric N.",
    role: { en: "NGO Director", fr: "Directeur ONG", rw: "Umuyobozi w'Umuryango" },
    text: {
      en: "Our organization needed compliance support and Tax Care delivered beyond expectations. Trustworthy and thorough.",
      fr: "Notre organisation avait besoin d'un soutien en conformité et Tax Care a dépassé nos attentes.",
      rw: "Umuryango wacu wari ukeneye ubufasha mu kwubahiriza amategeko na Tax Care yabikoze neza cyane.",
    },
    rating: 5,
  },
  {
    name: "Grace K.",
    role: { en: "Entrepreneur", fr: "Entrepreneure", rw: "Rwiyemezamirimo" },
    text: {
      en: "I was worried about penalties from late filing. Tax Care not only fixed everything but also saved me money. Amazing service!",
      fr: "J'avais peur des pénalités pour déclaration tardive. Tax Care a non seulement tout résolu mais m'a aussi fait économiser.",
      rw: "Nari mfite ubwoba bw'ihazabu zo gutinda. Tax Care ntabwo gusa yakosowe ibintu byose ahubwo yarantunguye n'amafaranga!",
    },
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
            {language === "fr" ? "Témoignages" : language === "rw" ? "Ibyo Abakiriya Bavuga" : "Testimonials"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {language === "fr" ? "Ce Que Disent Nos " : language === "rw" ? "Ibyo Abakiriya Bacu " : "What Our "}
            <span className="text-gradient-gold">
              {language === "fr" ? "Clients" : language === "rw" ? "Bavuga" : "Clients Say"}
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center relative"
            >
              <Quote size={40} className="text-accent/20 absolute top-6 left-6" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 italic">
                "{t.text[language as keyof typeof t.text] || t.text.en}"
              </p>
              <p className="font-display text-lg font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">
                {t.role[language as keyof typeof t.role] || t.role.en}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
