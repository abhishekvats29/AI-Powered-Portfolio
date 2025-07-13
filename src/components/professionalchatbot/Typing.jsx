import React from "react";

const Typing = () => {
  return (
    <div className="flex space-x-1 px-3 py-2">
      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100" />
      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200" />
    </div>
  );
};

export default Typing;
