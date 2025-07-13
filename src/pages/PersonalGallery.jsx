import React, { useRef, useState, useEffect } from 'react';
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
  const scrollRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const showNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const showPrev = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    let interval;
    if (selectedIndex !== null) {
      interval = setInterval(() => {
        showNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
    trackMouse: true,
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-widest">
          My Personal Gallery
        </h2>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white text-white hover:text-black text-2xl px-3 py-1 rounded-full transition"
          >
            ‹
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white text-white hover:text-black text-2xl px-3 py-1 rounded-full transition"
          >
            ›
          </button>

          {/* Image Slider */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide px-6 pb-2"
            whileTap={{ cursor: 'grabbing' }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="min-w-[80%] sm:min-w-[45%] lg:min-w-[28%] aspect-[3/4] relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                onClick={() => openImage(index)}
              >
                <div className="h-full w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={`/images/${img.src}`}
                    alt={img.caption}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm font-medium">
                    {img.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...handlers}
            onClick={closeImage}
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
                  src={`/images/${images[selectedIndex].src}`}
                  alt="Fullscreen"
                  className="rounded-xl max-h-[85vh] object-contain w-full"
                />
                <div className="text-center text-white text-sm mt-3 font-medium">
                  {images[selectedIndex].caption}
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
                onClick={closeImage}
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
