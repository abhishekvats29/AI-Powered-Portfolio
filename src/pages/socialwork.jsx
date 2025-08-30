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
      
        <h2
          className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 px-10 py-3
             relative inline-block rounded-lg shadow-lg"
            style={{
            background: "linear-gradient(to right, #000000, #f50b17ff 30%, #f90a0aff 70%, #000000)",
            }}
          >
            Community Engagement & Social Impact
          </h2>
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
              className="w-full h-[75vh] object-contain bg-black"
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
    
      <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading with brush-stroke red bg */}
        <div className="relative w-fit mx-auto mb-8">
        <h2
  className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 px-10 py-3
             relative inline-block rounded-lg shadow-lg"
  style={{
    background: "linear-gradient(to right, #000000, #f50b17ff 30%, #f90a0aff 70%, #000000)",
  }}
>
  Artworks & Expressions
</h2>







  </div>


  {/* Paintings list */}
  <div className="space-y-10">
    {[
      {
        img: "/images/painting.jpeg",
        text: "Sardar Vallabhbhai Patel – The Iron Man of India",
        description:
          "This artwork pays homage to Sardar Vallabhbhai Patel, a visionary leader who unified more than 560 princely states into one nation. Known as the 'Iron Man of India.' It reminds us that true leadership is not about power, but about service, sacrifice, and the courage to stand for what is right."
      },
      {
        img: "/images/painting2.jpeg",
        text: "Swachh Bharat Abhiyan – Towards a Cleaner Tomorrow",
        description:
          "This painting reflects the spirit of the Clean India Movement, a nationwide campaign that calls upon every citizen to take responsibility for keeping their surroundings clean and healthy. Inspired by Mahatma Gandhi’s vision of sanitation and dignity for all, the artwork symbolizes collective action, discipline, and pride in our environment."
      },
      {
        img: "/images/painting3.jpeg",
        text: "Swami Vivekananda – Awakening the Youth",
        description:
          "This painting captures the towering presence of Swami Vivekananda, a spiritual leader and philosopher who awakened India’s youth with his message of strength, self-confidence, and service to humanity. His historic address at the Parliament of Religions in Chicago, where he introduced the world to India’s wisdom and tolerance, remains a beacon of inspiration."
      }
    ].map((item, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={item.img}
            alt={item.text}
            className="w-full h-[55vh] md:h-[65vh] object-contain rounded-2xl shadow-lg bg-black"
          />
        </div>

        {/* Text / Detail */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
            {item.text}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>




    </section>
  );
};

export default LifeBeyondCode;
