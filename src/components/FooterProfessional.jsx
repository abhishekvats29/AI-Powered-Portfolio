import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show button only when scrolling up and scrolled down past 300px
    if (currentScrollY < lastScrollY && currentScrollY > 300) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }

    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const techIcons = [
    SiReact,
    SiPython,
    SiTailwindcss,
    SiJavascript,
    SiFlask,
    SiDocker,
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1a2d] to-[#0c1523] py-16 px-4 border-t border-white/20 overflow-hidden">

      {/* Bottom Animated Glowing Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Thin White Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />

      {/* Glass Card Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
          Crafted with passion, discipline, and curiosity — Abhishek Vats
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6 text-2xl mb-6">
          <motion.a
            href="https://github.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-[#0A66C2] hover:text-white transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://leetcode.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-orange-400 hover:text-white transition"
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-green-400 hover:text-white transition"
          >
            <FaHackerrank />
          </motion.a>
          <motion.a
            href="mailto:abhishekvats4567@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-red-400 hover:text-white transition flex items-center gap-2 text-sm md:text-base"
          >
            <FaEnvelope />
            <span className="text-white">abhishekvats4567@gmail.com</span>
          </motion.a>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} — Designed & Developed by Abhishek Vats. All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button (only when scrolling up) */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white text-xl p-3 rounded-full hover:bg-white hover:text-blue-600 transition shadow-lg"
        >
          ⬆️
        </button>
      )}
    </footer>
  );
}
