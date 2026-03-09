import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: {
        en: "How long does a tax declaration typically take?",
        fr: "Combien de temps prend généralement une déclaration fiscale?",
        rw: "Igisegeti giya kwigenga imenyesha gikora ibyumweru bingahe?",
      },
      answer: {
        en: "Most tax declarations are completed within 3-7 business days, depending on the complexity of your case and documentation.",
        fr: "La plupart des déclarations fiscales sont complétées en 3 à 7 jours ouvrables, selon la complexité de votre dossier.",
        rw: "Imenyesha nyinshi zirangira mu minsi 3-7 y'ibikorwa, bivuye ku bugorofa bw'ikaze.",
      },
    },
    {
      question: {
        en: "What documents do I need to provide?",
        fr: "Quels documents dois-je fournir?",
        rw: "Ibiri bya dokiman ngombwa kugabanya?",
      },
      answer: {
        en: "Basic documents include ID, income statements, business records (if applicable), and any supporting financial documents. Our team will provide a complete checklist after your initial consultation.",
        fr: "Les documents de base comprennent une pièce d'identité, des relevés de revenus, des registres commerciaux et tout document financier pertinent.",
        rw: "Ibiri byibanze harimo impapuro z'identite, impapuro z'amahoro y'amafaranga, n'ibindi biri bitanga ubufasha.",
      },
    },
    {
      question: {
        en: "What is your pricing structure?",
        fr: "Quelle est votre structure tarifaire?",
        rw: "Ni izihe ndahiro z'imirimo?",
      },
      answer: {
        en: "Our pricing is transparent and flexible. We offer competitive rates based on service complexity. Contact us for a customized quote.",
        fr: "Notre tarification est transparente et flexible. Nous offrons des tarifs compétitifs basés sur la complexité du service.",
        rw: "Indahiro zacu ni ibazirungo kandi zihakana kubinyuranye. Twoherereza ibisigaye bw'ubwoko bw'umurimo.",
      },
    },
    {
      question: {
        en: "Do you offer audit services?",
        fr: "Offrez-vous des services d'audit?",
        rw: "Muratanga serivisi y'ubugenzuzi?",
      },
      answer: {
        en: "Yes, we provide comprehensive audit services for businesses of all sizes. Our audits ensure compliance and identify areas for financial improvement.",
        fr: "Oui, nous fournissons des services d'audit complets pour les entreprises de toutes tailles.",
        rw: "Yego, twitanga serivisi z'ubugenzuzi bwose byibazirungo. Ubugenzuzi bwacu bushyigikira kwubahiriza amategeko.",
      },
    },
    {
      question: {
        en: "What is your support availability?",
        fr: "Quelle est votre disponibilité de support?",
        rw: "Murahise kumvikana kangahe?",
      },
      answer: {
        en: "We provide support Monday to Friday, 8am to 5pm (Kigali Time). For urgent matters, contact us via WhatsApp or email.",
        fr: "Nous fournissons du support du lundi au vendredi, 8h à 17h (heure de Kigali).",
        rw: "Twitanga ubufasha kuva Kuwa mbere kugeza Ijumaa, saa 8 kugeza 17 (Igihe cy'Ikigali).",
      },
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
            <HelpCircle size={20} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">
              {language === "fr" ? "FAQ" : language === "rw" ? "Ibibazo" : "FAQ"}
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {language === "fr" ? "Questions" : language === "rw" ? "Ibibazo" : "Frequently Asked"}
            <span className="text-gradient-gold">
              {language === "fr" ? " Fréquemment Posées" : language === "rw" ? " Bikoreshwa" : " Questions"}
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full text-left bg-card border border-border hover:border-accent/50 rounded-lg p-5 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {faq.question[language as keyof typeof faq.question] || faq.question.en}
                  </p>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-accent transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 bg-secondary/50 border border-t-0 border-border rounded-b-lg">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer[language as keyof typeof faq.answer] || faq.answer.en}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
