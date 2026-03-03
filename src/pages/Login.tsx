import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isForgotPassword) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Check your email", description: "We sent you a password reset link." }); setIsForgotPassword(false); }
    } else if (isSignup) {
      const { error } = await signUp(email, password, fullName);
      if (error) { toast({ title: "Sign Up Failed", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Account Created!", description: "You can now log in." }); setIsSignup(false); setPassword(""); }
    } else {
      const { error } = await signIn(email, password);
      if (error) { toast({ title: "Login Failed", description: error.message, variant: "destructive" }); }
      else { toast({ title: t.login.welcomeBack + "!" }); navigate("/dashboard"); }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-navy text-primary-foreground flex-col justify-center items-center p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md text-center">
          <div className="w-16 h-16 mx-auto rounded-full gradient-gold flex items-center justify-center mb-6">
            <span className="font-display font-bold text-primary text-2xl">TC</span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">{t.login.brandTitle}</h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">{t.login.brandDesc}</p>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-card">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">TC</span>
            </div>
            <span className="font-display font-bold text-foreground text-lg">Tax Care</span>
          </Link>

          <h2 className="font-display text-3xl font-bold mb-2">
            {isForgotPassword ? t.login.resetPassword : isSignup ? t.login.createAccount : t.login.welcomeBack}
          </h2>
          <p className="text-muted-foreground mb-8">
            {isForgotPassword ? t.login.resetDesc : isSignup ? t.login.signupDesc : t.login.loginDesc}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && !isForgotPassword && (
              <div>
                <Label>{t.login.fullName}</Label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="John Doe" className="pl-10" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
              </div>
            )}
            <div>
              <Label>{t.login.emailAddress}</Label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            {!isForgotPassword && (
              <div>
                <div className="flex items-center justify-between">
                  <Label>{t.login.password}</Label>
                  {!isSignup && (
                    <button type="button" onClick={() => setIsForgotPassword(true)} className="text-xs text-accent hover:underline">{t.login.forgotPassword}</button>
                  )}
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}
            <Button type="submit" disabled={loading} className="w-full gradient-gold text-primary font-semibold py-6 hover:opacity-90">
              {loading ? t.login.pleaseWait : isForgotPassword ? t.login.sendResetLink : isSignup ? t.login.signUp : t.login.logIn} {!loading && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isForgotPassword ? (
              <button onClick={() => setIsForgotPassword(false)} className="text-accent font-semibold hover:underline">{t.login.backToLogin}</button>
            ) : (
              <>
                {isSignup ? t.login.alreadyAccount : t.login.noAccount}{" "}
                <button onClick={() => setIsSignup(!isSignup)} className="text-accent font-semibold hover:underline">
                  {isSignup ? t.login.logIn : t.login.signUp}
                </button>
              </>
            )}
          </p>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">{t.login.backToHome}</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
