import React, { useEffect, useState, useMemo } from 'react';
import PersonalHero from './PersonalHero';
import PersonalAbout from './PersonalAbout';
import PersonalTimeline from './PersonalTimeline';
import CreativitySection from './CreativitySection';
import PersonalGallery from './PersonalGallery';
import ConnectSection from './ConnectSection';
import PersonalAssistant from './PersonalBot/PersonalAssistant';

const Personal = () => {
  const [showBot, setShowBot] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const timer = setTimeout(() => setShowBot(true), isMobile ? 1000 : 500);
    return () => clearTimeout(timer);
  }, []);

  const chatbotMemo = useMemo(() => <PersonalAssistant />, []);

  return (
    <div className="bg-black text-white scroll-smooth relative">
      <main className="pt-16">
        <section id="hero"><PersonalHero /></section>
        <section id="About"><PersonalAbout /></section>
        <section id="timeline"><PersonalTimeline /></section>
        <section id="creativity"><CreativitySection /></section>
        <section id="gallery"><PersonalGallery /></section>
        <section id="connect"><ConnectSection /></section>
      </main>

      {showBot && chatbotMemo}
    </div>
  );
};

export default React.memo(Personal);
