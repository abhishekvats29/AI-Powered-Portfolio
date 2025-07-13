import React from "react";

const LinkButton = (props) => {
  const links = props.links || (props.state && props.state.links);
  console.log("✅ Received links in LinkButton:", links);

  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium transition"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default LinkButton;
