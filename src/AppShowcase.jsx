import React from "react";

const AppShowcase = () => {
  // Function to render progressive stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => {
      const fill = rating - i >= 1 ? 100 : (rating - i) * 100;
      return (
        <div key={i} className="relative w-6 h-6">
          <svg
            className="absolute top-0 left-0 w-full h-full text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
          </svg>
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
    <section className="w-[90vw] max-w-[1200px] h-auto mx-auto my-10 flex flex-col justify-between items-center rounded-2xl bg-[rgba(10,25,47,0.65)] backdrop-blur-lg shadow-2xl p-6 border border-white/20 perspective">
      {/* Images Row */}
      <div className="flex flex-wrap justify-center items-end gap-6 h-auto relative perspective">
        {/* Image 1 */}
        <img
          src="/images/app6.png"
          alt="App Screen 1"
          className="h-[200px] sm:h-[300px] md:h-[90%] object-contain drop-shadow-2xl rounded-xl animate-z1"
        />

        {/* Image 2 */}
        <img
          src="/images/app8.png"
          alt="App Screen 2"
          className="h-[200px] sm:h-[300px] md:h-[90%] object-contain drop-shadow-2xl rounded-xl animate-z2"
        />

        {/* Image 3 */}
        <img
          src="/images/app9.png"
          alt="App Screen 3"
          className="h-[200px] sm:h-[300px] md:h-[100%] object-contain drop-shadow-2xl rounded-xl scale-105"
        />

        {/* Image 4 */}
        <img
          src="/images/app5.png"
          alt="App Screen 4"
          className="h-[200px] sm:h-[300px] md:h-[90%] object-contain drop-shadow-2xl rounded-xl animate-z4"
        />
      </div>

      {/* Download & Star Rating */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        {/* Download Text and Button */}
<div className="mt-4 flex flex-col items-center gap-4 w-full">
  <p className="text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
    Download My Android App
  </p>
  <a
    href="https://drive.google.com/your-placeholder-link"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-xl transition transform hover:scale-105 flex items-center gap-2"
  >
    📥 Download App
  </a>
</div>


        {/* Star Rating Box */}
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
          <div className="flex">{renderStars(4.9)}</div>
          <span className="ml-3 text-white font-bold text-lg">4.9</span>
        </div>
      </div>

      {/* Custom 3D Z-axis Animations */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }

        /* Image 1 */
        @keyframes z1 {
          0%, 100% { transform: translateZ(0px) rotateY(0deg); z-index: 1; }
          50% { transform: translateZ(160px) rotateY(-10deg); z-index: 10; }
        }

        /* Image 2 */
        @keyframes z2 {
          0%, 100% { transform: translateZ(0px) rotateY(0deg); z-index: 1; }
          50% { transform: translateZ(130px) rotateY(-5deg); z-index: 9; }
        }

        /* Image 4 */
        @keyframes z4 {
          0%, 100% { transform: translateZ(0px) rotateY(0deg); z-index: 1; }
          50% { transform: translateZ(110px) rotateY(8deg); z-index: 8; }
        }

        /* Apply staggered animation delays */
        .animate-z1 {
          animation: z1 6s ease-in-out infinite;
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
