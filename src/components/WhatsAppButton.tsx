import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "250790123456"; // WhatsApp number
  const message = encodeURIComponent(
    "Hello Tax Care! I would like to inquire about your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap"
      >
        Chat with us!
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
