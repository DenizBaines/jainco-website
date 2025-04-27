import React from 'react';
import './WaterTreatmentPlants.css';

const WaterTreatmentPlants = () => {
  return (
    <div className="wtp-container">
      <h1 className="wtp-heading">Water Treatment Plants</h1>

      <div className="wtp-image-frame">
        <img
          src="/images/water-treatment-plants.jpg"
          alt="Water Treatment Plant"
          className="wtp-image"
        />
      </div>

      <div className="wtp-description">
        <p>
          Our Water Treatment Plants are built to provide clean, safe, and potable water through innovative purification methods. We utilize filtration, chemical dosing, sedimentation, and disinfection technologies to treat water from various sources, ensuring compliance with regulatory standards and supporting public health and sustainable development.
        </p>
      </div>
    </div>
  );
};

export default WaterTreatmentPlants;
