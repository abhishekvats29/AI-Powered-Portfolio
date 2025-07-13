import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lower = message.toLowerCase().trim();

    // ✅ Send all project links
    const projectLinkKeywords = [
      "send project link",
      "send me project link",
      "project links",
      "deployed projects",
      "live projects",
      "show me your projects"
    ];
    if (projectLinkKeywords.some((kw) => lower.includes(kw))) {
      actions.handleProjectButtons();
      return;
    }

    // ✅ Send summary of all projects
    const projectSummaryKeywords = [
      "tell me about project",
      "tell me about the projects",
      "explain your projects",
      "project summary",
      "project description",
      "describe your projects"
    ];
    if (projectSummaryKeywords.some((kw) => lower.includes(kw))) {
      actions.handleProjectSummaries();
      return;
    }

    // ✅ Handle specific project keywords
    const projectKeywords = [
      "feedback",
      "candy",
      "booking",
      "quiz",
      "tic",
      "file",
      "mcp"
    ];
    const matchedProject = projectKeywords.find((kw) =>
      lower.includes(kw)
    );
    if (matchedProject) {
      actions.handleSpecificProject(matchedProject);
      return;
    }

    // ✅ Handle social/professional links
    const socialLinks = {
      github: {
        label: "GitHub",
        url: "https://github.com/abhishekvats29",
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://linkedin.com/in/abhishekvats29",
      },
      leetcode: {
        label: "LeetCode",
        url: "https://leetcode.com/abhishekvats29",
      },
      hackerrank: {
        label: "HackerRank",
        url: "https://www.hackerrank.com/abhishekvats29",
      },
      resume: {
        label: "Resume",
        url: "https://drive.google.com/file/d/1vMG3rRvA8b94oKGy7fTP9SpVO6ysCQJz/view",
      },
      contact: {
        label: "Email",
        url: "mailto:abhishekvats4567@gmail.com",
      },
    };

    // ✅ Send all social links
    if (lower.includes("send social link") || lower.includes("social media link")) {
      actions.handleLinkButtons(Object.values(socialLinks));
      return;
    }

    // ✅ Send individual social link
    const matchedSocial = Object.keys(socialLinks)
      .filter((key) => lower.includes(key))
      .map((key) => socialLinks[key]);

    if (matchedSocial.length > 0) {
      actions.handleLinkButtons(matchedSocial);
      return;
    }

    // ✅ Clear chat
    if (lower === "clear chat" || lower === "clear") {
      actions.handleClearChat();
      return;
    }

    // ✅ Fallback
    actions.handleDefault();
  };

  return React.cloneElement(children, { parse });
};

export default MessageParser;
