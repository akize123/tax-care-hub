import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Help = () => {
  const whatsappNumber = "250788000000";
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.help.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-4">{t.help.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-xl mx-auto">{t.help.desc}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {t.help.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <AccordionItem value={`faq-${i}`} className="bg-secondary rounded-lg border-none px-6">
                  <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MessageCircle size={48} className="mx-auto text-accent mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3">{t.help.stillQuestions}</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">{t.help.stillQuestionsDesc}</p>
            <a href={`https://wa.me/${whatsappNumber}?text=Hello%20Tax%20Care%2C%20I%20need%20help%20with%20my%20tax%20declaration.`} target="_blank" rel="noopener noreferrer">
              <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                <MessageCircle size={18} className="mr-2" />{t.help.chatWhatsApp}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
