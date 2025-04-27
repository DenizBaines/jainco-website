import React from 'react';
import './PlumbingSanitation.css';

const PlumbingSanitation = () => {
  return (
    <div className="ps-container">
      <h1 className="ps-heading">Plumbing And Sanitation</h1>

      <div className="ps-image-frame">
        <img
          src="/images/plumbing-sanitation.jpg"
          alt="Plumbing and Sanitation"
          className="ps-image"
        />
      </div>

      <div className="ps-description">
        <p>
          We offer comprehensive plumbing and sanitation solutions for residential, commercial, and industrial projects. From water supply systems to drainage and sanitation facilities, our team ensures high standards of hygiene, efficiency, and long-lasting reliability. Our commitment to quality guarantees a healthier and cleaner environment for all.
        </p>
      </div>
    </div>
  );
};

export default PlumbingSanitation;
