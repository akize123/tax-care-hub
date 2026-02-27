import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Calculator, Shield, Target, Users, TrendingUp, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const objectives = [
  { icon: FileText, title: "Simplified Filing", desc: "We break down the complex tax declaration process into simple, manageable steps handled entirely by our experts." },
  { icon: Calculator, title: "Accurate Compliance", desc: "Stay fully compliant with Rwanda Revenue Authority regulations without worrying about errors or penalties." },
  { icon: Shield, title: "Trusted & Secure", desc: "Your documents and personal information are handled with the highest level of security and confidentiality." },
  { icon: Users, title: "Client-Centered Support", desc: "We provide dedicated, personalized assistance to every client, ensuring your unique tax needs are fully understood and met." },
  { icon: TrendingUp, title: "Financial Growth", desc: "Beyond compliance, we help you identify tax-saving opportunities that contribute to your business's long-term financial growth." },
  { icon: Clock, title: "Timely Delivery", desc: "We guarantee that all filings and declarations are submitted well before deadlines, giving you peace of mind year-round." },
];

const ObjectivesSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/lovable-uploads/objectives-bg.jpg')` }}
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

    <div className="container-narrow relative z-10">
      {/* Section header centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Target size={20} className="text-accent" />
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">What We Do</p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Our <span className="text-gradient-gold">Objectives</span>
        </h2>
        <div className="w-16 h-1 gradient-gold rounded-full mx-auto" />
      </motion.div>

      {/* Objectives grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-10"
      >
        <Link
          to="/services"
          className="inline-block px-8 py-3 rounded-md text-base font-semibold gradient-gold text-primary transition-opacity hover:opacity-90"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ObjectivesSection;
