import { useAuth } from "@/hooks/useAuth";
import CustomerDashboard from "@/components/dashboard/CustomerDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );
  }

  if (!user) return null;

  return role === "admin" ? <AdminDashboard /> : <CustomerDashboard />;
};

export default Dashboard;
