import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WHATSAPP_NUMBER = "250780521244";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Tax%20Care%2C%20I%20need%20assistance.`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <button
        onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-3 py-3 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
        <span className="text-sm font-medium whitespace-nowrap">Chat with us</span>
        <MessageCircle size={24} fill="white" strokeWidth={0} />
      </button>
    </div>
  );
};

export default Layout;
