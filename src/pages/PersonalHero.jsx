import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PersonalHero = () => {
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 1.5 },
            color: { value: '#ffffff' },
            move: { enable: true, speed: 0.15 },
            opacity: { value: 0.5 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/vats1.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Back Button (Fixed Right Side) */}
      <div className="fixed top-20 right-6 z-50 group">
        <button
          onClick={() => navigate('/')}
          className="w-11 h-11 flex items-center justify-center rounded-full
          bg-pink-600 border border-white
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.4)]
          hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft className="text-white w-5 h-5" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-white/10 text-white text-xs px-3 py-1 rounded-md border border-white/30 backdrop-blur-sm text-center leading-tight max-w-[130px] shadow">
            Go Back Home
          </div>
        </div>
      </div>

      {/* Signature Text */}
      <div className="absolute bottom-5 left-6 z-20 text-white text-sm sm:text-base md:text-xl font-[cursive] italic tracking-widest opacity-80">
        — Abhishek Vats
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
          Abhishek Vats
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-4 font-medium max-w-2xl mx-auto drop-shadow-md">
          <Typewriter
            words={[
              'Living with Passion, Creating with Purpose',
              'Dreamer. Coder. Cinematic Soul.',
              'Inspired by Bollywood, Powered by Logic',
              'Turning Dreams into Digital Reality',
              'Personal Stories Told through Design',
              'Cinema in Soul, Software in Mind',
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2200}
          />
        </p>
      </motion.div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
    </section>
  );
};

export default PersonalHero;
