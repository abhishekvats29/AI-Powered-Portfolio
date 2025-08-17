import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiDocker,
  SiNetlify,
  SiRender,
  SiFlask,
  SiFastapi,
} from 'react-icons/si';

const skillData = [
  {
    title: 'Frontend',
    skills: [
      { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
      { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
      { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <FaReact className="text-cyan-400" />, name: 'ReactJS' },
      { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { icon: <FaPython className="text-yellow-400" />, name: 'Python' },
      { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
      { icon: <SiFlask className="text-gray-300" />, name: 'Flask' },
      { icon: <SiFastapi className="text-teal-300" />, name: 'FastAPI' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
      { icon: <SiSqlite className="text-gray-400" />, name: 'SQLite' },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
      { icon: <FaGithub className="text-white" />, name: 'GitHub' },
      { icon: <SiPostman className="text-orange-600" />, name: 'Postman' },
      { icon: <SiDocker className="text-blue-400" />, name: 'Docker' },
      { icon: <SiRender className="text-purple-300" />, name: 'Render' },
      { icon: <SiNetlify className="text-green-400" />, name: 'Netlify' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white overflow-hidden">

      

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider">
          Tech Stack & Tools
        </h2>

        <div className="grid gap-8 grid-cols-1">
          {skillData.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl transition hover:shadow-white/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-300 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg shadow-md hover:bg-white/20 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Animated Glowing Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

    </section>
  );
};

export default Skills;
