import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import taxTeam from "@/assets/tax-team.jpg";
import stevenPhoto from "@/assets/steven-ceo.jpeg";

const team = [
  { name: "Steven M.", role: "Founder & CEO", desc: "Tax policy expert with 10+ years of experience.", photo: stevenPhoto },
  { name: "Grace K.", role: "Head of Operations", desc: "Manages client relations and service delivery.", photo: null },
  { name: "Jean P.", role: "Senior Tax Advisor", desc: "Specialized in corporate tax compliance.", photo: null },
  { name: "Aline N.", role: "Client Support Lead", desc: "Ensures every client gets personalized help.", photo: null },
];

const TeamSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
        {/* Image on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={taxTeam} alt="Tax Care team working together" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            <Users size={16} className="text-accent" />
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">Our Team</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Meet The People Behind <span className="text-gradient-gold">Tax Care</span>
          </h2>
          <div className="w-16 h-1 gradient-gold mb-5 rounded-full" />
          <p className="text-muted-foreground leading-relaxed">
            Our dedicated team of tax professionals brings years of combined experience in tax policy, compliance, and client service to ensure you get the best support possible.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent/30"
          >
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-accent/30" />
            ) : (
              <div className="w-20 h-20 mx-auto rounded-full gradient-navy flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
            )}
            <h3 className="font-display text-lg font-semibold">{member.name}</h3>
            <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
            <p className="text-muted-foreground text-sm">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
