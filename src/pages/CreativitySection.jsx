import React, { useState } from 'react';
import { X } from 'lucide-react';

const artImages = [
  {
    src: '/images/art1.jpeg',
    description:
      'This artwork reflects my love for vibrant color palettes and emotional expression through brush strokes.',
  },
  {
    src: '/images/art2.jpeg',
    description:
      'Inspired by nature, this piece represents tranquility and the flow of energy in natural elements.',
  },
  {
    src: '/images/art3.jpeg',
    description:
      'A surrealistic approach exploring the duality of human emotion in abstract forms.',
  },
];

const CreativitySection = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white">

      <div className="max-w-7xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-6 sm:p-10 space-y-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My Creative Artworks
        </h2>

        {/* Desktop Grid View (≥ md) */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {artImages.map((art, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <img
                src={art.src}
                alt={`Art ${index + 1}`}
                className="w-full max-w-xs h-64 object-cover rounded-xl shadow-lg cursor-pointer"
                onClick={() => setSelectedArt(art)}
              />
              <p className="text-sm">{art.description}</p>
              <button
                onClick={() => setSelectedArt(art)}
                className="mt-2 px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded transition"
              >
                View Full Art
              </button>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet View (< lg) */}
        <div className="lg:hidden space-y-16">
          {artImages.map((art, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={art.src}
                    alt={`Art ${index + 1}`}
                    className="w-full max-w-sm max-h-[340px] object-contain rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedArt(art)}
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-base sm:text-lg leading-relaxed">
                    {art.description}
                  </p>
                  <button
                    onClick={() => setSelectedArt(art)}
                    className="mt-4 px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded transition"
                  >
                    View Full Art
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedArt && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedArt(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition"
          >
            <X size={36} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={selectedArt.src}
              alt="Fullscreen Art"
              className="w-full max-h-[80vh] object-contain rounded-lg border-4 border-white shadow-lg"
            />
            <p className="text-center text-white text-lg mt-4 px-4">
              {selectedArt.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreativitySection;