import { createChatBotMessage } from "react-chatbot-kit";
import React, { useState } from "react";

// ✅ Prefilled Input Component
const PrefilledInput = (props) => {
  const [value, setValue] = useState("");
  const placeholderText =
    "Hi! I’m Abhishek’s AI Assistant. How can I help you today? 🔴 Clear chat with 'clear chat'.";

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={value ? "" : placeholderText}
      className="w-full px-3 py-2 rounded-lg bg-white text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

// ✅ Chatbot Config
const config = {
  botName: "Abhishek AI Assistant",

  // ✅ Initial welcome messages
  initialMessages: [
    createChatBotMessage(
      "👋 Hi! I’m Abhishek’s AI Assistant — here to help you explore my work, projects, and career.",
      { delay: 300, avatar: "/images/AI.avif" }
    ),
    createChatBotMessage(
      "💡 You can type **'clear chat'** anytime or use the 🔴 Clear Chat button below to start fresh.",
      {
        delay: 700,
        widget: "clearChatButton",
        avatar: "/images/AI.avif",
      }
    ),
  ],

  // ✅ Custom Components
  customComponents: {
    botAvatar: () => (
      <img
        src="/images/AI.avif"
        alt="Bot Avatar"
        className="w-10 h-10 rounded-full object-cover border border-white shadow-lg hover:scale-105 transition-transform duration-300"
      />
    ),
    userInput: (props) => <PrefilledInput {...props} />,
  },

  // ✅ Custom Styles
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(255,255,255,0.15)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    },
    userMessageBox: {
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      color: "#ffffff",
      borderRadius: "16px",
      padding: "10px",
      border: "1px solid rgba(59,130,246,0.4)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
    },
    chatButton: {
      backgroundColor: "#3B82F6",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(59,130,246,0.6)",
    },
  },

  markdown: true,
  state: {},

  // ✅ Widgets
  widgets: [
    {
      widgetName: "clearChatButton",
      widgetFunc: () => (
        <button
          onClick={() => {
            localStorage.removeItem("chat_history");
            window.location.reload();
          }}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-xl mt-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1"
        >
          🔴 Clear Chat
        </button>
      ),
    },
  ],
};

export default config;
