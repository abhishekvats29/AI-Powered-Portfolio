import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import projects from "./projectData";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const playSound = () => new Audio("/sounds/notify.wav").play();

  const updateChat = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    playSound();
  };

  // ✅ Send link buttons (social or project links) with optional title
  const handleLinkButtons = (links, title = "Here are some useful links:") => {
    setState((prev) => ({ ...prev, links }));
    const msg = createChatBotMessage(title, { widget: "linkButton" });
    updateChat(msg);
  };

  // ✅ Send all deployed project links (premium format)
  const handleProjectButtons = () => {
    const links = projects.map((p) => ({ label: p.title, url: p.liveLink }));
    handleLinkButtons(links, "🚀 Here are my deployed projects:");
  };

  // ✅ Send numbered project summaries with emoji & live links
  const handleProjectSummaries = () => {
    const introMsg = createChatBotMessage("📂 Here’s a summary of my projects:");
    updateChat(introMsg);

    projects.forEach((p, idx) => {
      const summary = createChatBotMessage(
        `🔹 ${idx + 1}. **${p.title}** – ${p.short} [Live Demo](${p.liveLink})`
      );
      updateChat(summary);
    });
  };

  // ✅ Send detailed info for a specific project
  const handleSpecificProject = (match) => {
    const project = projects.find((p) =>
      p.title.toLowerCase().includes(match)
    );

    if (project) {
      const links = [{ label: "View Project", url: project.liveLink }];
      const msg = createChatBotMessage(
        `📌 **${project.title}** – ${project.short}\n\n🔗 Click below to view the live project:`,
        { widget: "linkButton" }
      );
      updateChat(msg);
      handleLinkButtons(links, "🔗 Open Project:");
    } else {
      handleDefault();
    }
  };

  // ✅ Clear chat
  const handleClearChat = () => {
    setState((prev) => ({ ...prev, messages: [], links: [] }));
  };

  // ✅ Fallback default message
  const handleDefault = () => {
    const msg = createChatBotMessage(
      "🤖 I’m still learning. You can ask me about Abhishek, his projects, resume, or GitHub!"
    );
    updateChat(msg);
  };

  // ✅ Send rich Fixed Q&A responses
  const handleFixedQA = (reply) => {
    const msg = createChatBotMessage(reply);
    updateChat(msg);
  };

  return React.cloneElement(children, {
    actions: {
      handleLinkButtons,
      handleProjectButtons,
      handleProjectSummaries,
      handleSpecificProject,
      handleClearChat,
      handleDefault,
      handleFixedQA,
    },
  });
};

export default ActionProvider;
