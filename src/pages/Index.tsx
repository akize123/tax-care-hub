import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, AlertTriangle, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ObjectivesSection from "@/components/home/ObjectivesSection";
import MissionSection from "@/components/home/MissionSection";
import PartnersSection from "@/components/home/PartnersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [alertVisible, setAlertVisible] = useState(true);
  const { t } = useLanguage();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !comment) return;
    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert({
      full_name: fullName, email, message: comment, source: "homepage",
    });
    if (error) console.error("DB error:", error);

    const subject = encodeURIComponent(`Message from ${fullName}`);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${comment}`);
    window.open(`mailto:akizeisrael123@gmail.com?subject=${subject}&body=${body}`, "_blank");

    setLoading(false);
    toast({ title: t.stayUpdated.successTitle, description: t.stayUpdated.successDesc });
    setFullName(""); setEmail(""); setComment("");
  };

  return (
    <Layout>
      {alertVisible && (
        <div className="relative overflow-hidden animate-shine border-b border-accent/30" style={{ background: 'linear-gradient(90deg, hsl(var(--navy)) 0%, hsl(var(--gold)) 30%, hsl(var(--navy)) 50%, hsl(var(--gold)) 70%, hsl(var(--navy)) 100%)', backgroundSize: '200% 100%' }}>
          <div className="py-3 flex items-center justify-center relative">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-3">
              <AlertTriangle size={18} className="text-accent shrink-0" />
              <p className="text-sm font-semibold text-primary-foreground">{t.alert.text}</p>
            </div>
            <button onClick={() => setAlertVisible(false)} className="absolute right-4 text-primary-foreground/60 hover:text-primary-foreground text-lg font-bold shrink-0 z-10 bg-primary/50 rounded-full w-6 h-6 flex items-center justify-center">✕</button>
          </div>
        </div>
      )}
      <HeroSection />
      <StatsSection />
      <ObjectivesSection />
      <MissionSection />
      <PartnersSection />
      <TestimonialsSection />
      <TeamSection />

      {/* Map */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} className="text-accent" />
              <p className="text-accent font-semibold uppercase tracking-widest text-sm">{t.location.badge}</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.location.title}</h2>
          </motion.div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe title="Tax Care Services Center Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.33955987498!2d29.82629!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Contact / Stay Updated */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-1.5 rounded-full mb-4">
                <Mail size={16} className="text-accent" />
                <span className="text-accent font-semibold uppercase tracking-widest text-xs">{t.stayUpdated.badge}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t.stayUpdated.title} <span className="text-gradient-gold">{t.stayUpdated.titleHighlight}</span>
              </h2>
              <div className="w-16 h-1 gradient-gold mb-5 rounded-full" />
              <p className="text-primary-foreground/60 leading-relaxed mb-4">{t.stayUpdated.desc}</p>
              <div className="flex items-center gap-3 text-primary-foreground/50 text-sm">
                <Send size={14} className="text-accent" /><span>akizeisrael123@gmail.com</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form className="space-y-4 bg-primary-foreground/5 p-6 rounded-xl border border-primary-foreground/10" onSubmit={handleSubscribe}>
                <div>
                  <label className="text-sm font-medium text-primary-foreground/70 mb-1.5 block">{t.stayUpdated.fullName}</label>
                  <Input type="text" placeholder={t.stayUpdated.fullNamePlaceholder} value={fullName} onChange={(e) => setFullName(e.target.value)} required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary-foreground/70 mb-1.5 block">{t.stayUpdated.email}</label>
                  <Input type="email" placeholder={t.stayUpdated.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary-foreground/70 mb-1.5 block">{t.stayUpdated.message}</label>
                  <Textarea placeholder={t.stayUpdated.messagePlaceholder} value={comment} onChange={(e) => setComment(e.target.value)} required rows={4} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none" />
                </div>
                <Button type="submit" disabled={loading} className="w-full gradient-gold text-primary font-semibold py-5 hover:opacity-90">
                  <Send size={16} className="mr-2" />
                  {loading ? t.stayUpdated.sending : t.stayUpdated.send}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
