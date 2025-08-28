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
<div className="mt-16 max-w-6xl mx-auto">
  <h2 className="text-white text-3xl font-bold text-center mb-8">
    Artworks & Expressions
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {paintings.map((item, index) => (
      <div
        key={index}
        className="relative flex justify-center items-center rounded-lg overflow-hidden bg-black"
      >
        {/* Wrapper to make border fit image only */}
       <img
  src={item.img}
  alt={`Painting ${index + 1}`}
  className="w-full h-[60vh] object-contain bg-black 
    border-[6px] border-[#e50914] rounded-lg
    shadow-[0_0_15px_#e50914,0_0_30px_#b20710]"
/>





        {/* Overlay heading */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md text-white py-4 px-2 text-center">
          <h3 className="text-lg font-medium">{item.text}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default LifeBeyondCode;
