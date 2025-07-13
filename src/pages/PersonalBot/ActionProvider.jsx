import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // 🔔 Play notification sound on message
  const playNotificationSound = () => {
    const audio = new Audio("/sounds/notify.wav");
    audio.play();
  };

  // 💬 Typing indicator → then show message with avatar
  const showTypingThenMessage = (messageText, delay = 800, options = {}) => {
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
    }, delay);
  };

  // 🎭 Personal Page FAQs
  const handleAbout = () => {
    showTypingThenMessage(
      "✨ I'm **Abhishek** – a passionate soul blending art, dreams, and cinematic vibes into life 💫. Want to know about my creativity, timeline or memories? 😊"
    );
  };

  const handleCreativity = () => {
    showTypingThenMessage(
      "🎨 *Creativity fuels my spirit!* I love sketching, painting, and expressing emotions through visual art. It's where logic meets imagination 🌈."
    );
  };

  const handleGallery = () => {
    showTypingThenMessage(
      "📸 My gallery is a collection of heartfelt memories — from adventures, college snapshots, to artistic captures. **Every picture tells a story. ❤️**"
    );
  };

  const handleTimeline = () => {
    showTypingThenMessage(
      "🧭 My life journey? A beautiful mix of *culture*, *Bollywood dreams*, *art*, *music*, and *tech exploration* 🌍. Want a sneak peek? Just ask!"
    );
  };

  const handleMotivation = () => {
    showTypingThenMessage(
      "💡 I'm driven by curiosity, creativity, and a constant desire to grow. Whether it’s through learning or creating, I believe in pushing boundaries. 🚀"
    );
  };

  // 🧑‍💼 Professional Page FAQs
  const handleSkills = () => {
    showTypingThenMessage(
      "🛠️ I specialize in **Python, React, Tailwind CSS, Flask, FastAPI, SQLite**, and love crafting seamless web experiences with a creative edge 💻✨."
    );
  };

  const handleProjects = () => {
    showTypingThenMessage(
      "📂 I've worked on diverse projects including a **Feedback System**, **Fitness Booking API**, and a **Portfolio with AI Chatbot**. Each reflects a blend of creativity and functionality."
    );
  };

  const handleExperience = () => {
    showTypingThenMessage(
      "💼 I’ve worked on real-world assignments as a **Python Developer Trainee**, building end-to-end solutions using modern full-stack tools."
    );
  };

  const handleEducation = () => {
    showTypingThenMessage(
      "🎓 I hold a degree in Computer Science and have completed multiple online certifications to sharpen my skills and stay industry-ready."
    );
  };

  const handleAssistantIntro = () => {
    showTypingThenMessage(
      "🤖 Hi! I’m Abhishek’s AI Assistant. I can guide you through his portfolio — ask me about his **skills, projects, personal life**, or anything else you'd like to know! 😊"
    );
  };

  // 📬 Contact info
  const handleContact = () => {
    showTypingThenMessage(
      "📬 You can reach me via:\n\n- [LinkedIn](https://linkedin.com/in/yourprofile)\n- [Email](mailto:you@example.com)\n- [GitHub](https://github.com/yourusername)"
    );
  };

  // 📄 Resume
  const handleResume = () => {
    showTypingThenMessage(
      "📄 Here's my resume: [Click to Download](https://yourdomain.com/resume.pdf)"
    );
  };

  // ✅ CLEAR CHAT COMMAND
  const handleClearChat = () => {
    localStorage.removeItem("chat_history");
    setState({ messages: [] });

    const clearedMsg = createChatBotMessage("✅ Chat history has been cleared.", {
      avatar: "/images/AI.avif",
    });

    setState((prev) => ({
      ...prev,
      messages: [clearedMsg],
    }));

    playNotificationSound();
  };

  // 😐 Fallback
  const handleDefault = () => {
    showTypingThenMessage(
      "🤔 I'm not sure how to respond to that yet. You can ask me about **Abhishek’s creativity**, **projects**, **skills**, or even life timeline! 💡"
    );
  };

  // 🧠 Custom message
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
      handleContact,
      handleResume,
      handleClearChat,  // 🆕 Included here
      handleDefault,
      handleCustomReply,
    },
  });
};

export default ActionProvider;
