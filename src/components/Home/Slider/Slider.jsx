import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Slider.css"; // Create a CSS file for transitions

const slides = [
  {
    image:
      "https://haltico.myshopify.com/cdn/shop/files/slider_02_v2.png?v=1613764671",
    headline: "Revolutionizing Technology",
    details: "Explore the latest innovations and advancements in technology.",
    buttonLabel: "Learn More",
    buttonLink: "/technology",
  },
  {
    image:
      "https://electsoho-codezeel.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1665664719",
    headline: "Discover Cutting-Edge Solutions",
    details: "Unlock possibilities with state-of-the-art technology solutions.",
    buttonLabel: "Shop Now",
    buttonLink: "/technology",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startAutoplay = () => {
    return setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    const intervalId = startAutoplay();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-secondary-100/50">
      <div className="w-full h-64 md:h-96 lg:h-[82vh]">
        <TransitionGroup
          component="div"
          className="flex transition-transform duration-300 ease-in-out h-full"
        >
          <CSSTransition key={currentSlide} timeout={300} classNames="fade">
            <div className="w-full flex-shrink-0 relative">
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-4 lg:pl-8 py-4 bg-white/80 md:bg-transparent">
                <div className="w-full md:w-1/2">
                  <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-primary-600 headline">
                    {slides[currentSlide].headline}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl mb-4 text-primary-600 details">
                    {slides[currentSlide].details}
                  </p>
                  <a
                    href={slides[currentSlide].buttonLink}
                    className="text-white px-4 py-2.5 hover:bg-gray-800 transition duration-300 text-sm sm:text-base bg-primary-600 button"
                  >
                    {slides[currentSlide].buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-transparent text-white rounded-full p-2 hover:bg-gray-800 transition duration-300"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-transparent text-white rounded-full p-2 hover:bg-gray-800 transition duration-300"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
