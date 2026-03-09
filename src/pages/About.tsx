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

  const teamMembers = [
    { name: "Steven M.", role: t.team.members[0].role, desc: t.team.members[0].desc, photo: stevenPhoto },
    { name: "Grace K.", role: t.team.members[1].role, desc: t.team.members[1].desc, photo: null },
    { name: "Jean P.", role: t.team.members[2].role, desc: t.team.members[2].desc, photo: null },
    { name: "Aline N.", role: t.team.members[3].role, desc: t.team.members[3].desc, photo: null },
  ];

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
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t.about.storyTitle}</h2>
              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[t.about.storyP1, t.about.storyP2, t.about.storyP3, t.about.storyP4].map((p, i) => (
                  <motion.p key={i} variants={fadeUp} custom={i}>{p}</motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Founder Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-secondary rounded-2xl p-8 relative">
                <Quote size={48} className="text-accent/20 absolute top-4 left-4" />
                <div className="relative z-10">
                  <p className="text-lg md:text-xl font-display italic leading-relaxed mb-6 pl-8">
                    "{founderQuote}"
                  </p>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
                      <img src={stevenPhoto} alt="Steven M." className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-display font-bold">Steven M.</div>
                      <div className="text-accent text-sm">{t.team.members[0].role}</div>
                    </div>
                  </div>
                </div>
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

      {/* Team Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              <Users size={16} className="text-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-xs">{t.team.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t.team.title1} <span className="text-gradient-gold">{t.team.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t.team.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full gradient-navy flex items-center justify-center">
                      <span className="text-primary-foreground font-display font-bold text-4xl opacity-80">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
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
