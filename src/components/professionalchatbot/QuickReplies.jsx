import React from "react";

const QuickReplies = ({ setState, children, actions }) => {
  const replies = [
    { label: "📁 Projects", action: () => actions.handleProjects() },
    { label: "🐙 GitHub", action: () => actions.handleGithub() },
    { label: "📄 Resume", action: () => actions.handleResume() },
    { label: "📬 Contact", action: () => actions.handleEmail() },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {replies.map((r, idx) => (
        <button
          key={idx}
          onClick={r.action}
          className="bg-white text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition text-black"
        >
          {r.label}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
