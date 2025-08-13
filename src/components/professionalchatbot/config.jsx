import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LinkButton from "./LinkButton.jsx";

const config = {
  botName: "Abhishek AI Assistant",

  // ✅ Premium initial messages
  initialMessages: [
    createChatBotMessage(
      "👋 Hello! I'm Abhishek’s AI Assistant. I can answer questions about his work, projects, resume, and more.",
      { delay: 300 }
    ),
    createChatBotMessage(
      "💡 You can type 'clear chat' anytime or click the button below to start fresh.",
      { widget: "clearChat", delay: 600 }
    ),
    createChatBotMessage(
      "📌 Tip: Ask about projects, skills, experience, education, or social links to explore Abhishek's professional journey.",
      { delay: 900 }
    ),
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
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1"
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
        className="w-12 h-12 rounded-full object-cover border border-white shadow-lg hover:scale-105 transition-transform duration-300"
      />
    ),
    userInput: (props) => (
      <input
        {...props}
        placeholder="Type your question here… e.g., 'Tell me about projects'"
        className="w-full px-3 py-2 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    ),
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(30,30,30,0.95)",
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      backdropFilter: "blur(12px)",
    },
    userMessageBox: {
      backgroundColor: "rgba(59,130,246,0.2)",
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(59,130,246,0.4)",
      boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
      backdropFilter: "blur(10px)",
    },
    chatButton: {
      backgroundColor: "#3B82F6",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(59,130,246,0.6)",
    },
  },

  markdown: true,

  // ✅ Enhanced state for multi-turn context & dynamic links
  state: {
    links: [],
    context: {}, // reserved for future multi-turn conversation handling
  },
};

export default config;
