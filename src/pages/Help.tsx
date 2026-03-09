import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

const Help = () => {
  const whatsappNumber = "250788000000";
  const phoneNumber = "+250780521244";
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchItems: SearchItem[] = useMemo(() => [
    { title: t.nav.home, description: t.hero.title1 + " " + t.hero.title2, path: "/", keywords: ["home", "tax", "declaration", "imisoro", "accueil"] },
    { title: t.nav.about, description: t.about?.title || "About Us", path: "/about", keywords: ["about", "story", "team", "mission", "propos"] },
    { title: t.nav.services, description: t.services?.title || "Our Services", path: "/services", keywords: ["services", "tax", "filing", "consultation", "bookkeeping", "serivisi"] },
    { title: t.nav.blogs, description: t.blogs?.title || "Blog", path: "/blogs", keywords: ["blog", "news", "articles", "updates", "amakuru"] },
    { title: t.nav.help, description: t.help?.title || "Help Center", path: "/help", keywords: ["help", "faq", "questions", "support", "ubufasha", "aide"] },
    { title: t.nav.contact, description: t.contact?.title || "Contact Us", path: "/contact", keywords: ["contact", "email", "phone", "message", "twandikire"] },
    { title: t.nav.login, description: t.login?.brandDesc || "Login", path: "/login", keywords: ["login", "account", "dashboard", "kwinjira", "connexion"] },
    ...t.help.faqs.map((faq, i) => ({
      title: faq.q,
      description: faq.a.slice(0, 100) + "...",
      path: `/help#faq-${i}`,
      keywords: faq.q.toLowerCase().split(" "),
    })),
  ], [t]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return searchItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    );
  }, [searchQuery, searchItems]);

  const handleNavigate = (path: string) => {
    setSearchQuery("");
    if (path.startsWith("/help#")) {
      const id = path.replace("/help#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(path);
  };

  return (
    <Layout>
      {/* Hero with Search */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.help.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-4">{t.help.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-xl mx-auto mb-8">{t.help.desc}</motion.p>

          {/* Global Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="flex items-center bg-card rounded-xl shadow-lg overflow-hidden border border-border/20">
              <Search size={20} className="text-muted-foreground ml-4 shrink-0" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.help.searchPlaceholder}
                className="border-0 shadow-none focus-visible:ring-0 text-base py-6 h-auto bg-transparent text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Search Results Dropdown */}
            {searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-xl border border-border/20 max-h-80 overflow-y-auto z-50"
              >
                {filteredResults.length === 0 ? (
                  <p className="text-center text-muted-foreground py-6 text-sm">No results found.</p>
                ) : (
                  filteredResults.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavigate(item.path)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-accent/10 transition-colors group border-b border-border/10 last:border-0"
                    >
                      <div>
                        <p className="font-semibold text-sm text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </button>
                  ))
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {t.help.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <AccordionItem id={`faq-${i}`} value={`faq-${i}`} className="bg-secondary rounded-lg border-none px-6 hover:shadow-lg transition-shadow duration-300">
                  <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact actions: WhatsApp + Phone Call */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl font-bold mb-3">{t.help.stillQuestions}</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">{t.help.stillQuestionsDesc}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp Button */}
              <a href={`https://wa.me/${whatsappNumber}?text=Hello%20Tax%20Care%2C%20I%20need%20help%20with%20my%20tax%20declaration.`} target="_blank" rel="noopener noreferrer">
                <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                  <MessageCircle size={18} className="mr-2" />{t.help.chatWhatsApp}
                </Button>
              </a>

              {/* Phone Call Button */}
              <a href={`tel:${phoneNumber}`}>
                <Button variant="outline" className="font-semibold px-8 py-6 text-base border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors">
                  <Phone size={18} className="mr-2" />{t.help.callUs}
                </Button>
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-4">{t.help.callDesc}</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
