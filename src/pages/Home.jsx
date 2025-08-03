import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaWhatsapp, FaHome } from "react-icons/fa";
import { MessageCircle, Bot, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import ContactModal from "../components/ContactModal";
import ChatbotLauncher from "../components/professionalchatbot/ChatbotLauncher";
import PersonalAssistant from "../pages/PersonalBot/PersonalAssistant";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showCineBot, setShowCineBot] = useState(false);
  const [showProBot, setShowProBot] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openWhatsApp = () => {
    window.open("https://wa.me/9508721988", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowFooter(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-between relative text-white px-4 sm:px-6 pt-8 pb-36 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg7.avif')" }}
    >
      {/* Header Text */}
      <motion.h1
        className="text-center text-5xl sm:text-6xl font-extrabold text-white relative drop-shadow-xl shimmer"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WELCOME
        <span className="absolute inset-0 shimmer-glow" />
      </motion.h1>

      <motion.p
        className="text-center mt-2 text-white/90 text-sm sm:text-base"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Abhishek's Digital Universe — Innovating with Code & Emotions
      </motion.p>

      {/* Cards Section */}
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-4xl mx-auto mt-12 px-2 sm:px-4">
        {/* Tech Card First */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.25}
          glareColor="#ffffff"
          className="w-full"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                       shadow-xl p-6 md:p-8 gap-6 
                       transition duration-300 ease-in-out 
                       hover:shadow-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <div className="flex justify-center mb-3">
              <FaBriefcase className="text-blue-300 text-4xl" />
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Tech Portfolio</h2>
            <p className="text-sm text-center text-white/90 mb-4">
              Dive into my projects, tech stack, and work experience.
            </p>
            <div className="text-center">
              <Link
                to="/professional"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm"
              >
                💼 Tech Portfolio
              </Link>
            </div>
          </motion.div>
        </Tilt>

        {/* Life Beyond Code Card */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.25}
          glareColor="#ffb6c1"
          className="w-full"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                       shadow-xl p-6 md:p-8 gap-6 
                       transition duration-300 ease-in-out 
                       hover:shadow-pink-300/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="flex justify-center mb-3">
              <FaUser className="text-pink-300 text-4xl" />
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Life Beyond Code</h2>
            <p className="text-sm text-center text-white/90 mb-4">
              Explore my cinematic journey, artworks, emotions, and more.
            </p>
            <div className="text-center">
              <Link
                to="/personal"
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white text-sm"
              >
                🌹 Life Beyond Code
              </Link>
            </div>
          </motion.div>
        </Tilt>
      </div>

      {/* Mobile Chatbot Section */}
      <div className="block sm:hidden mt-10">
        {showCineBot && <PersonalAssistant />}
        {showProBot && <ChatbotLauncher />}
      </div>

      {/* Footer Action Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showFooter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-around items-center bg-black/60 backdrop-blur-md border-t border-white/10 px-2 py-2 text-white rounded-t-xl">
          {[
            { icon: <FaHome size={18} />, label: "Home", onClick: () => (window.location.href = "/") },
            { icon: <Mail size={18} />, label: "Contact", onClick: () => setShowModal(true) },
            { icon: <FaWhatsapp className="text-[#25D366]" size={18} />, label: "Chat", onClick: openWhatsApp },
            { icon: <MessageCircle size={18} />, label: "AI Bot", onClick: () => setShowCineBot(p => !p) },
            { icon: <Bot size={18} />, label: "Tech AI", onClick: () => setShowProBot(p => !p) },
          ].map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className="flex flex-col items-center justify-center w-16 h-16 text-xs px-2 py-1 rounded-xl bg-white/10 border border-white/10 shadow-md hover:bg-white/20 transition text-center"
            >
              {btn.icon}
              <span className="mt-1">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Chatbots */}
      <div className="hidden sm:block z-40">
        {showCineBot && <PersonalAssistant />}
        {showProBot && <ChatbotLauncher />}
      </div>

      {/* Contact Modal */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}

      {/* Shimmer effect style */}
      <style>{`
        .shimmer-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(120deg, transparent, rgba(59,130,246,0.5), transparent);
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
