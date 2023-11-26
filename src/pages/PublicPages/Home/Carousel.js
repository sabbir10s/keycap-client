// Carousel.js
import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update current index for autoplay
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the autoplay interval as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${index === currentIndex ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 ease-in-out absolute inset-0`}
          >
            <img
              src={image}
              alt={`slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
