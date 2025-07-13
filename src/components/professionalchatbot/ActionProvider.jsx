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

  const handleLinkButtons = (links) => {
    setState((prev) => ({
      ...prev,
      links,
    }));

    const msg = createChatBotMessage("Here are some useful links:", {
      widget: "linkButton",
    });
    updateChat(msg);
  };

  const handleProjectButtons = () => {
    const links = projects.map((p) => ({
      label: p.title,
      url: p.liveLink,
    }));

    setState((prev) => ({
      ...prev,
      links,
    }));

    const msg = createChatBotMessage("Here are my deployed projects:", {
      widget: "linkButton",
    });
    updateChat(msg);
  };

  const handleProjectSummaries = () => {
    const msg = createChatBotMessage("Here's a quick summary of my projects:");
    updateChat(msg);

    projects.forEach((p) => {
      const summary = createChatBotMessage(`📌 ${p.title}: ${p.short}`);
      updateChat(summary);
    });
  };

  const handleSpecificProject = (match) => {
    const project = projects.find((p) =>
      p.title.toLowerCase().includes(match)
    );
    if (project) {
      setState((prev) => ({
        ...prev,
        links: [{ label: "View Project", url: project.liveLink }],
      }));

      const msg = createChatBotMessage(`📌 ${project.title}: ${project.short}`, {
        widget: "linkButton",
      });
      updateChat(msg);
    } else {
      handleDefault();
    }
  };

  const handleClearChat = () => {
    setState((prev) => ({ ...prev, messages: [], links: [] }));
  };

  const handleDefault = () => {
    updateChat(
      createChatBotMessage(
        "🤖 I’m still learning. You can ask me about Abhishek, projects, resume, or GitHub!"
      )
    );
  };

  return React.cloneElement(children, {
    actions: {
      handleLinkButtons,
      handleProjectButtons,
      handleProjectSummaries,
      handleSpecificProject,
      handleClearChat,
      handleDefault,
    },
  });
};

export default ActionProvider;
