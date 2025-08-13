import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lower = message.toLowerCase().trim();

    if (!lower) {
      actions.handleCustomReply(
        "🤔 Hmm... I didn’t quite catch that. Could you rephrase it?"
      );
      return;
    }

    // 🧹 Clear chat command
    if (
      lower === "clear chat" ||
      lower === "🧹 clear chat" ||
      lower.includes("clear chat") ||
      lower.includes("reset chat") ||
      lower.includes("delete chat")
    ) {
      actions.handleClearChat();
      return;
    }

    // 👋 Greetings
    if (["hi", "hello", "hey", "yo", "greetings"].some((w) => lower.includes(w))) {
      actions.handleCustomReply(
        "👋 Hi there! I’m **Abhishek’s AI Assistant**. How can I help you today?"
      );
      return;
    }

    // ℹ️ About Me
    if (lower.includes("about") || lower.includes("yourself") || lower.includes("who are you")) {
      actions.handleAbout();
      return;
    }

    // 🎨 Creativity / Art
    if (
      lower.includes("art") ||
      lower.includes("creativity") ||
      lower.includes("draw") ||
      lower.includes("sketch") ||
      lower.includes("paint")
    ) {
      actions.handleCreativity();
      return;
    }

    // 🖼️ Gallery / Photos
    if (
      lower.includes("gallery") ||
      lower.includes("photo") ||
      lower.includes("picture") ||
      lower.includes("images")
    ) {
      actions.handleGallery();
      return;
    }

    // 🕰️ Timeline / Life Journey
    if (
      lower.includes("timeline") ||
      lower.includes("journey") ||
      lower.includes("life story") ||
      lower.includes("path") ||
      lower.includes("biography")
    ) {
      actions.handleTimeline();
      return;
    }

    // 💡 Motivation
    if (
      lower.includes("motivate") ||
      lower.includes("motivation") ||
      lower.includes("inspire") ||
      lower.includes("driven")
    ) {
      actions.handleMotivation();
      return;
    }

    // 🛠 Skills
    if (
      lower.includes("skill") ||
      lower.includes("tech stack") ||
      lower.includes("technologies") ||
      lower.includes("tools")
    ) {
      actions.handleSkills();
      return;
    }

    // 📂 Projects
    if (
      lower.includes("project") ||
      lower.includes("work") ||
      lower.includes("portfolio")
    ) {
      actions.handleProjects();
      return;
    }

    // 💼 Experience
    if (
      lower.includes("experience") ||
      lower.includes("job") ||
      lower.includes("internship")
    ) {
      actions.handleExperience();
      return;
    }

    // 🎓 Education
    if (
      lower.includes("education") ||
      lower.includes("study") ||
      lower.includes("school") ||
      lower.includes("college")
    ) {
      actions.handleEducation();
      return;
    }

    // 📄 Resume
    if (
      lower.includes("resume") ||
      lower.includes("cv") ||
      lower.includes("download resume")
    ) {
      actions.handleResume();
      return;
    }

    // 📬 Contact Info
    if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("linkedin") ||
      lower.includes("reach out")
    ) {
      actions.handleContact();
      return;
    }

    // 🤖 Assistant identity
    if (
      lower.includes("assistant") ||
      lower.includes("chatbot") ||
      lower.includes("ai")
    ) {
      actions.handleAssistantIntro();
      return;
    }

    // ❓ Help / What can you do
    if (
      lower.includes("help") ||
      lower.includes("what can you do") ||
      lower.includes("options") ||
      lower.includes("abilities")
    ) {
      actions.handleCustomReply(
        "💡 I can share insights about Abhishek’s **art, journey, skills, projects, education**, and more. Just ask! 🤗"
      );
      return;
    }

    // 🔄 Default fallback
    actions.handleDefault();
  };

  return React.cloneElement(children, { parse });
};

export default MessageParser;