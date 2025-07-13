import React from 'react';
import NavbarPersonal from './NavbarPersonal';
import PersonalHero from './PersonalHero';
import PersonalAbout from './PersonalAbout';
import CreativitySection from './CreativitySection';
import PersonalGallery from './PersonalGallery';
import PersonalTimeline from './PersonalTimeline';
import ConnectSection from './ConnectSection';
import PersonalAssistant from './PersonalBot/PersonalAssistant'; // ✅ Path to full assistant

const Personal = () => {
  return (
    <div className="bg-black text-white scroll-smooth relative">
      {/* Navbar */}
      <NavbarPersonal />

      {/* Main Sections */}
      <main className="pt-16">
        <section id="hero">
          <PersonalHero />
        </section>

        <section id="About">
          <PersonalAbout />
        </section>

        <section id="creativity">
          <CreativitySection />
        </section>

        <section id="gallery">
          <PersonalGallery />
        </section>

        <section id="timeline">
          <PersonalTimeline />
        </section>

        <section id="connect">
          <ConnectSection />
        </section>
      </main>

      {/* ✅ All chatbot UI inside this */}
      <PersonalAssistant />
    </div>
  );
};

export default Personal;
