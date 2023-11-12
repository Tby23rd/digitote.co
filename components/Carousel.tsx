// Carousel.tsx

"use client";

import React from "react";

const images = [
  "images/carousel1.jpg",
  "images/carousel2.jpg",
  "images/carousel3.jpg",
];

// Repeat the images multiple times to fill the carousel
const allImages = Array(100).fill(images).flat();

const Carousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex animate-slide">
        {allImages.map((image, index) => (
          <div
            key={index}
            className="w-80 h-80 mx-4 flex-shrink-0 relative group"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;