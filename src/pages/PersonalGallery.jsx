import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "vats11.jpeg", caption: "Worship Days" },
  { src: "vats2.jpeg", caption: "With Family" },
  { src: "vats3.jpeg", caption: "Travel Diaries" },
  { src: "vats4.jpeg", caption: "Friends Forever" },
  { src: "vats5.jpeg", caption: "Stage Performance" },
  { src: "vats6.jpeg", caption: "Childhood Memories" },
  { src: "vats7.jpeg", caption: "Graduation Day" },
  { src: "vats8.jpeg", caption: "Random Click" },
  { src: "vats9.jpeg", caption: "Fun Moments" },
  { src: "vats10.jpeg", caption: "College Trip" },
];

export default function PersonalGallery() {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Continuous auto-scroll like conveyor belt
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    let speed = 0.4; // lower is slower

    const scrollStep = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // loop to start
      } else {
        scrollContainer.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const openModal = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const showPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setCurrent((prev) => (prev + 1) % images.length);

  // Swipe detection for mobile modal
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      showNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      showPrev();
    }
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white">

      {/* Bottom Animated Glowing Line - Pink Glass Neon */}
<div className="absolute bottom-0 left-0 w-full h-[2px] 
  bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 
  shadow-[0_0_10px_#f472b6,0_0_20px_#ec4899,0_0_30px_#db2777] 
  rounded-full blur-[1px] animate-[flowing_3s_linear_infinite]">
</div>
      {/* Thin white line above section */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-widest">
        My Personal Gallery
      </h2>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() =>
            scrollRef.current.scrollBy({
              left: -(window.innerWidth < 768 ? 220 : 300),
              behavior: "smooth",
            })
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-10"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {images.concat(images).map((img, index) => ( // duplicate for infinite loop feel
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-56 md:w-72"
            >
              <div
                className="bg-black border border-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(index % images.length)}
              >
                <img
                  src={`/images/${img.src}`}
                  alt={img.caption}
                  className="w-full h-40 md:h-56 object-contain bg-black"
                />
              </div>
              <p className="mt-3 text-center text-sm md:text-base font-medium">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() =>
            scrollRef.current.scrollBy({
              left: window.innerWidth < 768 ? 220 : 300,
              behavior: "smooth",
            })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl mx-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="rounded-2xl bg-black p-2 border-4 border-white shadow-2xl max-w-[95vw] max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={`/images/${images[current].src}`}
                  alt="Fullscreen"
                  className="rounded-xl max-h-[85vh] object-contain w-full"
                />
                <div className="text-center text-white text-sm mt-3 font-medium">
                  {images[current].caption}
                </div>
              </motion.div>

              {/* Prev / Next buttons */}
              <button
                onClick={showPrev}
                className="absolute left-2 md:left-6 text-white text-4xl bg-black/60 rounded-full px-3 py-1 hover:bg-white hover:text-black transition"
              >
                ‹
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 md:right-6 text-white text-4xl bg-black/60 rounded-full px-3 py-1 hover:bg-white hover:text-black transition"
              >
                ›
              </button>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full px-4 py-1 hover:bg-red-500 transition"
              >
                <X />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
