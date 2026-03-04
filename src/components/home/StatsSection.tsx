import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FileCheck, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { icon: Users, value: 500, suffix: "+", labelKey: "clients" },
  { icon: FileCheck, value: 1200, suffix: "+", labelKey: "filings" },
  { icon: Award, value: 3, suffix: "+", labelKey: "years" },
  { icon: Clock, value: 98, suffix: "%", labelKey: "onTime" },
];

const labels: Record<string, Record<string, string>> = {
  en: { clients: "Happy Clients", filings: "Tax Filings Completed", years: "Years of Experience", onTime: "On-Time Delivery" },
  fr: { clients: "Clients Satisfaits", filings: "Déclarations Complétées", years: "Ans d'Expérience", onTime: "Livraison à Temps" },
  rw: { clients: "Abakiriya Bishimye", filings: "Imisoro Yuzuzwa", years: "Imyaka y'Uburambe", onTime: "Guhabwa ku Gihe" },
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const StatsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center text-primary-foreground"
              >
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/60 text-sm font-medium">
                  {labels[language]?.[stat.labelKey] || labels.en[stat.labelKey]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
