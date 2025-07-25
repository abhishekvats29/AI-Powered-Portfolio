import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FooterPersonal() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] py-16 px-4 border-t border-white/20 overflow-hidden">
      {/* Floating Hearts and Roses */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 5,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            {i % 2 === 0 ? "❤️" : "🌹"}
          </motion.div>
        ))}
      </div>

      {/* Thin White Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />

      {/* Glass Card Content */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-xl text-center">
        <h3 className="text-2xl md:text-3xl italic font-semibold text-red-400 drop-shadow-md mb-4">
          Made with all my ❤️ — Abhishek Vats
        </h3>

        {/* ❤️ 🌹 Static Center Icons */}
        <div className="flex justify-center items-center space-x-6 text-2xl mt-6 mb-4">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            🌹
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            ❤️
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            🌹
          </motion.div>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} My Cinematic Life. All love reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-pink-500 text-white text-xl p-3 rounded-full hover:bg-white hover:text-pink-600 transition shadow-lg"
        >
          <FaHeart />
        </button>
      )}
    </footer>
  );
}
