import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Lightweight Feedback System',
    description:
      '📝 A web app Built using React (frontend) and Flask + SQLite (backend), allowing managers and employees to exchange feedback, analyze sentiment, and export reports.',
    image: '/images/project1-lfs.png',
    liveLink: 'https://lightweight-feedback-system-1.netlify.app/',
  },
  {
    id: 2,
    title: 'Candy Crush Game',
    description:
      '🎮 Built a Candy Crush–style matching game using React and Tailwind CSS, featuring interactive drag-and-drop mechanics, real-time state updates, and responsive design for a smooth gaming experience.',
    image: '/images/project2-candy.png',
    liveLink: 'https://vats-game.netlify.app/',
  },
  {
    id: 3,
    title: 'Fitness Booking API',
    description:
      '🔄 Developed a RESTful Fitness Class Booking API using FastAPI and SQLite, enabling users to browse, book, and manage fitness classes with proper validation, error handling, and time zone support.',
    image: '/images/project4-api.png',
    liveLink: 'https://fitness-booking-api.onrender.com/docs',
  },
  {
    id: 4,
    title: 'Online Quiz Platform',
    description:
      '🧠 Developed an interactive quiz platform with timed questions, instant scoring, multiple question types, and a dynamic leaderboard for real-time competition.',
    image: '/images/project3-quiz.png',
    liveLink: 'https://vats-quiz-app.netlify.app/',
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe Game',
    description:
      '❌⭕ Built a classic Tic Tac Toe game with responsive UI, real-time win detection, and reset functionality for smooth two-player interaction.',
    image: '/images/project5-ttt.png',
    liveLink: 'https://vats-game1.netlify.app/',
  },
  {
    id: 6,
    title: 'MCP File Manager',
    description:
      '📝 A full stack file management system built using ReactJS (Frontend) and Flask (Backend), Users can upload, edit, delete, and view files — with file system operations performed on the server.',
    image: '/images/project6-file.png',
    liveLink: 'https://github.com/abhishekvats29/MCP-file-manager.git',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0d1a2d] to-[#102e4a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projects
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center 
                         bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                         shadow-xl p-6 md:p-8 gap-6 
                         transition duration-300 ease-in-out 
                         hover:shadow-white/30"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 object-contain"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
