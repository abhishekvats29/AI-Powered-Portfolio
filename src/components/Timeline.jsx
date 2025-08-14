import React from 'react';
import { FaSchool, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

const timelineItems = [
  {
    title: '📘 School Education',
    subtitle: 'Up to 12th Grade',
    icon: <FaSchool className="text-white" />,
    description:
      'Built strong foundations in math and science, sparking early interest in problem-solving and technology.',
  },
  {
    title: '🎯 IIT-JEE Preparation',
    subtitle: '2-Year Journey',
    icon: <GiBrain className="text-white" />,
    description:
      'Developed discipline, analytical thinking, and persistence during intensive entrance exam preparation.',
  },
  {
    title: '🎓 B.Tech in Computer Science & Engineering',
    subtitle: 'Bachelor’s Degree',
    icon: <FaGraduationCap className="text-white" />,
    description:
      'Pursued a degree in Engineering, learned full stack development, built impactful tech projects, and explored real-world applications.',
  },
  {
    title: '💻 Software Engineer',
    subtitle: 'Present',
    icon: <FaLaptopCode className="text-white" />,
    description:
      'Now crafting scalable digital experiences and building powerful full stack apps that blend logic, design, and purpose.',
  },
];

const Timeline = () => {
  return (
    <section className="relative overflow-hidden py-14 px-4 bg-[#17233b] text-white">
      {/* Gradient Overlay for smooth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17233b] to-[#0e1b2b] opacity-80 pointer-events-none z-0" />

      {/* Top Animated Glowing Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wider">
          My Journey
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#17233b] border border-blue-700/30 rounded-xl p-5 shadow-md"
            >
              {/* Vertical Line Dot */}
              <div className="absolute -left-[23px] top-6 w-4 h-4 bg-blue-500 border-4 border-[#17233b] rounded-full shadow-md z-10" />

              {/* Timeline Content */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-full shadow-md border border-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-300 font-medium mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Animated Glowing Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes glowMove {
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
        .animate-glow-line {
          background-size: 200% 100%;
          animation: glowMove 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
