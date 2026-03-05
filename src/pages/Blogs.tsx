import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const blogPosts = [
  {
    id: 1, date: "Feb 15, 2025",
    titleKey: "RRA Announces New Tax Filing Deadline for 2025",
    summary: "The Rwanda Revenue Authority has extended the annual tax declaration deadline. Here's what you need to know.",
    previousPolicy: "Deadline was March 31st for all individual taxpayers.",
    updatedPolicy: "New deadline is April 30th, 2025, with a grace period for first-time filers.",
    comments: [
      { name: "Marie C.", text: "This is great news for small business owners!" },
      { name: "Patrick R.", text: "Finally, more time to gather documents." },
    ],
  },
  {
    id: 2, date: "Jan 28, 2025",
    titleKey: "Understanding VAT Changes for Small Businesses",
    summary: "Recent updates to VAT thresholds mean that more small businesses are now eligible for simplified filing.",
    previousPolicy: "VAT registration was required for businesses with annual turnover above RWF 20M.",
    updatedPolicy: "The threshold has been raised to RWF 30M, exempting more micro-enterprises.",
    comments: [{ name: "Jean B.", text: "Very helpful explanation. Thank you Tax Care!" }],
  },
  {
    id: 3, date: "Dec 10, 2024",
    titleKey: "How to Avoid Common Tax Declaration Mistakes",
    summary: "Our experts share the top 5 mistakes taxpayers make and how to avoid them for a smooth filing experience.",
    previousPolicy: null, updatedPolicy: null, comments: [],
  },
];

const Blogs = () => {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">{t.blogs.badge}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-4">{t.blogs.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/60 max-w-xl mx-auto">{t.blogs.desc}</motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl space-y-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-secondary rounded-lg p-8 hover:shadow-2xl hover:border-accent/20 border border-transparent transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3"><Calendar size={14} />{post.date}</div>
              <h2 className="font-display text-2xl font-bold mb-3">{post.titleKey}</h2>
              <p className="text-muted-foreground mb-4">{post.summary}</p>
              {post.previousPolicy && (
                <div className="space-y-3 mb-4">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4">
                    <p className="text-sm font-semibold text-destructive mb-1">{t.blogs.previousPolicy}</p>
                    <p className="text-sm text-foreground/80">{post.previousPolicy}</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded-md p-4">
                    <p className="text-sm font-semibold text-accent mb-1">{t.blogs.updatedPolicy}</p>
                    <p className="text-sm text-foreground/80">{post.updatedPolicy}</p>
                  </div>
                </div>
              )}
              {post.comments.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold flex items-center gap-1"><MessageCircle size={14} className="text-accent" />{t.blogs.comments}</p>
                  {post.comments.map((c, ci) => (
                    <div key={ci} className="bg-card rounded-md p-3 text-sm">
                      <span className="font-semibold">{c.name}</span> <span className="text-muted-foreground">— {c.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">{t.blogs.questionTitle}</h2>
            <p className="text-muted-foreground text-sm">{t.blogs.questionDesc}</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 bg-card rounded-lg p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder={t.blogs.yourName} value={commentForm.name} onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} />
              <Input type="email" placeholder={t.blogs.yourEmail} value={commentForm.email} onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })} />
            </div>
            <Textarea placeholder={t.blogs.yourComment} rows={4} value={commentForm.message} onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })} />
            <Button className="gradient-gold text-primary font-semibold w-full hover:opacity-90">
              <Send size={16} className="mr-2" /> {t.blogs.send}
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
