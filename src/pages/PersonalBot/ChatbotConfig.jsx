import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";

const config = {
  botName: "Abhishek AI Assistant",

  initialMessages: [
    createChatBotMessage(
      "Hey! I’m Abhishek’s AI Assistant. How can I help you today?",
      { delay: 300, avatar: "/images/AI.avif" }
    ),
    createChatBotMessage("🧹 You can clear this chat by clicking below.", {
      delay: 600,
      widget: "clearChatButton",
      avatar: "/images/AI.avif",
    }),
  ],

  customComponents: {
    // ✅ Custom Bot Avatar
    botAvatar: () => (
      <img
        src="/images/AI.avif"
        alt="Bot Avatar"
        className="w-10 h-10 rounded-full object-cover border border-white shadow-md"
      />
    ),
  },

  customStyles: {
    // ✅ Bot message style
    botMessageBox: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(255,255,255,0.15)",
      backdropFilter: "blur(10px)",
    },
    // ✅ User message style
    userMessageBox: {
      backgroundColor: "rgba(59, 130, 246, 0.2)", // Tailwind blue-500 bg opacity
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(59,130,246,0.4)",
      backdropFilter: "blur(10px)",
    },
    // ✅ Send button
    chatButton: {
      backgroundColor: "#3B82F6", // Tailwind blue-500
    },

    // ❌ Removed chatInput — now handled by CSS file
  },

  markdown: true,
  state: {},

  widgets: [
    {
      widgetName: "clearChatButton",
      widgetFunc: () => (
        <button
          onClick={() => {
            localStorage.removeItem("chat_history");
            window.location.reload();
          }}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-xl mt-2"
        >
          🗑️ Clear Chat
        </button>
      ),
    },
  ],
};

export default config;
