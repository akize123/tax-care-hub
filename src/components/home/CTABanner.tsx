import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingDialog from "@/components/BookingDialog";

const CTABanner = () => {
  const { language } = useLanguage();

  return (
    <section className="section-padding bg-gradient-gold">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "fr"
              ? "Prêt à Optimiser Vos Taxes?"
              : language === "rw"
              ? "Urahize gushaka Ubufasha ku Nzira y'Inyenyenya?"
              : "Ready to Optimize Your Taxes?"}
          </h2>
          <p className="text-primary/80 text-lg md:text-xl leading-relaxed mb-8">
            {language === "fr"
              ? "Réservez une consultation gratuite avec nos experts en matière fiscale et découvrez comment nous pouvons vous aider à économiser."
              : language === "rw"
              ? "Menyagacira kigire cy'ibiganiro k'umwanzi n'abanyamwuga bacu ba nzira y'inyenyenya kandi mumenye uko tukaba ushobora kumusambura."
              : "Book a free consultation with our tax experts and discover how we can help you save."}
          </p>
          <BookingDialog>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Calendar size={20} />
              {language === "fr"
                ? "Réserver Maintenant"
                : language === "rw"
                ? "Menyagacira Guhera"
                : "Book Consultation"}
              <ArrowRight size={20} />
            </motion.button>
          </BookingDialog>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
