import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  { icon: '📍', title: 'Born and Raised in India', description: 'My journey began in a culturally rich environment that shaped my values, traditions, and creativity.' },
  { icon: '🎬', title: 'Passion for Acting & Film', description: 'Bollywood has been a huge inspiration — I’ve always been captivated by expressive storytelling and cinematic magic.' },
  { icon: '🎨', title: 'Creating Art', description: "Whether it's sketching, painting, or designing — I love turning imagination into something visual and meaningful." },
  { icon: '🎧', title: 'Listening to Music', description: 'Music fuels my focus and emotions. From soulful melodies to energetic beats — it’s my everyday companion.' },
  { icon: '🌐', title: 'Tech Meets Creativity', description: 'A coder by profession, but also a creative soul who blends technology with expression and storytelling.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function PersonalTimeline() {
  return (
    <section className="relative py-14 px-4 bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white">
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); box-shadow: 0 0 10px #e50914, 0 0 20px #b20710; }
            50% { transform: scale(1.3); box-shadow: 0 0 20px #e50914, 0 0 40px #b20710; }
          }
          .heartbeat {
            animation: heartbeat 1.5s infinite;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wider text-white">

          <h2
          className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 px-10 py-3
             relative inline-block rounded-lg shadow-lg"
            style={{
            background: "linear-gradient(to right, #000000, #f50b17ff 30%, #f90a0aff 70%, #000000)",
            }}
          >
            Life Highlights
          </h2>
  
        </h2>



        {/* Timeline Container */}
        <div className="relative border-l-4 border-[#e50914] pl-6 space-y-10">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative bg-white/5 border border-white/10 rounded-xl p-5 shadow-md 
                         hover:bg-[#e50914]/10 transition-colors"
            >
              {/* Dot with heartbeat */}
              <div className="absolute -left-[23px] top-6 w-4 h-4 bg-[#e50914] border-4 border-black 
                              rounded-full heartbeat z-10" />

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e50914]/30 p-3 rounded-full shadow-md border border-[#e50914] text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-[0_0_5px_#b20710]">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
