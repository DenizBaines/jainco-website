import React from 'react';
import './DrainageSystem.css';

const DrainageSystem = () => {
  return (
    <div className="ds-container">
      <h1 className="ds-heading">Drainage Systems</h1>

      <div className="ds-image-frame">
        <img
          src="/images/drainage-system.jpg"
          alt="Drainage System"
          className="ds-image"
        />
      </div>

      <div className="ds-description">
        <p>
          Our Drainage Systems are meticulously designed to manage stormwater and wastewater efficiently. With expert engineering, we ensure proper water flow, reduce flooding risks, and support sustainable urban development. From underground piping networks to surface drainage structures, we deliver complete and reliable solutions.
        </p>
      </div>
    </div>
  );
};

export default DrainageSystem;
