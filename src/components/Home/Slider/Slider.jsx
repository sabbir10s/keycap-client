import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Slider.css";
import sliderImgOne from "../../../assets/images/slider img one.png";
import sliderImgTwo from "../../../assets/images/slider img two.png";
import { Link } from "react-router-dom";
const slides = [
  {
    image: sliderImgOne,
    headline: "Your Ultimate Smartphone Destination!",
    details:
      "Discover cutting-edge technology and unbeatable deals in our smartphone haven.",
    buttonLabel: "Shop Now",
    buttonLink: "/products",
  },
  {
    image: sliderImgTwo,
    headline: "Unmatched Headphone Excellence!",
    details:
      "Immerse Yourself in Unrivaled Sound Quality with Our Premium Selection of Headphones.",
    buttonLabel: "Shop Now",
    buttonLink: "/products",
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
    }, 5000);
  };

  useEffect(() => {
    const intervalId = startAutoplay();

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full h-64 md:h-96 lg:min-h-[480px]">
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
                <div className="w-full md:w-[450px]">
                  <h1 className="text-xl md:text-3xl font-bold mb-2 text-primary-600 headline">
                    {slides[currentSlide].headline}
                  </h1>
                  <h5 className="text-base md:text-lg mb-4 text-gray-600 details">
                    {slides[currentSlide].details}
                  </h5>
                  <Link
                    to={slides[currentSlide].buttonLink}
                    className="text-white px-4 py-2.5 hover:bg-primary-700 transition duration-300 text-sm sm:text-base bg-primary-600 button"
                  >
                    {slides[currentSlide].buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-transparent text-gray-400 hover:text-primary-600 transition duration-300"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-transparent text-gray-400 hover:text-primary-600 transition duration-300"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
