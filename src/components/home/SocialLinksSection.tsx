import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialLinksSection = () => {
  const { language } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:akizeisrael123@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
            {language === "fr" ? "Connectez-vous" : language === "rw" ? "Iyobora umwamiko" : "Connect With Us"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {language === "fr" ? "Suivez-nous" : language === "rw" ? "Reka uburyo" : "Follow Our"}
            <span className="text-gradient-gold">
              {language === "fr" ? " sur les Réseaux Sociaux" : language === "rw" ? " twatwikoze" : " Social Channels"}
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-foreground/60 transition-all hover:border-accent hover:bg-accent/5 ${social.color}`}
                aria-label={social.label}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-foreground/60">
            {language === "fr"
              ? "Rejoignez notre communauté et restez à jour avec nos dernières nouvelles et offres"
              : language === "rw"
              ? "Jya ku muryango wacu kandi ubikira ibihe gihembwe byacu"
              : "Join our community and stay updated with our latest news and offerings"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
