import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const partners = [
  { name: "Rwanda Revenue Authority", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rwanda_Revenue_Authority_logo.png/220px-Rwanda_Revenue_Authority_logo.png" },
  { name: "Bank of Kigali", logo: "https://images.seeklogo.com/logo-png/52/1/bank-of-kigali-logo-png_seeklogo-524654.png" },
  { name: "I&M Bank", logo: "https://images.seeklogo.com/logo-png/43/1/i-m-bank-logo-png_seeklogo-432553.png" },
  { name: "Equity Bank", logo: "https://images.seeklogo.com/logo-png/31/2/equity-bank-logo-png_seeklogo-312498.png" },
  { name: "BK TecHouse", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGVYFpXqmUr1Q/company-logo_200_200/company-logo_200_200/0/1630475697498?e=2147483647&v=beta&t=placeholder" },
  { name: "RDB", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Rwanda_Development_Board_logo.png/250px-Rwanda_Development_Board_logo.png" },
];

const PartnersSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
          <Handshake size={16} className="text-accent" />
          <span className="text-accent font-semibold uppercase tracking-widest text-xs">Trusted Partnerships</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Organizations That <span className="text-gradient-gold">Trust Us</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          We collaborate with Rwanda's leading institutions to deliver seamless tax services.
        </p>
        <div className="w-20 h-1 gradient-gold mx-auto mt-5 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card rounded-xl p-8 flex flex-col items-center justify-center gap-4 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center overflow-hidden border-2 border-border">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-14 h-14 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-display font-bold text-xl text-accent">${partner.name.split(' ').map(w => w[0]).join('')}</span>`;
                  }
                }}
              />
            </div>
            <span className="font-semibold text-sm text-foreground text-center">{partner.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
