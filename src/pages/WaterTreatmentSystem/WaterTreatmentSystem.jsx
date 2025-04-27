import React from 'react';
import './WaterTreatmentSystem.css';

const WaterTreatmentSystem = () => {
  return (
    <div className="wts-container">
      <h1 className="wts-heading">Water Transmission System</h1>

      <div className="wts-image-frame">
        <img
          src="/images/water-treatment.jpg"
          alt="Water Treatment Plant"
          className="wts-image"
        />
      </div>

      <div className="wts-description">
        <p>
          Our water treatment systems are designed to ensure the supply of safe, clean, and sustainable water to meet the demands of urban and industrial sectors. With advanced filtration and purification technologies, our systems effectively remove contaminants, purify water, and contribute to a healthier environment.
        </p>
      </div>
    </div>
  );
};

export default WaterTreatmentSystem;
