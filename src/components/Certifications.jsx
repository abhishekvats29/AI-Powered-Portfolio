// src/components/Certifications.jsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "Microsoft AI Badge",
    image: "/certificate/mic.jpeg",
    link: "https://learn.microsoft.com/en-us/users/abhishekvats-4050/achievements",
  },
  {
    title: "Full Stack Development Certificate",
    image: "/certificate/full stack certificate.png",
    link: "https://drive.google.com/file/d/1oBhryHhB5hZp_wJJndjA1MMXUDCUmx-R/view?usp=drivesdk",
  },
  {
    title: "JavaScript Certificate",
    image: "/certificate/js certificate.png",
    link: "https://www.hackerrank.com/certificates/24acd3dc5237",
  },
  {
    title: "Python Certificate",
    image: "/certificate/py certificate.png",
    link: "https://www.hackerrank.com/certificates/fc8e31a40b06",
  },
  {
    title: "Java Certificate",
    image: "/certificate/java certificate.png",
    link: "https://www.hackerrank.com/certificates/e9af00f57aef",
  },
  {
    title: "SQL Certificate",
    image: "/certificate/sql certificate.png",
    link: "https://www.hackerrank.com/certificates/34ada9a8ac54",
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const hoverRef = useRef(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!hoverRef.current) {
          setCurrentIndex((prev) => (prev + 1) % certifications.length);
        }
      }, 5000); // 5s
    };

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-[#102040] to-[#1a2c4a] text-white"
 >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>

          {/* Certificate Card */}
          <div
            className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl transition-all duration-500"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            <a href={certifications[currentIndex].link} target="_blank" rel="noopener noreferrer">
              <img
                src={certifications[currentIndex].image}
                alt={certifications[currentIndex].title}
                className="rounded-lg mx-auto object-contain max-h-96 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <h3 className="text-xl font-semibold mt-4">{certifications[currentIndex].title}</h3>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              } hover:bg-white/70 transition`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
