import { motion } from "framer-motion";
import { Lightbulb, Award, TrendingUp, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";

const milestones = [
  { year: "2020", title: "The Idea", desc: "After witnessing countless Rwandans struggle with tax deadlines, the idea of a dedicated tax care center was born." },
  { year: "2021", title: "Research & Planning", desc: "We conducted extensive research with RRA, taxpayers, and business owners to understand the core pain points." },
  { year: "2022", title: "Official Launch", desc: "Tax Care Services Center was officially registered and opened its first office in Kigali." },
  { year: "2023", title: "Growing Trust", desc: "We served over 500 clients and partnered with leading banks and organizations." },
  { year: "2024", title: "Digital Expansion", desc: "Launched our online platform for remote tax declaration services across all provinces." },
  { year: "2025", title: "Looking Ahead", desc: "Expanding our team, services, and reach to serve every Rwandan who needs tax support." },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We use modern tools and approaches to simplify outdated processes." },
  { icon: Award, title: "Excellence", desc: "Every declaration is handled with precision, accuracy, and care." },
  { icon: TrendingUp, title: "Growth", desc: "We grow with our clients, constantly improving our services." },
  { icon: Heart, title: "Compassion", desc: "We understand the stress of tax season and treat every client with empathy." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            The Story Behind Tax Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From a simple observation of hardworking citizens struggling with tax processes, to building Rwanda's most trusted tax declaration service — this is our journey.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-6">How It All Started</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In 2020, our founder Steven noticed a recurring problem: many individuals and small business owners in Rwanda were missing tax deadlines, filing incorrect returns, or paying unnecessary penalties — not because they wanted to, but because the process was too complicated and time-consuming.
              </p>
              <p>
                After speaking with hundreds of taxpayers, it became clear that most people simply didn't have the knowledge, skills, or time to navigate the Rwanda Revenue Authority's system on their own. They needed someone they could trust to handle it for them.
              </p>
              <p>
                That's when Tax Care Services Center was conceived — a dedicated hub where people could walk in (or go online), hand over their documents, and have their entire tax declaration handled professionally from start to finish.
              </p>
              <p>
                After two years of careful planning, partnerships, and team building, Tax Care officially launched in 2022 and has since served hundreds of satisfied clients across Rwanda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center z-10">
                    <span className="text-primary font-bold text-xs">{m.year.slice(-2)}</span>
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 bg-card p-6 rounded-lg shadow-sm">
                    <span className="text-accent font-bold text-sm">{m.year}</span>
                    <h3 className="font-display text-lg font-semibold mt-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Our Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
