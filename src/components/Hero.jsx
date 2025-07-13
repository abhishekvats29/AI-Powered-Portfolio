import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();
  const phoneNumber = "919508721988";
  const prefilledMessage = "Hi Abhishek, I visited your portfolio!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <section className="relative min-h-screen bg-[url('/images/bg7.avif')] bg-cover bg-center flex items-center justify-center px-4 pt-32 sm:pt-36">

      {/* Fixed Glassmorphic Back Button */}
      {/* Go Back Button with Enhanced Glassmorphic Feel and Tooltip */}
<div className="fixed top-20 right-6 z-50 group">
  <button
    onClick={() => navigate('/')}
    className="w-12 h-12 rounded-full flex items-center justify-center
               bg-white/10 backdrop-blur-lg border border-white/40
               hover:scale-105 active:scale-95 transition-all duration-300
               shadow-[inset_0_0_10px_rgba(255,255,255,0.3),0_4px_20px_rgba(255,255,255,0.1)]"
  >
    <FaArrowLeft className="text-white text-lg drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]" />
  </button>

  {/* Tooltip with Horizontal Layout and Max 2 Lines */}
  <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 w-max max-w-[150px]">
    <div className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-lg border border-white/20 backdrop-blur-md">
      Go Back to Home
    </div>
  </div>
</div>


      {/* Fixed WhatsApp Button Below Back Button */}
      <div className="fixed top-36 right-6 z-50 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/40 backdrop-blur-lg hover:scale-105 transition-all duration-300"
        >
          <FaWhatsapp className="text-green-300 text-xl" />
        </a>

        {/* Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20 text-sm font-medium backdrop-blur-md">
            Chat on WhatsApp
          </div>
        </div>
      </div>

      {/* Main Hero Card */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-10 w-full max-w-3xl shadow-xl text-center mt-14 sm:mt-10 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Profile Image */}
        <motion.div
          className="absolute -top-20 sm:-top-24 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="mt-24 sm:mt-28 space-y-4 px-2">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Abhishek Vats
          </motion.h1>

          <motion.p
            className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Full Stack Developer | Passionate about building efficient, scalable, and elegant digital
            solutions that make a real impact.
          </motion.p>

          <a
            href="https://drive.google.com/file/d/1vMG3rRvA8b94oKGy7fTP9SpVO6ysCQJz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            📄 View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
