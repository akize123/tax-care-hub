import { motion } from "framer-motion";
import { Lightbulb, Award, TrendingUp, Heart, Target, Shield, Users, Clock, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import stevenPhoto from "@/assets/steven-ceo.jpeg";

const valueIcons = [Lightbulb, Award, TrendingUp, Heart];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: "500+", label: language === "fr" ? "Clients Servis" : language === "rw" ? "Abakiliya Bakoreshejwe" : "Clients Served" },
    { value: "98%", label: language === "fr" ? "Taux de Réussite" : language === "rw" ? "Igipimo cy'Intsinzi" : "Success Rate" },
    { value: "4+", label: language === "fr" ? "Années d'Expérience" : language === "rw" ? "Imyaka y'Uburambe" : "Years Experience" },
    { value: "24/7", label: language === "fr" ? "Assistance" : language === "rw" ? "Ubufasha" : "Support" },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: language === "fr" ? "Confiance & Sécurité" : language === "rw" ? "Kwizera & Umutekano" : "Trust & Security",
      desc: language === "fr" ? "Vos informations sont protégées avec le plus haut niveau de sécurité" : language === "rw" ? "Amakuru yawe arindwa n'umutekano wo hejuru" : "Your information is protected with the highest level of security and confidentiality",
    },
    {
      icon: Users,
      title: language === "fr" ? "Équipe d'Experts" : language === "rw" ? "Itsinda ry'Impuguke" : "Expert Team",
      desc: language === "fr" ? "Notre équipe possède plus de 10 ans d'expérience en fiscalité" : language === "rw" ? "Itsinda ryacu rifite uburambe burenga imyaka 10 mu misoro" : "Our team has over 10 years of combined experience in tax services",
    },
    {
      icon: Clock,
      title: language === "fr" ? "Livraison Rapide" : language === "rw" ? "Gutanga Vuba" : "Fast Delivery",
      desc: language === "fr" ? "Nous garantissons la soumission dans les délais de toutes les déclarations" : language === "rw" ? "Turemeza gutanga mu gihe giteganyijwe" : "We guarantee timely submission of all declarations before deadlines",
    },
    {
      icon: Target,
      title: language === "fr" ? "Service Personnalisé" : language === "rw" ? "Serivisi Yihariye" : "Personalized Service",
      desc: language === "fr" ? "Chaque client reçoit une attention et un soutien dédiés" : language === "rw" ? "Buri mukiliya abona ubwitabire n'ubufasha bwihariye" : "Every client receives dedicated attention and personalized support",
    },
  ];

  const founderQuote = language === "fr"
    ? "Nous avons fondé Tax Care avec une mission simple : rendre la déclaration fiscale accessible à tous au Rwanda."
    : language === "rw"
    ? "Twashinze Tax Care dufite intego yoroshye: gutuma gutanga imisoro byoroshye ku banyarwanda bose."
    : "We founded Tax Care with one simple mission: to make tax declaration accessible to everyone in Rwanda.";

  return (
    <Layout>
      {/* Hero Section with Background Pattern */}
      <section className="relative section-padding gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-5 py-2 rounded-full mb-6"
          >
            <Users size={16} className="text-accent" />
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">{t.about.badge}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {t.about.desc}
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-4 text-center border-r border-border last:border-r-0 md:border-r"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Founder Quote */}
      <section className="section-padding bg-card overflow-hidden">
        <div className="container-narrow">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-accent/10 border border-accent/20 text-accent font-semibold uppercase tracking-widest text-xs px-5 py-2 rounded-full mb-4">
              {language === "fr" ? "Notre Histoire" : language === "rw" ? "Inkuru Yacu" : "Our Story"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.storyTitle}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT — story paragraphs with decorated styling */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-secondary rounded-2xl p-8 md:p-10 border border-border/50 flex flex-col justify-between"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-tl-2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-8 -left-8 w-24 h-24 gradient-gold opacity-20 rounded-full blur-xl" />
              </div>

              <div className="space-y-5 relative z-10">
                {[t.about.storyP1, t.about.storyP2, t.about.storyP3, t.about.storyP4].map((p, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{p}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent strip */}
              <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-3 relative z-10">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm font-medium text-accent">
                  {language === "fr" ? "Enregistré & Certifié au Rwanda" : language === "rw" ? "Byanditswe & Byemejwe mu Rwanda" : "Registered & Certified in Rwanda"}
                </span>
              </div>
            </motion.div>

            {/* RIGHT — founder card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex flex-col gap-6"
            >
              {/* Founder photo + quote */}
              <div className="relative gradient-navy rounded-2xl overflow-hidden flex-1 p-8 md:p-10 flex flex-col justify-between text-primary-foreground">
                {/* Large decorative quote */}
                <Quote size={80} className="text-accent/10 absolute -top-2 -right-2 rotate-180" />

                <div className="relative z-10">
                  <p className="font-display text-lg md:text-xl italic leading-relaxed text-primary-foreground/90 mb-8">
                    "{founderQuote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent shadow-lg shadow-accent/20">
                      <img src={stevenPhoto} alt="Steven M." className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg">Steven M.</div>
                      <div className="text-accent text-sm font-medium">{t.team.members[0].role}</div>
                      <div className="text-primary-foreground/40 text-xs mt-0.5">Tax Care Hub — Kigali, Rwanda</div>
                    </div>
                  </div>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
              </div>

              {/* Mini achievement badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: language === "fr" ? "Clients" : language === "rw" ? "Abakiliya" : "Clients Served" },
                  { value: "98%", label: language === "fr" ? "Satisfaction" : language === "rw" ? "Ibyishimo" : "Satisfaction Rate" },
                  { value: "4+", label: language === "fr" ? "Ans d'Exp." : language === "rw" ? "Imyaka" : "Years of Exp." },
                  { value: "RRA", label: language === "fr" ? "Partenaire Certifié" : language === "rw" ? "Wanditswe" : "Certified Partner" },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-secondary border border-border/50 hover:border-accent/30 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="font-display text-2xl font-bold text-accent">{badge.value}</div>
                    <div className="text-muted-foreground text-xs mt-1">{badge.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
              {language === "fr" ? "Pourquoi Nous Choisir" : language === "rw" ? "Kuki Wahitamo Twe" : "Why Choose Us"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              {language === "fr" ? "Ce Qui Nous Distingue" : language === "rw" ? "Ibitugira Abatandukanye" : "What Sets Us Apart"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">{t.about.journeyBadge}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.journeyTitle}</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {t.about.milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-gold flex items-center justify-center z-10 shadow-lg">
                    <span className="text-primary font-bold text-xs">{m.year.slice(-2)}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="ml-14 md:ml-0 md:w-1/2 bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="text-accent font-bold text-sm">{m.year}</span>
                    <h3 className="font-display text-lg font-semibold mt-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{m.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">{t.about.valuesBadge}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.valuesTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl hover:bg-primary-foreground/10 transition-all duration-500"
                >
                  <div className="w-14 h-14 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              {language === "fr" ? "Prêt à Commencer?" : language === "rw" ? "Witeguye Gutangira?" : "Ready to Get Started?"}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              {language === "fr"
                ? "Laissez-nous gérer vos déclarations fiscales pendant que vous vous concentrez sur ce qui compte."
                : language === "rw"
                ? "Tureke dufashe mu gutanga imisoro yawe mugihe ureba ibindi bikureba."
                : "Let us handle your tax declarations while you focus on what matters most to you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-gold text-primary font-semibold hover:opacity-90">
                <Link to="/services">
                  {language === "fr" ? "Nos Services" : language === "rw" ? "Serivisi Zacu" : "Our Services"}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {language === "fr" ? "Contactez-Nous" : language === "rw" ? "Twandikire" : "Contact Us"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
