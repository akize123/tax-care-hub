import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ObjectivesSection from "@/components/home/ObjectivesSection";
import MissionSection from "@/components/home/MissionSection";
import PartnersSection from "@/components/home/PartnersSection";
import TeamSection from "@/components/home/TeamSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ObjectivesSection />
      <MissionSection />
      <PartnersSection />
      <TeamSection />

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

      {/* Newsletter */}
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
