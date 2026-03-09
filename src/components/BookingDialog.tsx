import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const BookingDialog = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase.from("applications").insert({
        user_id: user.id, first_name: firstName, last_name: lastName, email, phone,
        service_type: service || "Tax Declaration",
      });
      if (error) console.error("DB error:", error);
    }

    await supabase.functions.invoke("send-notification-email", {
      body: {
        type: "booking",
        data: {
          firstName,
          lastName,
          email,
          phone,
          service: service || "Tax Declaration",
        },
      },
    });

    setSubmitted(true);
    setLoading(false);
    toast({ title: t.booking.successTitle, description: t.booking.successDesc });
    setTimeout(() => { setSubmitted(false); setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setService(""); }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{t.booking.title}</DialogTitle>
          <p className="text-muted-foreground text-sm">{t.booking.desc}</p>
        </DialogHeader>
        <ScrollArea className="flex-1 overflow-y-auto pr-4" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {submitted ? (
            <div className="flex flex-col items-center py-8 gap-3">
              <CheckCircle size={48} className="text-accent" />
              <p className="font-display text-lg font-semibold">{t.booking.successTitle}</p>
              <p className="text-muted-foreground text-sm text-center">{t.booking.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pb-2">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>{t.booking.firstName}</Label><Input placeholder="John" required value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
                <div><Label>{t.booking.lastName}</Label><Input placeholder="Doe" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
              </div>
              <div><Label>{t.booking.email}</Label><Input type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              <div><Label>{t.booking.phone}</Label><Input type="tel" placeholder="+250 7XX XXX XXX" required value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
              <div>
                <Label>{t.booking.service}</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger><SelectValue placeholder={t.booking.selectService} /></SelectTrigger>
                  <SelectContent>
                    {t.booking.serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>{t.booking.nationalId}</Label>
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-accent transition-colors">
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{t.booking.clickUpload}</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </label>
              </div>
              <div>
                <Label>{t.booking.proofPayment}</Label>
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-accent transition-colors">
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{t.booking.clickUpload}</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </label>
              </div>
              <Button type="submit" disabled={loading} className="w-full gradient-gold text-primary font-semibold hover:opacity-90">
                {loading ? t.booking.submitting : t.booking.submit}
              </Button>
            </form>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
