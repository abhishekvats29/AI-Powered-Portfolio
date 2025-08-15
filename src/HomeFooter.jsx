import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiReact, SiPython, SiTailwindcss, SiJavascript, SiFlask, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

export default function HomeFooter() {
  // Floating tech icons
  const techIcons = [SiReact, SiPython, SiTailwindcss, SiJavascript, SiFlask, SiDocker];

  // Coding languages displayed as text
  const codingLanguages = ["Java", "C++", "JavaScript", "Python", "SQL"];

  // Social links
  const socials = [
    { href: "https://www.linkedin.com/in/abhishekvats29", icon: <FaLinkedin />, hover: "hover:text-[#0A66C2] hover:border-[#0A66C2]" },
    { href: "https://github.com/abhishekvats29", icon: <FaGithub />, hover: "hover:text-white/80 hover:border-white/50" },
    { href: "https://twitter.com/abhishekvats29", icon: <FaTwitter />, hover: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]" },
    { href: "https://www.hackerrank.com/abhishekvats29", icon: <FaHackerrank />, hover: "hover:text-[#2EC866] hover:border-[#2EC866]" },
    { href: "https://leetcode.com/abhishekvats29", icon: <SiLeetcode />, hover: "hover:text-[#F79F1F] hover:border-[#F79F1F]" },
  ];

  const email = "📧 abhishekvats4567@gmail.com";

  return (
    <footer className="relative bg-gradient-to-b from-[#0c1530]/80 to-[#0a1a3c]/90 py-8 px-4 border-t border-white/20 overflow-hidden backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)] rounded-t-3xl">

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 + Math.random() * 3, ease: "easeInOut", delay: Math.random() }}
          >
            <Icon />
          </motion.div>
        ))}

        {/* Coding language text animation */}
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
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">

        {/* Social Icons + Email */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white text-2xl transition duration-300 ease-in-out ${s.hover}`}
            >
              {s.icon}
            </motion.a>
          ))}

          {/* Email inline */}
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
    </footer>
  );
}
