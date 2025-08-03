import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Certifications from "../components/Certifications";
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import Contact from '../components/Contact';
import ChatbotLauncher from "../components/professionalchatbot/ChatbotLauncher";


export default function Professional() {
  return (
    <div className="bg-gradient-to-b from-navyStart to-navyEnd text-white">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Timeline Section */}
      <section id="Timeline">
        <Timeline />
      </section>

      {/* Certificate Section */}
      <section id="Certifications">
        <Certifications />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="Skills">
        <Skills />
      </section>


      {/* Contact Section */}
      <section id="Contact">
        <Contact />
      </section>

      {/* Floating Chatbot (NO <section>) */}
      <ChatbotLauncher />
    </div>
  );
}
