import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import BookingDialog from "@/components/BookingDialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const countries = ["Rwanda", "Burundi", "Uganda", "Kenya", "Tanzania", "DR Congo", "Other"];

const contactItems = [
  { icon: MapPin, text: "KN 5 Rd, Kigali City Center, Kigali, Rwanda" },
  { icon: Phone, text: "+250 781 093 714", href: "tel:+250781093714" },
  { icon: Mail, text: "akizeisrael123@gmail.com", href: "mailto:akizeisrael123@gmail.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const whatsappNumber = "250781093714";
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert({
      full_name: `${form.firstName} ${form.lastName}`, email: form.email,
      phone: form.phone || null, country: form.country || null, message: form.message, source: "contact",
    });
    if (error) console.error("DB error:", error);

    await supabase.functions.invoke("send-notification-email", {
      body: {
        type: "contact",
        data: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          message: form.message,
        },
      },
    });

    setLoading(false);
    setSubmitted(true);
    toast({ title: t.contact.toastTitle, description: t.contact.toastDesc });
    setTimeout(() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", country: "", message: "" }); }, 4000);
  };

  return (
    <Layout>
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.contact.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-xl mx-auto">{t.contact.desc}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">{t.contact.infoTitle}</h3>
                <ul className="space-y-4 text-sm">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <Icon size={18} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground hover:text-accent transition-colors">{item.text}</span>
                      </>
                    );
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        {item.href ? (
                          <a href={item.href} className="flex items-start gap-3 hover:text-accent transition-colors">{content}</a>
                        ) : (
                          content
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-display font-semibold">{t.contact.quickActions}</h4>
                <motion.a
                  whileHover={{ scale: 1.03, x: 4 }}
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Tax%20Care!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-secondary rounded-lg p-3 hover:bg-accent/10 transition-colors"
                >
                  <MessageCircle size={18} className="text-accent" /><span>{t.contact.chatWhatsApp}</span>
                </motion.a>
                <BookingDialog>
                  <motion.button
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="flex items-center gap-2 text-sm bg-secondary rounded-lg p-3 hover:bg-accent/10 transition-colors w-full text-left"
                  >
                    <Send size={18} className="text-accent" /><span>{t.contact.bookService}</span>
                  </motion.button>
                </BookingDialog>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary rounded-lg p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4"><Send size={28} className="text-primary" /></div>
                  <h3 className="font-display text-2xl font-bold mb-2">{t.contact.sentTitle}</h3>
                  <p className="text-muted-foreground">{t.contact.sentDesc}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>{t.contact.firstName}</Label><Input required placeholder="John" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} /></div>
                    <div><Label>{t.contact.lastName}</Label><Input required placeholder="Doe" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} /></div>
                  </div>
                  <div><Label>{t.contact.email}</Label><Input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>{t.contact.phone}</Label><Input type="tel" placeholder="+250 7XX XXX XXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                    <div>
                      <Label>{t.contact.country}</Label>
                      <Select onValueChange={(v) => setForm({ ...form, country: v })}>
                        <SelectTrigger><SelectValue placeholder={t.contact.selectCountry} /></SelectTrigger>
                        <SelectContent>{countries.map((c) => <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div><Label>{t.contact.message}</Label><Textarea rows={4} placeholder={t.contact.messagePlaceholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
                  <Button type="submit" disabled={loading} className="w-full gradient-gold text-primary font-semibold hover:opacity-90">
                    <Send size={16} className="mr-2" /> {loading ? t.contact.sending : t.contact.send}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
