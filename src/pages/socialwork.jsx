import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // icons

const LifeBeyondCode = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const socialWork = [
    {
      img: "/images/social.jpeg",
      text: "Clean India Movement",
      detail:
        "Contributed actively to the Clean India Movement, raising awareness and participating in cleanliness drives to improve the community environment.",
    },
    {
      img: "/images/social2.jpeg",
      text: "Participated in Tech Lecture",
      detail:
        "Delivered and attended technology sessions to spread knowledge on emerging technologies and motivate peers towards innovation.",
    },
    {
      img: "/images/social3.jpeg",
      text: "Encouraged Children in Govt. School",
      detail:
        "Visited government schools to inspire children with knowledge about the latest technologies, encouraging curiosity and future learning.",
    },
  ];

  const paintings = [
    { img: "/images/painting.jpeg", text: "Sardar Vallabhbhai Patel" },
    { img: "/images/painting2.jpeg", text: "Swachh Bharat Abhiyan" },
    { img: "/images/painting3.jpeg", text: "Swami Vivekananda" },
  ];

  // Handle Escape & Arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + socialWork.length) % socialWork.length
        );
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % socialWork.length
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-black py-12 px-6">
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Community Engagement & Social Impact
      </h2>

      {/* Social Work Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {socialWork.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden border border-white shadow-lg cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-[65vh] object-contain bg-black"
            />

            {/* Glassmorphic Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md text-white py-6 px-4">
              <h3 className="text-lg font-semibold">{item.text}</h3>
              <p className="text-sm mt-1 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
            onClick={() =>
              setSelectedIndex(
                (selectedIndex - 1 + socialWork.length) % socialWork.length
              )
            }
          >
            <ChevronLeft size={32} />
          </button>

          {/* Full Image */}
          <div className="flex flex-col items-center max-w-[90vw]">
            <img
              src={socialWork[selectedIndex].img}
              alt={socialWork[selectedIndex].text}
              className="max-h-[80vh] object-contain border border-white rounded-xl shadow-2xl"
            />
            <div className="mt-4 bg-black/60 backdrop-blur-md text-white px-6 py-4 rounded-xl text-center max-w-2xl">
              <h3 className="text-2xl font-semibold">
                {socialWork[selectedIndex].text}
              </h3>
              <p className="text-sm mt-2">{socialWork[selectedIndex].detail}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
            onClick={() => setSelectedIndex((selectedIndex + 1) % socialWork.length)}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Paintings Section */}
{/* Paintings Section */}
<div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6">
  <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
    Artworks & Expressions
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-3 md:gap-4">
    {paintings.map((item, index) => (
      <div key={index} className="relative">
        {/* Image */}
        <img
          src={item.img}
          alt={`Painting ${index + 1}`}
          className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] object-contain mx-auto"
        />

        {/* Overlay heading */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md text-white py-1 px-2 text-center">
          <h3 className="text-sm sm:text-base md:text-lg font-medium">{item.text}</h3>
        </div>
      </div>
    ))}
  </div>

  {/* Motivational Section */}
  <div className="mt-6 sm:mt-10 text-center max-w-[90vw] sm:max-w-[60vw] mx-auto">
    <p className="text-xs sm:text-sm text-gray-300 mb-2">
      Every stroke of a brush and every sketch on paper tells a story of imagination, patience, and passion. Art is not just a visual experience—it’s a reflection of the artist’s soul. Keep exploring, keep creating, and let your unique vision inspire the world.  
    </p>
    <p className="text-xs sm:text-sm text-gray-100 font-semibold">— Abhishek Vats</p>
  </div>
</div>


    </section>
  );
};

export default LifeBeyondCode;
