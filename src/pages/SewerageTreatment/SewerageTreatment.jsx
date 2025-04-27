import React from 'react';
import './SewerageTreatment.css';

const SewerageTreatment = () => {
  return (
    <div className="stp-container">
      <h1 className="stp-heading">Sewerage Treatment Plants</h1>

      <div className="stp-image-frame">
        <img
          src="/images/sewerage-treatment.jpg"
          alt="Sewerage Treatment Plant"
          className="stp-image"
        />
      </div>

      <div className="stp-description">
        <p>
          Our Sewerage Treatment Plants are engineered to treat wastewater effectively and sustainably. With advanced filtration, biological, and chemical treatment processes, these plants ensure that harmful contaminants are removed before water is discharged or reused, helping to protect ecosystems and public health.
        </p>
      </div>
    </div>
  );
};

export default SewerageTreatment;
