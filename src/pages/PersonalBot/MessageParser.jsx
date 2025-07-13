import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lower = message.toLowerCase().trim();

    if (!lower) {
      actions.handleCustomReply("Hmm... I didn’t catch that. Could you rephrase it?");
      return;
    }

    // ✅ Clear chat command
    if (
      lower === "clear chat" ||
      lower === "delete chat" ||
      lower.includes("clear chat") ||
      lower.includes("reset chat")
    ) {
      actions.handleClearChat();

    // ✅ Greetings
    } else if (["hi", "hello", "hey", "yo"].some((w) => lower.includes(w))) {
      actions.handleCustomReply("Hi there! 👋 I’m Abhishek’s AI assistant. How can I brighten your day? 😊");

    // ✅ About Me
    } else if (lower.includes("about") || lower.includes("yourself")) {
      actions.handleAbout();

    // ✅ Creativity / Art
    } else if (
      lower.includes("art") ||
      lower.includes("creativity") ||
      lower.includes("draw") ||
      lower.includes("sketch") ||
      lower.includes("paint")
    ) {
      actions.handleCreativity();

    // ✅ Gallery / Photos
    } else if (
      lower.includes("gallery") ||
      lower.includes("photo") ||
      lower.includes("picture") ||
      lower.includes("images")
    ) {
      actions.handleGallery();

    // ✅ Timeline / Life Journey
    } else if (
      lower.includes("timeline") ||
      lower.includes("journey") ||
      lower.includes("life story") ||
      lower.includes("path") ||
      lower.includes("biography")
    ) {
      actions.handleTimeline();

    // ✅ Motivation
    } else if (
      lower.includes("motivate") ||
      lower.includes("motivation") ||
      lower.includes("inspire") ||
      lower.includes("driven")
    ) {
      actions.handleMotivation();

    // ✅ Skills
    } else if (
      lower.includes("skill") ||
      lower.includes("tech stack") ||
      lower.includes("technologies") ||
      lower.includes("tools")
    ) {
      actions.handleSkills();

    // ✅ Projects
    } else if (
      lower.includes("project") ||
      lower.includes("work") ||
      lower.includes("portfolio")
    ) {
      actions.handleProjects();

    // ✅ Experience
    } else if (
      lower.includes("experience") ||
      lower.includes("job") ||
      lower.includes("internship")
    ) {
      actions.handleExperience();

    // ✅ Education
    } else if (
      lower.includes("education") ||
      lower.includes("study") ||
      lower.includes("school") ||
      lower.includes("college")
    ) {
      actions.handleEducation();

    // ✅ Resume
    } else if (
      lower.includes("resume") ||
      lower.includes("cv") ||
      lower.includes("download resume")
    ) {
      actions.handleResume();

    // ✅ Contact Info
    } else if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("linkedin") ||
      lower.includes("reach out")
    ) {
      actions.handleContact();

    // ✅ Who are you?
    } else if (
      lower.includes("who are you") ||
      lower.includes("what are you") ||
      lower.includes("assistant") ||
      lower.includes("chatbot")
    ) {
      actions.handleAssistantIntro();

    // ✅ Help / What can you do?
    } else if (
      lower.includes("help") ||
      lower.includes("what can you do") ||
      lower.includes("options") ||
      lower.includes("abilities")
    ) {
      actions.handleCustomReply(
        "I can share insights about Abhishek’s **art, journey, skills, projects, education**, and more. Ask me anything! 🤗"
      );

    // ❓ Fallback
    } else {
      actions.handleDefault();
    }
  };

  return React.cloneElement(children, { parse });
};

export default MessageParser;
