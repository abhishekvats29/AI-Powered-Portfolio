import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();
  const [showGlassCard, setShowGlassCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowGlassCard(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[url('/images/bg7.avif')] bg-cover bg-center flex flex-col items-center justify-center px-4 pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Glass Card fixed at top */}
      {showGlassCard && (
        <div
          className="fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md z-10"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Fixed Glassmorphic Back Button */}
      <div className="hidden sm:flex fixed top-20 right-6 z-50 group">
        <button
          onClick={() => navigate('/')}
          className="w-12 h-12 rounded-full flex items-center justify-center
                     bg-white/10 backdrop-blur-lg border border-white/40
                     hover:scale-105 active:scale-95 transition-all duration-300
                     shadow-[inset_0_0_10px_rgba(255,255,255,0.3),0_4px_20px_rgba(255,255,255,0.1)]"
          aria-label="Go Back to Home"
        >
          <FaArrowLeft className="text-white text-lg drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]" />
        </button>

        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 w-max max-w-[150px]">
          <div className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-lg border border-white/20 backdrop-blur-md">
            Go Back to Home
          </div>
        </div>
      </div>

      {/* Main Hero Card */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-5 sm:p-8 w-full max-w-3xl shadow-xl text-center mt-24 sm:mt-28 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image (Static) */}
        <div className="absolute -top-24 sm:-top-28 lg:-top-32 left-1/2 transform -translate-x-1/2">
          <img
            src="/images/av2.png"
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="mt-28 sm:mt-32 lg:mt-36 space-y-4 px-2">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Abhishek Vats
          </motion.h1>

          <motion.p
            className="text-white/80 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Full Stack Developer | Passionate about building efficient, scalable, and elegant digital
            solutions that make a real impact.
          </motion.p>

          <a
            href="https://drive.google.com/file/d/1zwFRaAQrKiFUgj9S9_eiNyV1lxWJzQH0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300 text-sm sm:text-base md:text-lg"
          >
            📄 View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
