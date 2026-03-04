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
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} fill="white" strokeWidth={0} />
      </a>
    </div>
  );
};

export default Layout;
