import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const images = [
  { src: 'vats11.jpeg', caption: 'Worship Days' },
  { src: 'vats2.jpeg', caption: 'With Family' },
  { src: 'vats3.jpeg', caption: 'Travel Diaries' },
  { src: 'vats4.jpeg', caption: 'Friends Forever' },
  { src: 'vats5.jpeg', caption: 'Stage Performance' },
  { src: 'vats6.jpeg', caption: 'Childhood Memories' },
  { src: 'vats7.jpeg', caption: 'Graduation Day' },
  { src: 'vats8.jpeg', caption: 'Random Click' },
  { src: 'vats9.jpeg', caption: 'Fun Moments' },
  { src: 'vats10.jpeg', caption: 'College Trip' },
];

const PersonalGallery = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const showPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
    trackMouse: true,
  });

  useEffect(() => {
    if (paused || isModalOpen) return;
    const interval = setInterval(showNext, 4000);
    return () => clearInterval(interval);
  }, [paused, isModalOpen]);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-widest">
          My Personal Gallery
        </h2>

        <div
          className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center"
          {...handlers}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-4 z-10 bg-black/60 text-white hover:bg-white hover:text-black text-2xl px-3 py-1 rounded-full transition"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-4 z-10 bg-black/60 text-white hover:bg-white hover:text-black text-2xl px-3 py-1 rounded-full transition"
          >
            ›
          </button>

          {/* Image + Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              onClick={openModal}
            >
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-xl">
                <img
                  src={`/images/${images[current].src}`}
                  alt={images[current].caption}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <p className="mt-4 text-center text-white font-medium">{images[current].caption}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
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
              className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
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
                className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full px-4 py-1 hover:bg-red-500 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PersonalGallery;
