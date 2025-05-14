import React from 'react';
import './WaterTreatmentPlants.css';

const WaterTreatmentPlants = () => {
  return (
    
    <div className="the-iso">
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
          Our Water Treatment Plants are built to provide clean, safe, and potable water 
          through innovative purification methods. We utilize filtration, chemical dosing, 
          sedimentation, and disinfection technologies to treat water from various sources, 
          ensuring compliance with regulatory standards and supporting public health and sustainable development.
        </p>
        <p>
        Jainco Group is dedicated to addressing the global demand for clean water through 
        innovative water treatment technologies. Our expertise lies in delivering advanced 
        systems that purify and recycle water efficiently, reducing environmental impact and 
        supporting water conservation efforts.
        </p>
        <p>
        We offer end-to-end solutions, from design and engineering to commissioning and maintenance, 
        ensuring that our clients receive reliable and future-ready systems. Whether it’s treating river water, 
        groundwater, or industrial effluents, our plants are engineered for durability, compliance, and performance.
        </p>
        <p>
        With a focus on sustainable development, Jainco Group integrates cutting-edge automation, 
        smart monitoring tools, and eco-friendly materials to build systems that not only meet but exceed industry standards.
        </p>
        <p>
           ✅ Key Features of Our Water Treatment Plants :-
        </p>
        <ul style={{ listStyleType: 'disc', textAlign: 'left' }}>
          <li>Custom-designed solutions for industrial, commercial, and municipal applications</li>
          <li>Multi-stage filtration and membrane-based purification for high-quality output</li>
          <li>Energy-efficient technologies to reduce operational costs</li>
          <li>Fully automated control panels with remote monitoring capabilities</li>
          <li>Corrosion-resistant materials for longer life and minimal maintenance</li>
          <li>On-site training and technical support for plant operators</li>
          </ul>

          <p>
          🌍 Applications & Use Cases :-
        </p>
        <ul style={{ listStyleType: 'disc', textAlign: 'left' }}>
          <li>Industrial manufacturing units</li>
          <li>Commercial complexes and office parks</li>
          <li>Residential townships and housing societies</li>
          <li>Hospitals and healthcare centers</li>
          <li>Educational institutions</li>
          <li>Agricultural and irrigation systems</li>
          </ul>

          <p>
          At Jainco Group, we believe that access to clean and safe water is a fundamental right, 
          not a privilege. Through our state-of-the-art water treatment solutions, we are not only 
          solving complex water challenges but also contributing to a healthier and more sustainable future. 
          With a commitment to quality, innovation, and customer satisfaction, Jainco Group continues to lead 
          the way in building a cleaner, greener tomorrow.
          </p>

      </div>
      </div>

    </div>
  );
};

export default WaterTreatmentPlants;
