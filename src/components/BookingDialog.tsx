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

const BookingDialog = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Try to save to database if user is logged in
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { error } = await supabase.from("applications").insert({
        user_id: user.id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service_type: service || "Tax Declaration",
      });
      if (error) {
        console.error("DB error:", error);
      }
    }

    // Always send via email
    const subject = encodeURIComponent(`New Service Booking from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || "Tax Declaration"}`
    );
    window.open(`mailto:akizeisrael123@gmail.com?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
    setLoading(false);
    toast({ title: "Application Submitted!", description: "We'll review your documents and get back to you." });
    
    setTimeout(() => {
      setSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setService("");
    }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book Our Service</DialogTitle>
          <p className="text-muted-foreground text-sm">
            Upload your documents and we'll handle your tax declaration.
          </p>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto pr-4" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {submitted ? (
            <div className="flex flex-col items-center py-8 gap-3">
              <CheckCircle size={48} className="text-accent" />
              <p className="font-display text-lg font-semibold">Application Submitted!</p>
              <p className="text-muted-foreground text-sm text-center">
                We'll review your documents and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pb-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="book-fname">First Name</Label>
                  <Input id="book-fname" placeholder="John" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="book-lname">Last Name</Label>
                  <Input id="book-lname" placeholder="Doe" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div>
                <Label htmlFor="book-email">Email</Label>
                <Input id="book-email" type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="book-phone">Phone Number</Label>
                <Input id="book-phone" type="tel" placeholder="+250 7XX XXX XXX" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="book-service">Service Needed</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tax Declaration">Tax Declaration</SelectItem>
                    <SelectItem value="Tax Consultation">Tax Consultation</SelectItem>
                    <SelectItem value="Document Filing">Document Filing</SelectItem>
                    <SelectItem value="Compliance Review">Compliance Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>National ID Card</Label>
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-accent transition-colors">
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Click to upload</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </label>
              </div>
              <div>
                <Label>Proof of Payment</Label>
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-accent transition-colors">
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Click to upload</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </label>
              </div>
              <Button type="submit" disabled={loading} className="w-full gradient-gold text-primary font-semibold hover:opacity-90">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
