import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import taxSecurity from "@/assets/tax-security.jpg";

const partners = [
  "Rwanda Revenue Authority",
  "Bank of Kigali",
  "I&M Bank",
  "Equity Bank",
  "BK TecHouse",
  "RDB",
];

const PartnersSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Trusted Partnerships</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Organizations That Trust Us</h2>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 flex items-center justify-center"
              >
                <span className="font-semibold text-sm text-foreground/80 text-center">{partner}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={taxSecurity} alt="Trusted and secure tax services" className="rounded-lg shadow-lg w-full object-cover aspect-square max-w-md mx-auto" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
