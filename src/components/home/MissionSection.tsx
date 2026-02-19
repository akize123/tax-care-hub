import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Users } from "lucide-react";
import taxConsultation from "@/assets/tax-consultation.jpg";

const MissionSection = () => (
  <section className="section-padding gradient-navy text-primary-foreground">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Target size={24} className="text-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">Our Mission</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-4">
            While other companies offer generic financial services, Tax Care Services Center focuses exclusively on making tax declaration accessible to everyone in Rwanda.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed mb-6">
            We bridge the gap between citizens and the Rwanda Revenue Authority by offering personalized, affordable, and end-to-end tax declaration services.
          </p>
          <div className="space-y-4">
            {[
              { icon: Eye, label: "Vision", text: "A Rwanda where every citizen is tax-compliant without stress." },
              { icon: CheckCircle, label: "Promise", text: "We handle your taxes from submission to approval — guaranteed." },
              { icon: Users, label: "Approach", text: "Personalized service for individuals, businesses, and organizations." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-primary-foreground/5 p-4 rounded-lg">
                <item.icon size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm">{item.label}</h4>
                  <p className="text-primary-foreground/60 text-sm">{item.text}</p>
                </div>
              </div>
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
          <img src={taxConsultation} alt="Tax consultation meeting" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionSection;
