import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      imgSrc: photo1,
      alt: 'Project 1',
      text: (<>
                WELCOME TO JAINCO BUILDCON <br />
                INDIA'S TOP WATER MANAGEMENT COMPANY
             </>),
    },
    {
      id: 2,
      imgSrc: photo2,
      alt: 'Project 2',
      text: 'YOUR SEARCH FOR WORLD CLASS WATER MANAGEMENT COMPANY ENDS HERE',
    },
    {
      id: 3,
      imgSrc: photo3,
      alt: 'Project 3',
      text: 'COMMITED TO EXCELLENCE WHEN IT COMES TO WATER MANAGEMENT WORKS',
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 700);
      resetInterval();
    }
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, );

  const resetInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 700);
      resetInterval();
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
      resetInterval();
    }
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              <img
                src={slide.imgSrc}
                alt={slide.alt}
                className="slide-image"
              />
              <div className={`slide-text ${index === currentSlide ? 'fade-in' : ''}`}>
                {slide.text}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="carousel-nav next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
