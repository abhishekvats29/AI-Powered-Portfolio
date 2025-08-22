// src/components/Certifications.jsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "AWS Training & Certification",
    image: "/certificate/AWS Certificate.png",
    pdf: "https://drive.google.com/file/d/1ycZ_DxQuNMCFO86KYfxttKIkx2PjIMKc/view?usp=drive_link",
  },
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
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setCurrentIndex((prev) => (prev + 1) % certifications.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const currentCert = certifications[currentIndex];
  const link = currentCert.pdf || currentCert.link; // ✅ handle both pdf & link

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-b from-[#102040] to-[#1a2c4a] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Certifications</h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 backdrop-blur-md border border-white/20 shadow-md transition-colors"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* Certificate Image */}
          <div
            className="w-full max-w-3xl"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={currentCert.image}
                  alt={currentCert.title}
                  className="w-full h-[450px] object-contain rounded-lg border border-white/20 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
                />
              </a>
            ) : (
              <img
                src={currentCert.image}
                alt={currentCert.title}
                className="w-full h-[450px] object-contain rounded-lg border border-white/20 shadow-xl"
              />
            )}
            <h3 className="text-xl font-semibold mt-4">{currentCert.title}</h3>
            <p className="text-sm text-white/70">Click to view credential</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 backdrop-blur-md border border-white/20 shadow-md transition-colors"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125 shadow-sm"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
