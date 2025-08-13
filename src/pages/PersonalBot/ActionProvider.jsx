import React, { useEffect } from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // 🔔 Play notification sound on message
  const playNotificationSound = () => {
    const audio = new Audio("/sounds/notify.wav");
    audio.play();
  };

  // 🧠 Random thinking phrases for realism
  const thinkingPhrases = [
    "Hmm, let me think...",
    "Just a moment, processing your request...",
    "Analyzing...",
    "Interesting question, give me a second...",
    "Alright, here’s what I found..."
  ];

  // 💬 Typing indicator → then show message with avatar
  const showTypingThenMessage = (messageText, delay = 800, options = {}) => {
    // ⏳ Variable typing delay for realism
    const variableDelay = delay + Math.floor(Math.random() * 700);

    // 🎭 Random chance to show a thinking phrase before actual reply
    const shouldThink = Math.random() < 0.3;
    let preMessage = null;
    if (shouldThink) {
      preMessage = createChatBotMessage(
        thinkingPhrases[Math.floor(Math.random() * thinkingPhrases.length)],
        {
          widget: "typing",
          loading: true,
          avatar: "/images/AI.avif",
        }
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, preMessage],
      }));
    }

    const typingMessage = createChatBotMessage("...", {
      widget: "typing",
      loading: true,
      avatar: "/images/AI.avif",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, typingMessage],
    }));

    setTimeout(() => {
      const newMsg = createChatBotMessage(messageText, {
        ...options,
        avatar: "/images/AI.avif",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages.slice(0, -1), newMsg],
      }));
      playNotificationSound();
    }, variableDelay);
  };

  // 🆕 Prefilled greeting message on chatbot load
  useEffect(() => {
    const greetingMsg = createChatBotMessage(
      "👋 Hi, I’m Abhishek’s AI Assistant. How can I help you today? You can also type 'clear chat' anytime to start fresh.",
      { avatar: "/images/AI.avif" }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, greetingMsg],
    }));
    playNotificationSound();
  }, []);

  /* ===== PERSONAL PAGE ===== */
  const handleAbout = () => {
    showTypingThenMessage(
      "✨ I'm **Abhishek Vats** creatively driven individual inspired by art, storytelling, and human connections. \n\n I love capturing moments, expressing emotions, and exploring creativity through music, travel, and visual expression."
    );
  };

  const handleCreativity = () => {
    showTypingThenMessage(
      "🎨 Creativity fuels my spirit! I love exploring design trends, experimenting with UI animations, and blending technology with aesthetics. When not coding, I enjoy sketching and creative storytelling."
    );
  };

  const handleGallery = () => {
    showTypingThenMessage(
      "📸 My gallery is a blend of **travel memories, project snapshots, and digital art**. Each image reflects a part of my journey — both personal and professional."
    );
  };

  const handleTimeline = () => {
    showTypingThenMessage(
      "🧭My journey began in a culturally rich environment that shaped my values, traditions, and creativity."
    );
  };

  const handleMotivation = () => {
    showTypingThenMessage(
      "💡 I’m motivated by curiosity and the thrill of solving complex problems. Every challenge is a chance to learn and every project is an opportunity to create something meaningful."
    );
  };

  /* ===== PROFESSIONAL PAGE ===== */
  const handleSkills = () => {
    showTypingThenMessage(
      "Whether it's sketching,\n painting, or designing \n — I love turning imagination into something visual and meaningful."
    );
  };

  const handleProjects = () => {
    showTypingThenMessage(
      "📂 Some of my notable projects:\n1. Whether it's sketching, painting, or designing. \n2. I love turning imagination into something visual and meaningful."
    );
  };

  const handleExperience = () => {
    showTypingThenMessage(
      "💼 A coder by profession, but also a creative soul who blends technology with expression and storytelling."
    );
  };

  const handleEducation = () => {
    showTypingThenMessage(
      "🎓 I hold a **Bachelor's degree in Computer Science** and have completed certifications in Full Stack Development, Python, and Data Science to stay ahead in the tech curve."
    );
  };

  const handleAssistantIntro = () => {
    showTypingThenMessage(
      "🤖 Hi! I’m Abhishek’s AI Assistant. You can ask me about his **Creativity, projects, education, hobbies**, or even career advice! I also understand commands like clear chat."
    );
  };

  /* ===== EXTRA REAL-AI QUESTIONS ===== */
  const handleHobbies = () => {
    showTypingThenMessage(
      "🎯 Outside coding, Abhishek enjoys **photography, sketching, reading about emerging tech trends, and fitness activities**. Balance is key to creativity!"
    );
  };

  const handleFutureGoals = () => {
    showTypingThenMessage(
      "🚀 My future goals? To work on AI-driven applications that positively impact millions, and to keep refining my skills in cloud computing, data engineering, and deep learning."
    );
  };

  const handleFunFact = () => {
    showTypingThenMessage(
      "🎉 Fun fact: Abhishek once built a complete **web app in less than 48 hours** during a hackathon — and yes, it worked perfectly on the first run!"
    );
  };

  const handleTechStack = () => {
    showTypingThenMessage(
      "💻 Tech Stack:\nFrontend → JavaScript, React, Tailwind CSS\nBackend → Python, FastAPI, Flask\nDB → SQLite, MySQL\nTools → Git, VS Code, Docker"
    );
  };

  /* ===== CONTACT ===== */
  const handleContact = () => {
    showTypingThenMessage(
      "📬 You can reach Abhishek via:\n- [LinkedIn](https://linkedin.com/in/abhishekvats29)\n- [Email](abhishekvats4567@gmail.com)\n- [GitHub](https://github.com/abhishekvats29)"
    );
  };

  /* ===== RESUME ===== */
  const handleResume = () => {
    showTypingThenMessage(
      "📄 Here’s Abhishek’s resume: [Click to Download](https://drive.google.com/file/d/1AkxzQVSFUR-r3JHOa0rl6CCRYXzVuUMi/view?usp=drive_link/resume.pdf)"
    );
  };

  /* ===== CLEAR CHAT ===== */
  const handleClearChat = () => {
    localStorage.removeItem("chat_history");
    setState({ messages: [] });

    const clearedMsg = createChatBotMessage("✅ Chat history cleared.", {
      avatar: "/images/AI.avif",
    });

    setState((prev) => ({
      ...prev,
      messages: [clearedMsg],
    }));

    playNotificationSound();
  };

  /* ===== DEFAULT / UNKNOWN ===== */
  const handleDefault = () => {
    showTypingThenMessage(
      "🤔 I’m not sure about that yet. You can ask me about Abhishek’s **projects, skills, hobbies, education, or goals**!"
    );
  };

  /* ===== CUSTOM REPLY ===== */
  const handleCustomReply = (replyText) => {
    showTypingThenMessage(replyText);
  };

  return React.cloneElement(children, {
    actions: {
      handleAbout,
      handleCreativity,
      handleGallery,
      handleTimeline,
      handleMotivation,
      handleSkills,
      handleProjects,
      handleExperience,
      handleEducation,
      handleAssistantIntro,
      handleHobbies,
      handleFutureGoals,
      handleFunFact,
      handleTechStack,
      handleContact,
      handleResume,
      handleClearChat,
      handleDefault,
      handleCustomReply,
    },
  });
};

export default ActionProvider;
