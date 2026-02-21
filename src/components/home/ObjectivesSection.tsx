import { motion } from "framer-motion";
import { FileText, Calculator, Shield, Target } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import taxDocuments from "@/assets/tax-documents.jpg";

const objectives = [
  { icon: FileText, title: "Simplified Filing", desc: "We break down the complex tax declaration process into simple, manageable steps handled entirely by our experts." },
  { icon: Calculator, title: "Accurate Compliance", desc: "Stay fully compliant with Rwanda Revenue Authority regulations without worrying about errors or penalties." },
  { icon: Shield, title: "Trusted & Secure", desc: "Your documents and personal information are handled with the highest level of security and confidentiality." },
];

const ObjectivesSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={taxDocuments} alt="Tax documents and filing" className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]" />
        </motion.div>

        {/* Content on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Target size={20} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">What We Do</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our <span className="text-gradient-gold">Objectives</span>
          </h2>
          <div className="w-16 h-1 gradient-gold rounded-full mb-8" />

          <div className="space-y-6">
            {objectives.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full gradient-gold flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
