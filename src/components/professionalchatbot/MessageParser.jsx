import React from "react";
import projects from "./projectData";

const MessageParser = ({ children, actions, state }) => {
  const parse = (message) => {
    const lower = message.toLowerCase().trim();
    const combinedReplies = [];

    // ✅ Fixed Q&A section (case-insensitive, emoji & premium tone)
    const fixedQA = [
      {
        keys: ["hi", "hello", "hey"],
        reply: "👋 Hi! I’m Abhishek’s AI Assistant. I can guide you through his projects, skills, experience, and more."
      },
      {
        keys: ["your name", "who are you"],
        reply: "🤖 I’m Abhishek’s AI Assistant, built to showcase his professional and technical skills in a premium interactive way."
      },
      {
        keys: ["role", "profession", "what do you do", "about"],
        reply: "💼 Abhishek is a Full Stack Developer with expertise in web apps, APIs, and AI-powered solutions."
      },
      {
        keys: ["experience", "years", "work history"],
        reply: "🕒 Abhishek has 1 years of experience in building fullstack web/App applications, APIs, and automation tools for various domains."
      },
      {
        keys: ["skills", "tech stack", "technologies", "programming languages"],
        reply: "💻 Skills: JavaScript, Python, React, Node.js, Flask/FastAPI, SQL/MySQL/SQLite, cloud technologies like AWS. He also has experience with Docker, Elastic search and CI/CD pipelines."
      },
      {
        keys: ["projects", "portfolio", "work", "examples"],
        reply: "📂 Some of my notable projects:\n1. **Portfolio + AI Chatbot** – A personal assistant that answers questions about me.\n2. projects like a lightweight feedback system. \n3. OneBox Email Aggregator. \n4. candy crush game. \n5. fitness booking api. \n6. Online quiz platform. \n7. Tic Tac Toe game \n8. Hubspot integration, and \n9. Vehicle registration Investor portal.",

      },
      {
        keys: ["contact", "email", "reach you", "how to contact"],
        reply: "📧 You can reach Abhishek at: abhishekvats4567@gmail.com"
      },
      {
        keys: ["strength", "unique", "what are you good at"],
        reply: "🌟 Abhishek is passionate about building efficient, scalable, and user-friendly applications. He combines creativity with technical skills to solve real-world problems."
      },
      {
        keys: ["available", "hire", "freelance", "available to join", "immediate join", "hire now", "when can you start"],
        reply: "⏱️ Abhishek is open to interesting projects and collaborations. He’s available to join immediately for the right opportunity. You can reach out to discuss details."
      },
      {
        keys: ["learning", "upskilling", "future plans"],
        reply: "📚 He continuously learns new technologies and stays updated with the latest trends in software development and AI."
      },
      {
        keys: ["journey", "timeline", "career journey", "career growth"],
        reply: "🧭 My journey: From learning the basics of programming in college → working on real-world projects → exploring AI-powered web apps → building a personal AI assistant (yep, that’s me 🤖).",

      },
      {
        keys: ["thank you", "thanks", "thankyou so much", "thankyou"],
        reply: "❤️ You're welcome! It was great interacting with you. Have a wonderful day! ❤️"

      },
      {
        keys: ["bye", "goodbye", "see you", "catch you later", "see you again"],
        reply: "👋 Goodbye! Wishing you success. Feel free to chat anytime! ❤️"
      },
      {
        keys: ["education", "studies", "qualification", "academics"],
        reply: "🎓 Abhishek Vats completed his Bachelor of Engineering in Computer Science. Prior to that, he completed his schooling up to 12th grade and also prepared for IIT entrance exams."

      },
      {
        keys: ["tell me about abhishek", "about you", "who is abhishek", "introduce yourself", "your profile", "about abhishek"],
        reply: "🌟 Abhishek Vats is a passionate Full Stack Developer, building scalable, high-performance applications. Skilled in frontend and backend development, he blends technical expertise with creativity, focusing on clean design, usability, and impactful solutions."

      }
    ];

    // ✅ Check Fixed QA
    fixedQA.forEach((q) => {
      if (q.keys.some((key) => lower.includes(key))) combinedReplies.push(q.reply);
    });

    // ✅ Send all Fixed QA replies in numbered format
    if (combinedReplies.length > 0) {
      const numberedReplies = combinedReplies.map((r, idx) => `${idx + 1}. ${r}`).join("\n\n");
      actions.handleFixedQA(numberedReplies);
    }

    // ✅ Send all project links (buttons)
    const projectLinkKeywords = [
      "send project link", 
      "send me project link", 
      "project links", 
      "deployed projects", 
      "live projects", 
      "show me your projects", 
      "project link"];
    if (projectLinkKeywords.some((kw) => lower.includes(kw))) actions.handleProjectButtons();

    // ✅ Send premium summary of all projects (numbered + description + live link)
    const projectSummaryKeywords = [
      "tell me about project", 
      "tell me about the projects", 
      "explain your projects", 
      "project summary", 
      "project description", 
      "describe your projects", 
      "summary of project"];

    if (projectSummaryKeywords.some((kw) => lower.includes(kw))) {
      const projectSummaries = projects.map((p, idx) =>
        `${idx + 1}. **${p.title}** – ${p.short} ([Live](${p.liveLink}))`
      ).join("\n\n");
      actions.handleFixedQA(`📂 Here are Abhishek’s projects:\n\n${projectSummaries}`);
    }

    // ✅ Handle specific project keywords
    const projectKeywords = [
      "feedback",
      "candy",
      "booking",
      "quiz",
      "tic",
      "hubspot",
      "onebox",
      "vehicle registration",
    ];
    const matchedProject = projectKeywords.find((kw) => lower.includes(kw));
    if (matchedProject) {
      actions.handleSpecificProject(matchedProject);
    }


    

    // ✅ Handle social/professional links
    const socialLinks = {
      github: { label: "GitHub", url: "https://github.com/abhishekvats29" },
      linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/abhishekvats29" },
      leetcode: { label: "LeetCode", url: "https://leetcode.com/abhishekvats29" },
      hackerrank: { label: "HackerRank", url: "https://www.hackerrank.com/abhishekvats29" },
      resume: { label: "Resume", url: "https://drive.google.com/file/d/1vMG3rRvA8b94oKGy7fTP9SpVO6ysCQJz/view" },
      contact: { label: "Email", url: "mailto:abhishekvats4567@gmail.com" },
    };
    if (lower.includes("send social link") || lower.includes("social media link")) actions.handleLinkButtons(Object.values(socialLinks));
    const matchedSocial = Object.keys(socialLinks).filter((key) => lower.includes(key)).map((key) => socialLinks[key]);
    if (matchedSocial.length > 0) actions.handleLinkButtons(matchedSocial);

    // ✅ Clear chat
    if (lower === "clear chat" || lower === "clear") actions.handleClearChat();

    // ✅ Premium fallback reasoning
    if (
      combinedReplies.length === 0 &&
      !projectLinkKeywords.some((kw) => lower.includes(kw)) &&
      !projectSummaryKeywords.some((kw) => lower.includes(kw)) &&
      !matchedProject &&
      matchedSocial.length === 0 &&
      !(lower === "clear chat" || lower === "clear")
    ) {
      let reasoning = "🤖 Based on Abhishek’s profile, here’s what I can share:\n\n";
      reasoning += "• **Role:** Full Stack Developer (Web Apps, APIs, AI)\n";
      reasoning += "• **Skills:** JavaScript, Python, React, Node.js, Flask/FastAPI, SQL/MySQL/SQLite, AWS, Docker, CI/CD\n";
      reasoning += "• **Projects:**\n";
      projects.forEach((p, idx) => reasoning += `  ${idx + 1}. ${p.title}\n`);
      reasoning += "• **Education:** Bachelor of Engineering in Computer Science\n";
      reasoning += "• **Availability:** Open for projects, immediate join\n";
      reasoning += "• **Contact:** abhishekvats4567@gmail.com\n";
      actions.handleFixedQA(reasoning);
    }
  };

  return React.cloneElement(children, { parse });
};

export default MessageParser;
