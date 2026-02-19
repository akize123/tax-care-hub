import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const faqs = [
  {
    q: "What is Tax Care Services Center?",
    a: "Tax Care is a professional service center dedicated to helping individuals and businesses in Rwanda with their tax declaration processes. We handle everything from document preparation to final submission with the Rwanda Revenue Authority (RRA).",
  },
  {
    q: "Who can use your services?",
    a: "Anyone who needs help with tax declaration — individuals, small business owners, freelancers, NGOs, and corporations. If you pay taxes in Rwanda, we can help.",
  },
  {
    q: "What documents do I need to provide?",
    a: "Typically, you'll need your National ID card, proof of income, proof of payment, and any relevant financial statements. We'll guide you on exactly what's needed based on your situation.",
  },
  {
    q: "How much does it cost?",
    a: "Our pricing depends on the type of service and complexity. We offer affordable packages for individuals and businesses. Contact us for a free quote.",
  },
  {
    q: "How long does the tax declaration process take?",
    a: "Most individual declarations are completed within 2–5 business days. Business filings may take slightly longer depending on complexity.",
  },
  {
    q: "Is my information safe with you?",
    a: "Absolutely. We follow strict data protection protocols. Your documents and personal information are encrypted and only accessible to authorized personnel.",
  },
  {
    q: "Can I track the status of my application?",
    a: "Yes! Once you submit your documents, you can log in to your customer dashboard to track your application status in real time.",
  },
  {
    q: "What if my declaration is rejected by RRA?",
    a: "We'll review the rejection reason, make the necessary corrections, and resubmit on your behalf at no additional cost.",
  },
  {
    q: "Do you offer tax consultation without filing?",
    a: "Yes, we offer standalone consultations where our experts answer your tax questions and help you plan ahead.",
  },
  {
    q: "How do I get started?",
    a: "Simply click the 'Book Now' button on our website, fill in your details, upload the required documents, and our team will take it from there!",
  },
];

const Help = () => {
  const whatsappNumber = "250788000000";

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
            Help Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/60 max-w-xl mx-auto"
          >
            Find answers to the most common questions our clients ask. Can't find what you need? Chat with us directly.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`faq-${i}`} className="bg-secondary rounded-lg border-none px-6">
                  <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Chat CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle size={48} className="mx-auto text-accent mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3">Still Have Questions?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Chat directly with our support team on WhatsApp. We're here to help you.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Tax%20Care%2C%20I%20need%20help%20with%20my%20tax%20declaration.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-gold text-primary font-semibold px-8 py-6 text-base hover:opacity-90">
                <MessageCircle size={18} className="mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
