import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const GlassCard = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      className="fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden sm:flex fixed top-20 right-6 z-50 group">
      <button
        onClick={() => navigate('/')}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.3),0_4px_20px_rgba(255,255,255,0.1)]"
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
  );
};

const ProfileImage = () => (
  <>
    <style>
      {`
        /* Gradient shimmer animation */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Breathing glow effect */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 25px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3), inset 0 0 10px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 40px rgba(59,130,246,0.9), 0 0 80px rgba(59,130,246,0.4), inset 0 0 15px rgba(255,255,255,0.5); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 6s ease-in-out infinite;
        }
      `}
    </style>

    <div className="flex justify-center w-full -mt-20 sm:absolute sm:left-1/2 sm:-top-32 sm:transform sm:-translate-x-1/2">
      {/* Soft glowing + inner glass aura */}
      <div
        className="relative rounded-3xl sm:rounded-full
                   animate-gradient animate-pulse-glow
                   bg-gradient-to-tr from-sky-400/40 via-blue-500/30 to-indigo-600/40
                   backdrop-blur-2xl
                   p-[2px] sm:p-[3px]
        "
      >
        <img
          src="/images/av2.png"
          alt="Profile"
          className="
            w-56 h-64                /* Mobile */
            rounded-2xl              
            sm:w-60 sm:h-60          /* Desktop */
            sm:rounded-full          
            lg:w-80 lg:h-80          /* Large */
            border border-white/20 shadow-xl object-cover
          "
        />
      </div>
    </div>
  </>
);






const HeroContent = () => (
  <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-10 w-full max-w-3xl shadow-xl text-center mt-2 sm:mt-28 mx-auto"
>

    <ProfileImage />
    <div className="mt-10 sm:mt-20 space-y-4 px-2">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white">
        Abhishek Vats
      </h1>
      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
        Full Stack Developer | Passionate about building efficient, scalable, and elegant digital solutions that make a real impact.
      </p>
      <a
        href="https://drive.google.com/file/d/1zwFRaAQrKiFUgj9S9_eiNyV1lxWJzQH0/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
      >
        📄 View CV
      </a>
    </div>
  </div>
);

const Hero = () => {
  const [showGlassCard, setShowGlassCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowGlassCard(window.scrollY < 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-[url('/images/bg7.avif')] bg-cover bg-center flex flex-col items-center justify-center px-4 pt-32 sm:pt-36">
      <GlassCard visible={showGlassCard} />
      <BackButton />
      <HeroContent />
    </section>
  );
};

export default Hero;