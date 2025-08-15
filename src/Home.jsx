import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub, FaTwitter, } from "react-icons/fa";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBriefcase,
  FaWhatsapp,
  FaHome,
  FaEnvelope,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import ContactModal from "./components/ContactModal";
import ChatbotLauncher from "./components/professionalchatbot/ChatbotLauncher";
import PersonalAssistant from "./pages/PersonalBot/PersonalAssistant";
import HomeFooter from "./HomeFooter"; // since HomeFooter.jsx is in src folder same as Home.jsx


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showCineBot, setShowCineBot] = useState(false);
  const [showProBot, setShowProBot] = useState(false);

  const openWhatsApp = () => window.open("https://wa.me/9508721988", "_blank");

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* ---------- Animated Depth Background ---------- */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
      {/* Glass overlay for clarity */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />

      {/* Soft gradient mesh glow (very subtle) */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full opacity-30 blur-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 animate-mesh" />
        <div className="absolute bottom-0 -right-40 w-[38rem] h-[38rem] rounded-full opacity-25 blur-3xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 animate-mesh-delay" />
      </div>

      {/* Floating particles (ultra subtle) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-white/20 animate-float"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 59) % 100}%`,
              animationDelay: `${(i % 10) * 0.6}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* ---------- Sticky Glass Navbar (simple, elegant) ---------- */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <img
                src="/images/profile.jpeg"
                alt="Abhishek"
                className="h-9 w-9 rounded-full border border-white/30 object-cover"
              />
              <span className="text-sm font-semibold tracking-wide">
                Abhishek Vats Digital Universe
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              
              
              <button
                onClick={() => setShowModal(true)}
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Hero Section: split layout ---------- */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pt-10 sm:pt-14 md:grid-cols-2 md:items-center">
        {/* Left: Headshot in glass frame */}
        
         
        
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeUp} className="flex justify-center md:justify-start" > 
        <div className="group relative rounded-[2rem] p-[2px]"> 
          
        {/* Gradient border */} 
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-400 via-pink-400 to-fuchsia-500 opacity-70 blur-sm transition duration-500 group-hover:opacity-100 group-hover:blur-md" /> 
        <div className="relative rounded-[2rem] bg-white/10 p-3 backdrop-blur-xl ring-1 ring-white/20"> 
         <img src="/images/profile2.jpeg" 
         alt="Abhishek Vats" className="h-64 w-64 rounded-2xl object-cover sm:h-72 sm:w-72 md:h-80 md:w-80" /> 
        
         {/* bottom underglow */} 
         <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-8 blur-2xl rounded-full bg-blue-500/30" /> 
         </div> 
        </div> 
      </motion.div>


        {/* Right: Headline, tagline, CTAs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Code Meets Creativity
          </h1>
          <p className="mt-3 text-lg text-white/90 sm:text-xl">
            Building digital experiences with emotion & precision.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Engineer • Artist • Storyteller — Driven to make tech feel human.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Link
              to="/professional"
              className="group inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-blue-500/80 to-indigo-600/80 backdrop-blur-md px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition"
            >
              💼 Tech Portfolio
              <FaArrowRight className="ml-2 translate-x-0 opacity-80 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/personal"
              className="group inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-md px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-600/30 hover:shadow-rose-500/40 transition"
            >
              🌹 Life Beyond Code
              <FaArrowRight className="ml-2 translate-x-0 opacity-80 transition group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Scroll-down indicator */}
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <a href="#featured" className="group flex items-center gap-2">
              <span className="h-8 w-8 rounded-full border border-white/30 p-[2px]">
                <span className="block h-full w-full rounded-full bg-white/20 group-hover:bg-white/30 transition animate-pulse" />
              </span>
              <span className="text-xs text-white/70 group-hover:text-white/90 transition">
                Scroll to explore
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ---------- Social Proof (muted grayscale) ---------- */}
      {/* ---------- Social Links (Premium World-Class Style) ---------- */}
<section className="mx-auto mt-12 max-w-7xl px-5">
  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-6 backdrop-blur-md shadow-lg shadow-blue-500/10">
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      <a
        href="https://www.linkedin.com/in/abhishekvats29"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/abhishekvats29"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:text-gray-300 hover:border-gray-300 transition duration-300 ease-in-out"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/abhishekvats29"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:text-sky-400 hover:border-sky-400 transition duration-300 ease-in-out"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:abhishekvats4567@gmail.com"
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:text-red-400 hover:border-red-400 transition duration-300 ease-in-out"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
</section>


      {/* ---------- Featured Cards (premium, animated) ---------- */}
      <section id="featured" className="mx-auto mt-14 max-w-7xl px-5">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-8 text-center text-3xl font-bold tracking-wide sm:text-4xl"
        >
          Explore My World
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tech card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.25}
              glareColor="#ffffff"
            >
              <div className="group relative rounded-2xl p-[1.5px] transition-transform duration-300">
                {/* Gradient border */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-md transition" />
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
                  <div className="mb-3 flex justify-center">
                    <FaBriefcase className="text-4xl text-blue-300" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Tech Portfolio</h3>
                  <p className="mt-2 text-center text-sm text-white/90">
                    Dive into my projects, tech stack, and work experience.
                  </p>

                  {/* image mock (optional) */}

                  {/* premium image mock with glow and fade-in (blue-white theme) */}
                  <div className="relative mt-6 h-52 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-blue-100/40 bg-gradient-to-br from-blue-50/30 to-white/10 shadow-2xl flex items-center justify-center transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
                    
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-blue-100/20 blur-3xl -z-10 rounded-2xl"></div>

                    <img
                      src="/images/vats6.jpeg"
                      alt="Portfolio mock"
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>

                  

                  <div className="mt-5 flex items-center justify-center">
                    <Link
                      to="/professional"
                      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition border border-white"
                    >
                      Explore My Work
                      <FaArrowRight className="ml-2 translate-x-0 opacity-80 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Personal card */}
          <motion.div className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.25}
              glareColor="#ffb6c1"
            >
              <div className="group relative rounded-2xl p-[1.5px] transition-transform duration-300">
                {/* Gradient border */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-md transition" />
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
                  <div className="mb-3 flex justify-center">
                    <FaUser className="text-4xl text-pink-300" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Life Beyond Code</h3>
                  <p className="mt-2 text-center text-sm text-white/90">
                    Explore my cinematic journey, artworks, emotions, and more.
                  </p>

                  {/* image mock (optional) */}

                  {/* premium image mock with glow and fade-in */}
                  <div className="relative mt-6 h-52 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-pink-100/40 bg-gradient-to-br from-pink-50/30 to-white/10 shadow-2xl flex items-center justify-center transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
                    
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-pink-100/20 blur-3xl -z-10 rounded-2xl"></div>

                    <img
                      src="/images/vats7.jpeg"
                      alt="Portfolio mock"
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>



                  

                  <div className="mt-5 flex items-center justify-center">
                    <Link
                      to="/personal"
                      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-rose-600/30 hover:shadow-rose-500/40 transition border border-white"
                    >
                      Discover My Journey
                      <FaArrowRight className="ml-2 translate-x-0 opacity-80 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

        </div>
      </section>


      


      {/* ---------- Floating action bar (kept from your design) ---------- */}
      {/* Mobile Chatbots */}
        <div className="block sm:hidden mt-6 w-full">
          {showCineBot && <PersonalAssistant />}
          {showProBot && <ChatbotLauncher />}
        </div>
      {/* Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <div className="flex justify-around items-center bg-black/60 backdrop-blur-md border-t border-white/10 px-2 py-2 text-white rounded-t-xl">
          {[
            { icon: <FaHome size={18} />, label: "Home", onClick: () => (window.location.href = "/") },
            { icon: <FaEnvelope size={18} />, label: "Contact", onClick: () => setShowModal(true) },
            { icon: <FaWhatsapp className="text-[#25D366]" size={18} />, label: "Chat", onClick: openWhatsApp },
            { icon: <MessageCircle size={18} />, label: "AI Bot", onClick: () => setShowCineBot((p) => !p) },
            { icon: <FaRobot size={18} />, label: "Tech AI", onClick: () => setShowProBot((p) => !p) },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              className="flex flex-col items-center justify-center w-16 h-16 text-xs px-2 py-1 rounded-xl bg-white/10 border border-white/10 shadow-md hover:bg-white/20 transition text-center"
            >
              {btn.icon}
              <span className="mt-1">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Right Button Bar */}
      

     {/* Desktop Right Button Bar */}
<div className="hidden sm:flex fixed top-1/3 right-4 z-50 flex-col gap-3 mt-28">
  {[
    { icon: <FaHome size={20} />, label: "Home", onClick: () => (window.location.href = "/"), color: "bg-blue-500", hover: "hover:text-blue-500 hover:border-blue-500" },
    { icon: <FaEnvelope size={20} />, label: "Contact", onClick: () => setShowModal(true), color: "bg-purple-500", hover: "hover:text-purple-500 hover:border-purple-500" },
    { icon: <FaWhatsapp size={20} />, label: "Chat", onClick: openWhatsApp, color: "bg-green-500", hover: "hover:text-green-500 hover:border-green-500" },
  ].map((btn, i) => (
    <button
      key={i}
      onClick={btn.onClick}
      className={`flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white text-2xl bg-white/10 backdrop-blur-md shadow-lg transition duration-300 ease-in-out ${btn.hover}`}
    >
      {btn.icon}
      <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 group-hover:left-12 transition-all duration-300 bg-black/70 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap shadow-lg">
        {btn.label}
      </span>
    </button>
  ))}
</div>



{/* Chatbots - Always Visible on Desktop */}
<div className="hidden sm:block z-40">
  <PersonalAssistant />
  <ChatbotLauncher />
</div>




      {/* Contact modal */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}

      {/* ---------- Inline keyframes (no Tailwind config edits needed) ---------- */}
      <style>{`
        @keyframes mesh {
          0% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg); }
          50% { transform: translate3d(0,-10px,0) scale(1.02); filter: hue-rotate(15deg); }
          100% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: .15; }
          50% { transform: translateY(-10px) translateX(2px); opacity: .3; }
          100% { transform: translateY(0) translateX(0); opacity: .15; }
        }
        .animate-mesh { animation: mesh 16s ease-in-out infinite; }
        .animate-mesh-delay { animation: mesh 20s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>



      {/* Footer */}
      <HomeFooter />
      
    </div>
  );
}