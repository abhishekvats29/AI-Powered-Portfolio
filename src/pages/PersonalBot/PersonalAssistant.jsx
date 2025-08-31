import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./ChatbotOverrides.css";

import config from "./ChatbotConfig.jsx";
import ActionProvider from "./ActionProvider.jsx";
import MessageParser from "./MessageParser.jsx";
import { Minimize2 } from "lucide-react";

const PersonalAssistant = () => {
  console.log("PersonalAssistant mounted");
  const [open, setOpen] = useState(false);
  const [clearTrigger, setClearTrigger] = useState(false);
  const [botReady, setBotReady] = useState(false);

  const clearChat = () => {
    localStorage.removeItem("chat_history");
    setClearTrigger(true);
    setTimeout(() => setClearTrigger(false), 50);
  };

  const toggleChat = () => {
    if (!open) {
      const audio = new Audio("/sounds/welcome1.mp3");
      audio.play().catch((e) => console.warn("Toggle sound blocked:", e));
    }
    setOpen(!open);
    setBotReady(false);
  };

  const handleBotInit = ({ setState, createChatBotMessage }) => {
    if (!botReady) {
      // Check if welcome message was already shown
      const shownBefore = localStorage.getItem("welcome_message_shown");
      if (!shownBefore) {
        const welcome = createChatBotMessage(
          "Hey! I’m Abhishek’s AI Assistant. How can I help you today?",
          { avatar: "/images/AI.avif" }
        );
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, welcome],
        }));
        localStorage.setItem("welcome_message_shown", "true");
      }
      setBotReady(true);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 sm:right-6 z-50 flex flex-col items-end space-y-3">
      {open ? (
        <div className="relative w-[90vw] max-w-[420px] h-[75vh] max-h-[540px] rounded-2xl shadow-xl backdrop-blur-md border border-white/20 bg-black/40 overflow-hidden">
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 p-1 rounded-full z-10"
            title="Minimize"
          >
            <Minimize2 size={20} color="#fff" />
          </button>

          {!clearTrigger && (
            <Chatbot
              config={{
                ...config,
                customStyles: {
                  ...config.customStyles,
                  botMessageBox: {
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "10px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  },
                  userMessageBox: {
                    background: "rgba(59, 130, 246, 0.2)",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "10px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(59,130,246,0.4)",
                  },
                  chatButton: {
                    backgroundColor: "#3B82F6",
                  },
                  chatInput: {
                    backgroundColor: "rgba(20, 20, 20, 0.7)",
                    color: "#111111",
                    caretColor: "#3B82F6",
                    borderRadius: "12px",
                    padding: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  },
                },
                customComponents: {
                  ...config.customComponents,
                  header: () => (
                    <div className="bg-[#f4f4f4]/90 backdrop-blur-md px-5 py-3 border-b border-gray-300 shadow flex items-center gap-3">
                      <img
                        src="/images/AI.avif"
                        alt="AI"
                        className="w-8 h-8 rounded-full object-cover border border-black"
                      />
                      <span className="text-black font-semibold tracking-wide text-sm">
                        Conversation with Abhishek AI Assistant
                      </span>
                    </div>
                  ),
                },
                customMessages: {
                  placeholder: "Ask me anything about Abhishek...",
                },
              }}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              messageHistory={
                localStorage.getItem("chat_history")
                  ? JSON.parse(localStorage.getItem("chat_history"))
                  : []
              }
              saveMessages={(messages) =>
                localStorage.setItem("chat_history", JSON.stringify(messages))
              }
              runInitialMessages={false}
              onInit={handleBotInit}
            />
          )}
        </div>
      ) : (
        <div className="relative group flex items-center gap-3">
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/10 text-white text-xs px-3 py-2 rounded-md backdrop-blur border border-white/20 shadow-md max-w-[130px] whitespace-normal opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
            Abhishek AI Assistant
          </div>

          <button
            onClick={toggleChat}
            className="fixed bottom-[92px] right-4 z-50 p-1 rounded-full shadow-xl border border-white/30 
             bg-black/30 backdrop-blur hover:scale-105 transition"
            title="Open Chat"
            >
             <img
            src="/images/AI.avif"
            alt="Chat Icon"
            className="w-12 h-12 rounded-full object-cover border border-white/30 
               shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)] backdrop-blur"
            />
          </button>

        </div>
      )}
    </div>
  );
};

export default PersonalAssistant;