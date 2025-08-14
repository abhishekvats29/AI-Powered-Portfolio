import React from "react";

const projects = [
  {
    id: 1,
    title: "Lightweight Feedback System",
    description:
      "📝 A web app built using React (frontend) and Flask + SQLite (backend), allowing managers and employees to exchange feedback, analyze sentiment, and export reports.",
    image: "/images/lfs final.png",
    liveApp: "https://lightweight-feedback-system-1.netlify.app/",
    SourceCode: "https://github.com/abhishekvats29/Lightweight-Feedback-System",
  },
  {
    id: 2,
    title: "OneBox Email Aggregator",
    description:
      "📧 Onebox Email Aggregator connects multiple email accounts into a single inbox. It features real-time email syncing and an AI chatbot that suggests smart replies based on email content.",
    image: "/images/onebox final.png",
    liveApp: "https://onebox-email-aggregator-z6h0.onrender.com/",
    SourceCode: "https://github.com/abhishekvats29/Onebox-Email-Aggregator",
  },
  {
    id: 3,
    title: "Candy Crush Game",
    description:
      "🎮 Built a Candy Crush Inspired game using React and Tailwind CSS, featuring interactive drag-and-drop mechanics, real-time state updates.",
    image: "/images/candy final.png",
    liveApp: "https://candy-crush-inspired-game.onrender.com/",
    SourceCode: "https://github.com/abhishekvats29/Candy-Crush-Inspired-Game.git",
  },
  {
    id: 4,
    title: "Vehicle Registration Investor Dashboard",
    description:
      "🚗 An interactive dashboard visualizing Year-over-Year (YoY) and Quarter-over-Quarter (QoQ) growth in vehicle registrations, designed for investor insights.",
    image: "/images/vehicle final.png",
    liveApp:
      "https://drive.google.com/file/d/1hqlM74h5rJIXmrN8lOjsWRSZHUXy2JId/view",
    SourceCode:
      "https://github.com/abhishekvats29/Vehicle-Registrations---Investor-Dashboard",
  },
  {
    id: 5,
    title: "Fitness Booking API",
    description:
      "🔄 Developed a RESTful Fitness Class Booking API using FastAPI and SQLite, enabling users to browse, book, and manage fitness classes with validation, error handling, and time zone support.",
    image: "/images/project4-api.png",
    liveApp: "https://fitness-booking-api.onrender.com/docs",
    SourceCode: "https://github.com/abhishekvats29/Fitness-Booking-API",
  },
  {
    id: 6,
    title: "Online Quiz Platform",
    description:
      "🧠 Interactive quiz platform with timed questions, instant scoring, multiple question types, and a real-time leaderboard for competitive play.",
    image: "/images/quiz final.png",
    liveApp: "https://vats-quiz-app.netlify.app/",
    SourceCode: "https://github.com/abhishekvats29/Online-Quiz-Platform.git",
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Game",
    description:
      "❌⭕ A classic Tic Tac Toe game with responsive UI, win detection, and reset functionality for smooth two-player interaction.",
    image: "/images/project5-ttt.png",
    liveApp: "https://vats-game1.netlify.app/",
    SourceCode: "https://github.com/abhishekvats29/Tic-Tac-Toe-Game.git",
  },
  {
    id: 8,
    title: "Hubspot OAuth Integration",
    description:
      "🔗 Backend integration using Python + FastAPI to implement HubSpot OAuth authentication and automated item loading logic.",
    image: "/images/hubspot final.png",
    liveApp: "https://drive.google.com/file/d/1KYgmHM9zc99jNYtxOUlEz0rEQ-BAgdwc/view?usp=drive_link",
    SourceCode: "https://github.com/abhishekvats29/Hubspot-Integration",
  },
];

const Projects = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#0d1a2d] to-[#102e4a] overflow-hidden">
      {/* Top Glowing Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 md:p-8 transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {/* Image */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 object-contain"
                />
              </div>

              {/* Title + Description */}
              <div className="flex-1 text-white text-center space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href={project.liveApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-white text-white rounded transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  Live App
                </a>
                <a
                  href={project.SourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-white text-white rounded transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  Source Code
                </a>
              </div>

              {/* Glowing effect below card */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-10 rounded-xl blur-3xl opacity-30"
                style={{
                  background: "#3b82f6",
                  boxShadow: "0 0 30px #3b82f6",
                  zIndex: -1,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Glowing Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_0_20px_#3b82f6] blur-sm animate-glow-line"></div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes glowLineMove {
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
          animation: glowLineMove 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
