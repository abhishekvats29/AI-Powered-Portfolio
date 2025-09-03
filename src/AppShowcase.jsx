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
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 w-full">
    {/* Wrapper for first + swapped second (third image) */}
    <div className="flex flex-row md:flex-row justify-center items-center gap-4 md:gap-6">
      {/* First image */}
      <img
        src="/images/app8.png"
        alt="App Screen 2"
        className="h-36 w-36 sm:h-44 sm:w-44 md:h-64 md:w-64 lg:h-72 lg:w-72
                   object-contain drop-shadow-2xl rounded-xl
                   [animation:float1_6s_ease-in-out_infinite]
                   transition-transform duration-500 hover:[transform:rotateX(8deg)_rotateY(-8deg)_scale(1.05)]"
      />

      {/* Third image now takes second image’s place on mobile */}
      <img
        src="/images/app5.png"
        alt="App Screen 4"
        className="h-36 w-36 sm:h-44 sm:w-44 md:h-64 md:w-64 lg:h-72 lg:w-72
                   object-contain drop-shadow-2xl rounded-xl
                   [animation:float2_6s_ease-in-out_infinite]
                   transition-transform duration-500 hover:[transform:rotateX(-8deg)_rotateY(8deg)_scale(1.05)]"
      />
    </div>

    {/* Second image now moves to third spot, centered below on mobile */}
    <div className="flex justify-center w-full md:w-auto mt-4 md:mt-0">
      <img
        src="/images/app9.png"
        alt="App Screen 3"
        className="h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72
                   object-contain drop-shadow-2xl rounded-xl
                   transition-transform duration-500 hover:[transform:rotateX(6deg)_rotateY(6deg)_scale(1.05)]"
      />
    </div>
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

        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
      `}</style>
    </section>
  );
};

export default AppShowcase;
