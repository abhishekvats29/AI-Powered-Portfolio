import React, { useState } from "react";

const AppShowcase = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const renderStars = (currentRating, clickable = false) => {
    return [...Array(5)].map((_, i) => {
      const index = i + 1;
      const fill =
        currentRating >= index
          ? 100
          : currentRating + 1 > index
          ? (currentRating - i) * 100
          : 0;

      return (
        <div
          key={i}
          className={`relative w-5 h-5 sm:w-6 sm:h-6 cursor-${
            clickable ? "pointer" : "default"
          }`}
          onClick={() => clickable && setRating(index)}
          onMouseEnter={() => clickable && setHover(index)}
          onMouseLeave={() => clickable && setHover(0)}
        >
          {/* Background star */}
          <svg
            className="absolute top-0 left-0 w-full h-full text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
          </svg>
          {/* Filled part */}
          <svg
            className="absolute top-0 left-0 w-full h-full text-yellow-400 overflow-hidden"
            viewBox="0 0 20 20"
          >
            <defs>
              <clipPath id={`star-clip-${i}`}>
                <rect width={`${fill}%`} height="100%" />
              </clipPath>
            </defs>
            <path
              d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z"
              fill="currentColor"
              clipPath={`url(#star-clip-${i})`}
            />
          </svg>
        </div>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      setSuccessMessage("⚠️ Please give a rating and write a comment.");
      return;
    }

    setRating(0);
    setComment("");
    setSuccessMessage("✅ Thanks for your review!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <section
      className="w-full max-w-7xl mx-auto my-10 flex flex-col justify-between items-center 
      rounded-2xl bg-[rgba(10,25,47,0.65)] backdrop-blur-lg shadow-2xl px-4 sm:px-6 py-6 sm:py-8 
      border border-white/20 perspective 
      h-auto sm:h-[80vh] overflow-hidden"
    >
      {/* Images Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 perspective">
        {/* Left Box Image */}
        <img
          src="/images/app8.png"
          alt="App Screen 2"
          className="max-h-[28vh] sm:max-h-[30vh] md:max-h-[38vh] lg:max-h-[26vh] object-contain drop-shadow-2xl rounded-xl animate-z2"
        />

        {/* Center Big Image */}
        <img
          src="/images/app9.png"
          alt="App Screen 3"
          className="max-h-[30vh] sm:max-h-[34vh] md:max-h-[40vh] lg:max-h-[32vh] object-contain drop-shadow-2xl rounded-xl scale-105"
        />

        {/* Right Box Image */}
        <img
          src="/images/app5.png"
          alt="App Screen 4"
          className="max-h-[28vh] sm:max-h-[32vh] md:max-h-[40vh] lg:max-h-[26vh] object-contain drop-shadow-2xl rounded-xl animate-z4"
        />
      </div>

      {/* Download & Rating Section */}
      <div className="mt-4 flex flex-col items-center gap-3 w-full">
        <p className="text-base sm:text-lg md:text-2xl font-semibold text-white drop-shadow-md text-center">
          Download My Android App
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1pnkhvRSO06klV5vFaJYgspghXUBlmDlU"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold 
            text-sm sm:text-lg rounded-2xl shadow-xl transition transform hover:scale-105 flex items-center gap-2"
        >
          📲 Download App
        </a>

        {/* --- Permanent User Review Block --- */}
        <div
          className="mt-4 w-full sm:w-3/4 md:w-1/2 
            bg-white/10 p-4 rounded-lg shadow-lg flex flex-col items-center"
        >
          <p className="text-white font-semibold text-sm sm:text-base">
            ⭐ User Reviews
          </p>
          <div className="flex justify-center mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-yellow-400 font-bold text-sm sm:text-base mt-1">
            4.9 / 5.0
          </span>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 text-center">
            “This app is amazing! Super fast, clean design, and really useful.
            Highly recommended.” – User
          </p>
        </div>

        {/* --- Rating & Comment Form --- */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white/10 p-3 sm:p-4 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex">{renderStars(hover || rating, true)}</div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none text-sm sm:text-base"
              rows={2}
            />
            <button
              type="submit"
              className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md transition text-sm sm:text-base"
            >
              Submit Review
            </button>
            {successMessage && (
              <p className="text-green-400 font-medium text-sm">{successMessage}</p>
            )}
          </div>
        </form>
      </div>

      {/* Animations */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }

        @keyframes z2 {
          0%,
          100% {
            transform: translateZ(0px) rotateY(0deg);
            z-index: 1;
          }
          50% {
            transform: translateZ(80px) rotateY(-5deg);
            z-index: 9;
          }
        }

        @keyframes z4 {
          0%,
          100% {
            transform: translateZ(0px) rotateY(0deg);
            z-index: 1;
          }
          50% {
            transform: translateZ(60px) rotateY(8deg);
            z-index: 8;
          }
        }

        .animate-z2 {
          animation: z2 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-z4 {
          animation: z4 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AppShowcase;
