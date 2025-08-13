import React, { useState, useEffect } from "react";
import { FaUser, FaBriefcase, FaWhatsapp, FaHome, FaEnvelope, FaRobot } from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import ContactModal from "../components/ContactModal";
import ChatbotLauncher from "../components/professionalchatbot/ChatbotLauncher";
import PersonalAssistant from "../pages/PersonalBot/PersonalAssistant";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showCineBot, setShowCineBot] = useState(false);
  const [showProBot, setShowProBot] = useState(false);

  const openWhatsApp = () => {
    window.open("https://wa.me/9508721988", "_blank");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative text-white px-4 sm:px-6 bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('/images/bg7.avif')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-6xl space-y-8 py-12">
        {/* Header Text */}
        <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-white relative mb-2 overflow-hidden">
          WELCOME
          <span className="absolute inset-0 shimmer-glow-blue" />
        </h1>

        <p className="text-center text-white/90 text-sm sm:text-base mb-8">
          Abhishek's Digital Universe — Innovating with Code & Emotions
        </p>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.25} glareColor="#ffffff">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-blue-400/40 transition duration-300 ease-in-out">
              <div className="flex justify-center mb-3">
                <FaBriefcase className="text-blue-300 text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Tech Portfolio</h2>
              <p className="text-sm text-center text-white/90 mb-4">
                Dive into my projects, tech stack, and work experience.
              </p>
              <div className="text-center">
                <Link to="/professional" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm">
                  💼 Tech Portfolio
                </Link>
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.25} glareColor="#ffb6c1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-pink-400/40 transition duration-300 ease-in-out">
              <div className="flex justify-center mb-3">
                <FaUser className="text-pink-300 text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Life Beyond Code</h2>
              <p className="text-sm text-center text-white/90 mb-4">
                Explore my cinematic journey, artworks, emotions, and more.
              </p>
              <div className="text-center">
                <Link to="/personal" className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white text-sm">
                  🌹 Life Beyond Code
                </Link>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Mobile Chatbots */}
        <div className="block sm:hidden mt-6 w-full">
          {showCineBot && <PersonalAssistant />}
          {showProBot && <ChatbotLauncher />}
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <div className="flex justify-around items-center bg-black/60 backdrop-blur-md border-t border-white/10 px-2 py-2 text-white rounded-t-xl">
          {[
            { icon: <FaHome size={18} />, label: "Home", onClick: () => (window.location.href = "/") },
            { icon: <FaEnvelope size={18} />, label: "Contact", onClick: () => setShowModal(true) },
            { icon: <FaWhatsapp className="text-[#25D366]" size={18} />, label: "Chat", onClick: openWhatsApp },
            { icon: <MessageCircle size={18} />, label: "AI Bot", onClick: () => setShowCineBot(p => !p) },
            { icon: <FaRobot size={18} />, label: "Tech AI", onClick: () => setShowProBot(p => !p) },
          ].map((btn, i) => (
            <button key={i} onClick={btn.onClick} className="flex flex-col items-center justify-center w-16 h-16 text-xs px-2 py-1 rounded-xl bg-white/10 border border-white/10 shadow-md hover:bg-white/20 transition text-center">
              {btn.icon}
              <span className="mt-1">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      
      {/* Desktop Right Button Bar */}
<div className="hidden sm:flex fixed top-1/3 right-4 z-50 flex-col gap-3">
  {[
    { icon: <FaHome size={20} />, label: "Home", onClick: () => (window.location.href = "/"), color: "bg-blue-500" },
    { icon: <FaEnvelope size={20} />, label: "Contact", onClick: () => setShowModal(true), color: "bg-purple-500" },
    { icon: <FaWhatsapp size={20} />, label: "Chat", onClick: openWhatsApp, color: "bg-green-500" },
    { icon: <MessageCircle size={20} />, label: "AI Bot", onClick: () => setShowCineBot(p => !p), color: "bg-pink-500" },
    { icon: <FaRobot size={20} />, label: "Tech AI", onClick: () => setShowProBot(p => !p), color: "bg-blue-400" },
  ].map((btn, i) => (
    <button
      key={i}
      onClick={btn.onClick}
      className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-md hover:scale-110 transition-all duration-300 group relative overflow-hidden ${btn.color}`}
    >
      {btn.icon}
      <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 group-hover:left-12 transition-all duration-300 bg-black/70 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap shadow-lg">
        {btn.label}
      </span>
    </button>
  ))}
</div>


      {/* Desktop Chatbots */}
      <div className="hidden sm:block z-40">
        {showCineBot && <PersonalAssistant />}
        {showProBot && <ChatbotLauncher />}
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}

      <style>{`
        .shimmer-glow-blue::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(120deg, transparent, rgba(0, 128, 255, 0.5), transparent);
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
