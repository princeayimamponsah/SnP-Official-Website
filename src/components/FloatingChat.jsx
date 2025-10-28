import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message sent: ${message}`); // You can replace this with backend or WhatsApp integration later
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 💬 Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {isOpen ? <FaTimes size={22} /> : <FaComments size={22} />}
      </motion.button>

      {/* 💭 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-72 sm:w-80 rounded-2xl shadow-2xl mt-3 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-semibold text-sm">Chat with SnP Support</h3>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages area */}
            <div className="p-4 h-56 overflow-y-auto flex flex-col gap-2 text-sm">
              <div className="self-start bg-gray-200 text-gray-800 px-3 py-2 rounded-lg max-w-[80%]">
                Hi there 👋 <br /> How can we help you today?
              </div>
            </div>

            {/* Input */}
            <div className="border-t flex items-center p-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 outline-none px-3 py-2 text-sm border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-primary text-white p-2 rounded-lg hover:bg-black transition"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingChat;
