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

  const codingLanguages = ["Java", "C++", "JavaScript", "Python", "SQL"];
  const email = "📩 abhishekvats4567@gmail.com";

  const socials = [
    { href: "https://www.linkedin.com/in/abhishekvats29", icon: <FaLinkedin />, color: "#0A66C2" },
    { href: "https://github.com/abhishekvats29", icon: <FaGithub />, color: "#FFFFFF" },
    { href: "https://twitter.com/abhishekvats29", icon: <FaHackerrank />, color: "#2EC866" },
    { href: "https://leetcode.com/abhishekvats29", icon: <SiLeetcode />, color: "#F79F1F" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0c1530]/80 to-[#0a1a3c]/90 py-16 px-4 border-t border-white/20 overflow-hidden backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)] rounded-t-3xl">

      {/* 3D Blue Glow Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layered bottom neon glow */}
        <div className="absolute bottom-0 left-0 w-full h-3 pointer-events-none z-0">
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-full blur-2xl opacity-60"
            animate={{ scaleX: [0.9, 1.1, 0.95], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-full blur-3xl opacity-40"
            animate={{ scaleX: [1, 0.95, 1.05], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-1/3 h-full bg-white/20 blur-lg rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
        </div>

        {/* Floating tech icons */}
        {techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-3xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 + Math.random() * 3, ease: "easeInOut", delay: Math.random() }}
          >
            <Icon />
          </motion.div>
        ))}

        {/* Floating coding languages */}
        {codingLanguages.map((lang, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-base font-semibold"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 7 + Math.random() * 3, ease: "easeInOut", delay: Math.random() }}
          >
            {lang}
          </motion.div>
        ))}
      </div>

      {/* Thin top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
          Crafted with passion, discipline, and curiosity — Abhishek Vats
        </h3>

        {/* Social Icons + Email */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-[${s.color}] text-2xl transition duration-300 ease-in-out`}
              style={{ color: s.color }}
            >
              {s.icon}
            </motion.a>
          ))}

          {/* Full email always visible */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center w-auto px-4 h-12 rounded-full border border-white/20 text-white text-sm sm:text-base transition duration-300 ease-in-out hover:text-[#FF4C4C] hover:border-[#FF4C4C]"
          >
            {email}
          </motion.a>
        </div>

        {/* Footer Text */}
        <p className="text-white/70 text-base sm:text-lg mt-2">
          © {new Date().getFullYear()} — Designed & Developed by Abhishek Vats. All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-50 bg-blue-600 text-white text-xl p-3 rounded-full hover:bg-white hover:text-blue-600 transition shadow-lg"
        >
          ⬆️
        </button>
      )}

      {/* Bottom Animated Glowing Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>
    </footer>
  );
}
