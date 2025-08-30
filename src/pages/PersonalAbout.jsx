import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-[#1a1a1a] py-10 px-4 flex items-center overflow-hidden">


      

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
      {/* Bottom Separator Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>



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
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
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
              className="inline-flex items-center gap-2 
                        bg-red-600/20 border border-red-500/40 
                        backdrop-blur-md text-white font-medium px-6 py-3 rounded-full 
                        transition-all duration-500 transform hover:scale-105 active:scale-95 relative overflow-hidden"
              style={{
                background: "rgba(229,9,20,0.1)", // default light glass red
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #f58529, #dd2a7b, #515bd4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(229,9,20,0.1)";
              }}
            >
              <FaInstagram size={20} className="text-white transition-colors duration-500" />
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
