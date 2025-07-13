import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import ChatbotLauncher from "../components/professionalchatbot/ChatbotLauncher";
import PersonalAssistant from "../pages/PersonalBot/PersonalAssistant";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 sm:px-6 py-6 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/bg7.avif')" }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full max-w-5xl px-2 sm:px-4">
        {/* Personal Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 w-full md:w-1/2 hover:shadow-pink-400 hover:scale-105 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="flex justify-center mb-4">
            <FaUser className="text-pink-300 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Life Beyond Code</h2>
          <p className="text-sm text-center text-white/90 mb-4">
            Explore my cinematic journey, artworks, emotions, and more.
          </p>
          <div className="text-center">
            <Link
              to="/personal"
              className="px-5 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white"
            >
              🌹 Life Beyond Code
            </Link>
          </div>
        </motion.div>

        {/* Tech Portfolio Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 w-full md:w-1/2 hover:shadow-blue-400 hover:scale-105 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="flex justify-center mb-4">
            <FaBriefcase className="text-blue-300 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Tech Portfolio</h2>
          <p className="text-sm text-center text-white/90 mb-4">
            Dive into my projects, tech stack, and work experience.
          </p>
          <div className="text-center">
            <Link
              to="/professional"
              className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white"
            >
              💼 Tech Portfolio
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Chat Button with Tooltip */}
      <div className="fixed bottom-[260px] right-6 z-50 group">
        <button
          onClick={() => setShowModal(true)}
          className="p-4 rounded-full border border-blue-100 bg-white/10 backdrop-blur-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,255,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <FaWhatsapp className="text-white-300 text-2xl drop-shadow-[0_2px_8px_rgba(0,200,255,0.7)]" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-white/10 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-md border border-white/20 text-sm font-small">
            Chat on whatsapp
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}

      {/* Chatbots Behind Chat Button */}
      <div className="z-40">
        <PersonalAssistant />
      </div>
      <div className="z-30">
        <ChatbotLauncher />
      </div>
    </div>
  );
}
