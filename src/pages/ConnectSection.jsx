import React from 'react';
import { FaInstagram, FaTwitter, FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ConnectSection = () => {
  return (
    <section className="relative py-20 px-4 border-t border-white/10 bg-black overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-lg opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              ease: 'easeInOut',
              delay: Math.random(),
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide capitalize mb-3">
            Let’s connect
          </h2>

          {/* Romantic Quote */}
          <p className="text-red-400 italic text-lg md:text-xl mb-4 font-light">
            "Every connection tells a story — let's make ours unforgettable. ❤️"
          </p>

          <p className="text-white/80 mb-10 text-base md:text-lg leading-relaxed">
            Whether it’s a creative collab, warm conversation, or just sharing good vibes — I’d love to hear from you. 🌸✨
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            <a href="https://instagram.com/abhishekvats29" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-[#E1306C] hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com/abhishekvats29" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-8 h-8 text-[#1DA1F2] hover:scale-110 transition" />
            </a>
            <a href="https://www.snapchat.com/add/vats-29" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost className="w-8 h-8 text-yellow-400 hover:scale-110 transition" />
            </a>
            <a
              href="https://wa.me/919508721988?text=Hi%20Abhishek%2C%20I%20visited%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-8 h-8 text-[#25D366] hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
