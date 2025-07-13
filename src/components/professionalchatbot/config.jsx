import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LinkButton from "./LinkButton.jsx";

const config = {
  botName: "Abhishek AI Assistant",

  initialMessages: [
    createChatBotMessage("Hi! I'm Abhishek’s AI Assistant 👋. Ask me anything about my work, projects, or resume!", {
      delay: 300,
    }),
    createChatBotMessage("You can also clear this chat anytime by typing 'clear chat'.", {
      widget: "clearChat",
      delay: 600,
    }),
  ],

  widgets: [
    {
      widgetName: "linkButton",
      widgetFunc: (props) => <LinkButton {...props} />,
    },
    {
      widgetName: "clearChat",
      widgetFunc: (props) => (
        <button
          onClick={() => props.actions.handleClearChat()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md mt-2"
        >
          🗑️ Clear Chat
        </button>
      ),
    },
  ],

  customComponents: {
    botAvatar: () => (
      <img
        src="/images/AI.avif"
        alt="Bot Avatar"
        className="w-10 h-10 rounded-full object-cover border border-white shadow-md"
      />
    ),
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
      borderRadius: "12px",
    },
    chatButton: {
      backgroundColor: "#ff4d4d",
    },
  },

  markdown: true,

  // ✅ Enable chatbot state for links
  state: {
    links: [],
  },
};

export default config;
