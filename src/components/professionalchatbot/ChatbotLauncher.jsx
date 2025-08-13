import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import "react-chatbot-kit/build/main.css";
import { Minimize2 } from "lucide-react";

const ChatbotLauncher = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (!open) {
      const audio = new Audio("/sounds/welcome.mp3");
      audio.play().catch((e) => console.warn("Sound blocked:", e));
    }
    setOpen(!open);
  };

  return (
    <div className="fixed bottom-24 right-6 sm:right-6 z-[9999] flex flex-col items-end space-y-3">
      {open ? (
        <div className="relative w-[90vw] max-w-[420px] h-[75vh] max-h-[540px] rounded-2xl backdrop-blur-md border border-white/20 bg-blue-600/20 overflow-hidden z-[9999] shadow-2xl">
          {/* 🔽 Minimize Button */}
          <button
            onClick={toggle}
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 p-1 rounded-full z-[10000]"
          >
            <Minimize2 size={20} color="#fff" />
          </button>

          {/* 💬 Chatbot UI */}
          <Chatbot
            config={{
              ...config,
              customStyles: {
                ...config.customStyles,
                botMessageBox: {
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  color: "#ffffff",
                  padding: "10px",
                },
                userMessageBox: {
                  background: "rgba(255, 255, 255, 0.25)",
                  color: "#fff",
                  borderRadius: "16px",
                  padding: "10px",
                },
                chatButton: {
                  backgroundColor: "#2563eb",
                },
              },
            }}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      ) : (
        <div className="relative flex items-center gap-3 group z-[9999]">
          {/* Tooltip on Hover */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-[9999]">
            <div className="bg-white/10 text-white text-xs px-3 py-1 rounded-lg backdrop-blur-md border border-white/20 max-w-[140px] whitespace-normal text-center leading-tight">
              AI Assistant: Project Links
            </div>
          </div>

          {/* Chat Icon - Circular and Glassmorphic */}
          <button
            onClick={toggle}
            className="p-1 rounded-full border border-white/40 bg-white/10 backdrop-blur hover:scale-105 transition z-[9999]"
          >
            <img
              src="/images/AI2.jpg"
              alt="Chat Icon"
              className="w-12 h-12 rounded-full object-cover"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatbotLauncher; 