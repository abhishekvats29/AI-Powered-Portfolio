import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "vats11.jpeg", caption: "Worship Days" },
  { src: "vats2.jpeg", caption: "Selfie time" },
  { src: "vats3.jpeg", caption: "Mirror moment" },
  { src: "vats4.jpeg", caption: "Friends Forever" },
  { src: "vats5.jpeg", caption: "Stage Performance" },
  { src: "vats6.jpeg", caption: "Reflecting my vibes" },
  { src: "vats7.jpeg", caption: "Graduation Day" },
  { src: "vats8.jpeg", caption: "Random Click" },
  { src: "vats9.jpeg", caption: "Self love isn't selfish" },
  { src: "vats10.jpeg", caption: "College Trip" },
];

// 🔥 Infinite looping by duplicating images
const infiniteImages = [...images, ...images, ...images];

export default function PersonalGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  // --- Auto-moving effect like movie reel ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollX = 0;
    const speed = 0.5; // adjust speed (higher = faster)

    const animate = () => {
      scrollX -= speed;
      // Reset when fully scrolled
      if (Math.abs(scrollX) >= track.scrollWidth / 3) {
        scrollX = 0;
      }
      track.style.transform = `translateX(${scrollX}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const openModal = (index) => {
    setCurrent(index % images.length);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-widest">
        My Timeless Moments
      </h2>

      {/* Movie reel container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex space-x-6 will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          {infiniteImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-56 md:w-72"
            >
              <div
                className="bg-black border border-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
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
