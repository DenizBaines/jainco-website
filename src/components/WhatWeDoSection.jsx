import React, { useState } from 'react';
import './WhatWeDoSection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Add this line

const WhatWeDoSection = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Plumbing And Sanitation",
      description: "We provide top-notch plumbing and sanitation solutions tailored to your needs.",
      images: [
        '/images/plumbing1.jpg',
        '/images/plumbing2.jpg',
        '/images/plumbing3.jpg'
      ],
      link: "/plumbing-sanitation"
    },
    {
      id: 2,
      title: "Drainage System",
      description: "Efficient drainage system planning and execution to ensure smooth water flow.",
      images: [
        '/images/drainage1.jpg',
        '/images/drainage2.jpg',
        '/images/drainage3.jpg'
      ],
      link: "/drainage-system"
    },
    {
      id: 3,
      title: "Water Treatment Plants",
      description: "Advanced water purification and treatment plant setups for clean water supply.",
      images: [
        '/images/water1.jpg',
        '/images/water2.jpg',
        '/images/water3.jpg'
      ],
      link: "/water-treatment-plants"
    },
    {
      id: 4,
      title: "Sewerage Treatment Plants",
      description: "Reliable sewage treatment infrastructure with sustainability at its core.",
      images: [
        '/images/sewer1.jpg',
        '/images/sewer2.jpg',
        '/images/sewer3.jpg'
      ],
      link: "/sewerage-treatment"
    },
    {
      id: 5,
      title: "Water Transmission System",
      description: "High-capacity systems for efficient water transmission and distribution.",
      images: [
        '/images/transmission1.jpg',
        '/images/transmission2.jpg',
        '/images/transmission3.jpg'
      ],
      link: "/water-treatment-system"
    }
  ];

  return (
    <section className="what-we-do-section">
      <h2 className="section-title">WHAT WE DO</h2>

      <div className="service-cards-container">
        <div className="top-row">
          {serviceCards.slice(0, 3).map(card => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

        <div className="bottom-row">
          {serviceCards.slice(3, 5).map(card => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link to={card.link} className="service-card-link">
      <div className="service-card">
        <div className="image-slider">
          <div
            className="image-wrapper"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {card.images.map((img, index) => (
              <div key={index} className="slider-image">
                <img src={img} alt={`${card.title} ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="slider-nav prev" onClick={(e) => { e.preventDefault(); prevImage(); }}>
            <FaChevronLeft />
          </button>
          <button className="slider-nav next" onClick={(e) => { e.preventDefault(); nextImage(); }}>
            <FaChevronRight />
          </button>
        </div>

        <div className="card-content">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default WhatWeDoSection;
