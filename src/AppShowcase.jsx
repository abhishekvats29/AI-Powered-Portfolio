import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

const AppShowcase = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Render stars for ReviewForm
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

  return (
    <section
      className="w-full max-w-7xl mx-auto my-10 flex flex-col justify-center items-center
      rounded-2xl bg-[rgba(10,25,47,0.65)] backdrop-blur-lg shadow-2xl px-4 sm:px-6 py-6 sm:py-8 
      border border-white/20"
    >
      {/* Images Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full">
        <img
          src="/images/app8.png"
          alt="App Screen 2"
          className="max-h-[28vh] sm:max-h-[30vh] md:max-h-[38vh] lg:max-h-[26vh] object-contain drop-shadow-2xl rounded-xl animate-z2"
        />
        <img
          src="/images/app9.png"
          alt="App Screen 3"
          className="max-h-[30vh] sm:max-h-[34vh] md:max-h-[40vh] lg:max-h-[32vh] object-contain drop-shadow-2xl rounded-xl scale-105"
        />
        <img
          src="/images/app5.png"
          alt="App Screen 4"
          className="
          max-h-[32vh] sm:max-h-[32vh] md:max-h-[40vh] lg:max-h-[26vh] 
          w-40 sm:w-48 md:w-56 lg:w-64 
          object-contain drop-shadow-2xl rounded-xl animate-z4"
        />
      </div>

      {/* Download Section */}
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
      </div>

      {/* Review Form Section (Side by Side) */}
      <div className="mt-6 w-full flex flex-col md:flex-row justify-center items-start gap-6">
        <ReviewForm renderStars={renderStars} rating={rating} setRating={setRating} />
      </div>

      {/* Animations */}
      <style jsx>{`
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
