import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import heroBg from "@/assets/hero-bg.jpg";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Tax Care office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container-narrow section-padding text-primary-foreground">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t.hero.badge}
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t.hero.title1}{" "}
            <span className="text-gradient-gold">{t.hero.titleHighlight}</span>{" "}
            {t.hero.title2}
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            {t.hero.desc}
          </motion.p>
          <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
            <BookingDialog>
              <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                {t.hero.bookNow} <ArrowRight className="ml-2" size={18} />
              </Button>
            </BookingDialog>
            <Link to="/services">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground px-8 py-6 text-base hover:bg-primary-foreground/10">
                {t.hero.ourServices}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
