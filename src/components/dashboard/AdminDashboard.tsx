import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, FileText, Users, Clock, CheckCircle, XCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import taxcareLogo from "@/assets/taxcare-logo.jpeg";

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [applications, setApplications] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const { toast } = useToast();

  const fetchData = async () => {
    const [{ data: apps }, { data: profiles }] = await Promise.all([
      supabase.from("applications").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
    ]);
    setApplications(apps || []);
    setUsers(profiles || []);
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("applications").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Status Updated" });
      fetchData();
    }
  };

  const statusConfig: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    approved: "bg-green-500/20 text-green-400 border-green-500/30",
    rejected: "bg-red-500/20 text-red-400 border-red-500/30",
    processing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-border/10 px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={taxcareLogo} alt="Tax Care" className="h-12 w-auto" />
            <Badge variant="outline" className="border-accent/50 text-accent text-xs">
              <Shield size={12} className="mr-1" /> Admin
            </Badge>
          </Link>
          <div className="flex items-center gap-4">
            <p className="text-primary-foreground text-sm font-medium hidden sm:block">{user?.email}</p>
            <Button variant="outline" size="sm" onClick={signOut} className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <LogOut size={16} className="mr-2" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-sm mb-8">Manage applications and users</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Applications", value: applications.length, icon: FileText },
              { label: "Pending", value: applications.filter(a => a.status === "pending").length, icon: Clock },
              { label: "Approved", value: applications.filter(a => a.status === "approved").length, icon: CheckCircle },
              { label: "Total Users", value: users.length, icon: Users },
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

          {/* Applications */}
          <h2 className="font-display text-xl font-bold mb-4">All Applications</h2>
          {applications.length === 0 ? (
            <Card className="p-8 text-center border-dashed">
              <FileText size={40} className="mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground">No applications yet.</p>
            </Card>
          ) : (
            <div className="space-y-3 mb-10">
              {applications.map((app) => (
                <Card key={app.id} className="p-4 border-border/50">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="font-medium">{app.first_name} {app.last_name}</p>
                      <p className="text-xs text-muted-foreground">{app.email} • {app.phone}</p>
                      <p className="text-xs text-muted-foreground mt-1">Service: {app.service_type} • {new Date(app.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={statusConfig[app.status] || statusConfig.pending}>
                        {app.status}
                      </Badge>
                      <Select value={app.status} onValueChange={(val) => updateStatus(app.id, val)}>
                        <SelectTrigger className="w-[130px] h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Users */}
          <h2 className="font-display text-xl font-bold mb-4">Registered Users</h2>
          <div className="space-y-2">
            {users.map((u) => (
              <Card key={u.id} className="p-3 border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{u.full_name || "—"}</p>
                    <p className="text-xs text-muted-foreground">{u.email}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{new Date(u.created_at).toLocaleDateString()}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;
