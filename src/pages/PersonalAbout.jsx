import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-[#1a1a1a] py-10 px-4 flex items-center overflow-hidden">


      {/* Top Segmented Glowing Line */}
      <div className="absolute top-0 left-0 w-full h-1 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-segment z-10" 
           style={{
             background: 'linear-gradient(to right, #f708b3ff 0%, #f906d4ff 33%, #ef4444 33%, #ef4444 66%, #fdf403ff 66%, #fbe305ff 100%)',
             backgroundSize: '300% 100%'
           }}
      ></div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes glowSegmentMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-glow-segment {
          animation: glowSegmentMove 4s linear infinite;
        }
      `}</style>

      {/* Bottom Animated Glowing Line - Pink Glass Neon */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] 
        bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 
        shadow-[0_0_10px_#f472b6,0_0_20px_#ec4899,0_0_30px_#db2777] 
        rounded-full blur-[1px] animate-[flowing_3s_linear_infinite]">
      </div>


      {/* Animated Floating Emojis in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
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
              duration: 4 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            {i % 2 === 0 ? "❤️" : "🌹"}
          </motion.div>
        ))}
      </div>

      {/* Glass Card Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 tracking-wide">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white">Abhishek Vats</span>, a creatively driven individual who
              finds meaning in experiences, storytelling, and personal growth.
            </p>
            <p>
              My life is deeply inspired by art, expression, Bollywood, and human connections. Whether it’s capturing a
              moment or sketching an emotion — I see the world as a canvas.
            </p>
            <p>
              In my free time, I explore creativity through music, travel, and visual expression that speaks beyond
              words.
            </p>

            {/* Instagram Button */}
            <a
              href="https://instagram.com/abhishekvats29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2.5 rounded-full transition mt-2"
            >
              <FaInstagram size={18} />
              Connect Me
            </a>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img
              src="/images/vats4.jpeg"
              alt="Abhishek Vats"
              className="w-40 sm:w-48 md:w-52 rounded-xl border-4 border-white/20 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>




  );
};

export default About;
