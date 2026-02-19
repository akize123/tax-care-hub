import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, MapPin, Shield, FileText, Calculator, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import BookingDialog from "@/components/BookingDialog";
import heroBg from "@/assets/hero-bg.jpg";

import { fadeUp } from "@/lib/animations";

const partners = [
  "Rwanda Revenue Authority",
  "Bank of Kigali",
  "I&M Bank",
  "Equity Bank",
  "BK TecHouse",
  "RDB",
];

const team = [
  { name: "Steven M.", role: "Founder & CEO", desc: "Tax policy expert with 10+ years of experience." },
  { name: "Grace K.", role: "Head of Operations", desc: "Manages client relations and service delivery." },
  { name: "Jean P.", role: "Senior Tax Advisor", desc: "Specialized in corporate tax compliance." },
  { name: "Aline N.", role: "Client Support Lead", desc: "Ensures every client gets personalized help." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Tax Care office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p custom={0} variants={fadeUp} className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Tax Care Services Center
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              We Handle Your{" "}
              <span className="text-gradient-gold">Tax Declaration</span>{" "}
              So You Don't Have To
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              No time, no expertise? No problem. Our team of professionals manages your entire tax declaration process from start to finish.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <BookingDialog>
                <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                  Book Now <ArrowRight className="ml-2" size={18} />
                </Button>
              </BookingDialog>
              <Link to="/services">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground px-8 py-6 text-base hover:bg-primary-foreground/10">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Objectives</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Simplified Filing", desc: "We break down the complex tax declaration process into simple, manageable steps handled entirely by our experts." },
              { icon: Calculator, title: "Accurate Compliance", desc: "Stay fully compliant with Rwanda Revenue Authority regulations without worrying about errors or penalties." },
              { icon: Shield, title: "Trusted & Secure", desc: "Your documents and personal information are handled with the highest level of security and confidentiality." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full gradient-gold flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why We Exist
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-4">
                While other companies offer generic financial services, Tax Care Services Center focuses exclusively on making tax declaration accessible to everyone in Rwanda. We exist because we believe no one should miss deadlines or face penalties due to a lack of understanding.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                We bridge the gap between citizens and the Rwanda Revenue Authority by offering personalized, affordable, and end-to-end tax declaration services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: Eye, label: "Vision", text: "A Rwanda where every citizen is tax-compliant without stress." },
                { icon: CheckCircle, label: "Promise", text: "We handle your taxes from submission to approval — guaranteed." },
                { icon: Users, label: "Approach", text: "Personalized service for individuals, businesses, and organizations." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-primary-foreground/5 p-5 rounded-lg">
                  <item.icon size={22} className="text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.label}</h4>
                    <p className="text-primary-foreground/60 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Trusted Partnerships</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Organizations That Trust Us</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 flex items-center justify-center"
              >
                <span className="font-semibold text-sm text-foreground/80 text-center">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Our Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Meet The People Behind Tax Care</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto rounded-full gradient-navy flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-display font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-accent" />
              <p className="text-accent font-semibold uppercase tracking-widest text-sm">Our Location</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Visit Us in Kigali</h2>
          </motion.div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              title="Tax Care Services Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.33955987498!2d29.82629!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Subscribe / Newsletter */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
              Subscribe to our newsletter for the latest tax updates, RRA news, and exclusive tips.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button className="gradient-gold text-primary font-semibold px-8 hover:opacity-90 shrink-0">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
