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
    title: '🎓 B.Tech in Engineering',
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
    <section className="py-14 px-4 bg-gradient-to-b from-[#17233b] to-[#0e1b2b] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wider">
          My Journey
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md"
            >
              {/* Vertical Line Dot */}
              <div className="absolute -left-[23px] top-6 w-4 h-4 bg-blue-500 border-4 border-[#17233b] rounded-full shadow-md z-10" />

              {/* Timeline Content */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/30 backdrop-blur-sm p-3 rounded-full shadow-md border border-blue-400">
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
    </section>
  );
};

export default Timeline;
