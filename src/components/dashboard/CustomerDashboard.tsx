import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, FileText, Clock, CheckCircle, XCircle, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";
import BookingDialog from "@/components/BookingDialog";
import taxcareLogo from "@/assets/taxcare-logo.jpeg";

const statusConfig: Record<string, { color: string; icon: any }> = {
  pending: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: Clock },
  approved: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: CheckCircle },
  rejected: { color: "bg-red-500/20 text-red-400 border-red-500/30", icon: XCircle },
  processing: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: Clock },
};

const CustomerDashboard = () => {
  const { user, signOut } = useAuth();
  const [applications, setApplications] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [{ data: apps }, { data: prof }] = await Promise.all([
        supabase.from("applications").select("*").order("created_at", { ascending: false }),
        supabase.from("profiles").select("*").eq("user_id", user?.id).single(),
      ]);
      setApplications(apps || []);
      setProfile(prof);
    };
    if (user) fetchData();
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-border/10 px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={taxcareLogo} alt="Tax Care" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-primary-foreground text-sm font-medium">{profile?.full_name || user?.email}</p>
              <p className="text-primary-foreground/50 text-xs">Customer</p>
            </div>
            <Button variant="outline" size="sm" onClick={signOut} className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <LogOut size={16} className="mr-2" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold">My Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">Welcome back, {profile?.full_name || user?.email}</p>
            </div>
          </div>

          {/* Book Now Hero Card */}
          <Card className="mb-8 overflow-hidden border-accent/30 bg-gradient-to-r from-primary to-primary/80">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-4">
              <div className="text-center md:text-left">
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  Ready to File Your Taxes?
                </h2>
                <p className="text-primary-foreground/70 text-sm md:text-base max-w-md">
                  Book a tax declaration service now. Our experts will handle everything from start to finish.
                </p>
              </div>
              <BookingDialog>
                <Button className="gradient-gold text-primary font-bold px-8 py-6 text-base md:text-lg hover:opacity-90 shadow-lg whitespace-nowrap">
                  <Plus size={20} className="mr-2" /> Book Now
                </Button>
              </BookingDialog>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total", value: applications.length, icon: FileText },
              { label: "Pending", value: applications.filter(a => a.status === "pending").length, icon: Clock },
              { label: "Approved", value: applications.filter(a => a.status === "approved").length, icon: CheckCircle },
              { label: "Rejected", value: applications.filter(a => a.status === "rejected").length, icon: XCircle },
            ].map((stat) => (
              <Card key={stat.label} className="p-4 border-border/50">
                <div className="flex items-center gap-3">
                  <stat.icon size={20} className="text-accent" />
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Applications List */}
          <h2 className="font-display text-xl font-bold mb-4">My Applications</h2>
          {applications.length === 0 ? (
            <Card className="p-8 text-center border-dashed">
              <FileText size={40} className="mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground">No applications yet. Book a service to get started!</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {applications.map((app) => {
                const config = statusConfig[app.status] || statusConfig.pending;
                const Icon = config.icon;
                return (
                  <Card key={app.id} className="p-4 border-border/50">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-accent shrink-0" />
                        <div>
                          <p className="font-medium">{app.service_type}</p>
                          <p className="text-xs text-muted-foreground">
                            {app.first_name} {app.last_name} • {new Date(app.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className={config.color}>
                        {app.status}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
