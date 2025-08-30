import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f1c2f] to-[#122c4a] py-20 px-4 sm:px-6 md:px-10 flex justify-center overflow-hidden">
      
      {/* Top Segmented Glowing Line */}
      <div className="absolute top-0 left-0 w-full h-1 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-segment z-10" 
           style={{
             background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 33%, #ef4444 33%, #ef4444 66%, #22c55e 66%, #22c55e 100%)',
             backgroundSize: '300% 100%'
           }}
      ></div>

      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-2xl relative z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-wide">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div className="space-y-5 text-white/90 text-base sm:text-lg leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white">Abhishek Vats</span>, a passionate Full Stack Developer who thrives on
              transforming ideas into scalable, impactful solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize in building seamless,
              high-performance applications.
            </p>
            <p>
              Technology excites me and I’m always in awe of the change it drives in the world.
            </p>
            <p>
              I blend technical expertise with creativity, focusing on clean design, usability, and purposeful innovation.
            </p>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/abhishekvats29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-full transition mt-4"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/profile2.jpeg"
              alt="Abhishek Vats"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] rounded-xl border-4 border-white/20 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default About;
