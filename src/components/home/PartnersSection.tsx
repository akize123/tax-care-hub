import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import taxSecurity from "@/assets/tax-security.jpg";

const partners = [
  { name: "Rwanda Revenue Authority", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rwanda_Revenue_Authority_logo.png/220px-Rwanda_Revenue_Authority_logo.png" },
  { name: "Bank of Kigali", logo: "https://images.seeklogo.com/logo-png/52/1/bank-of-kigali-logo-png_seeklogo-524654.png" },
  { name: "I&M Bank", logo: "https://images.seeklogo.com/logo-png/43/1/i-m-bank-logo-png_seeklogo-432553.png" },
  { name: "Equity Bank", logo: "https://images.seeklogo.com/logo-png/31/2/equity-bank-logo-png_seeklogo-312498.png" },
  { name: "BK TecHouse", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGVYFpXqmUr1Q/company-logo_200_200/company-logo_200_200/0/1630475697498?e=2147483647&v=beta&t=placeholder" },
  { name: "RDB", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Rwanda_Development_Board_logo.png/250px-Rwanda_Development_Board_logo.png" },
];

const PartnersSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-10">
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Trusted Partnerships</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Organizations That Trust Us</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center overflow-hidden border border-border">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-display font-bold text-lg text-accent">${partner.name.split(' ').map(w => w[0]).join('')}</span>`;
                  }
                }}
              />
            </div>
            <span className="font-semibold text-sm text-foreground/80 text-center">{partner.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
