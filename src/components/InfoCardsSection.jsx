import React from 'react';
import './InfoCardsSection.css';
import { FaInfo, FaUsers, FaTrophy, FaCog } from 'react-icons/fa';

const InfoCardsSection = () => {
  return (
  
    <section className="info-cards-section">
      <div className="info-cards-container">
        <div className="info-card">
          <div className="icon-container">
            <FaInfo className="info-icon" />
          </div>
          <h3 className="card-title">ABOUT US</h3>
          <h4 className="card-subtitle">INSPIRED BY WATER</h4>
          <p className="card-description">
            We are a ISO 9001-2008 certified company, working in the field of water management services.
          </p>
        </div>

        <div className="info-card">
          <div className="icon-container">
            <FaUsers className="info-icon" />
          </div>
          <h3 className="card-title">SERVICES</h3>
          <h4 className="card-subtitle">KNOW WHAT WE DO</h4>
          <p className="card-description">
            We have expertise in water supply, sewerage, drainage, pumping stations, plumbing, sanitation etc
          </p>
        </div>

        <div className="info-card">
          <div className="icon-container">
            <FaTrophy className="info-icon" />
          </div>
          <h3 className="card-title">TESTEMONIALS</h3>
          <h4 className="card-subtitle">KNOW YOUR CREDENTIALS</h4>
          <p className="card-description">
            We have a large number of certificates and awards which we have won over a period of time!
          </p>
        </div>

        <div className="info-card">
          <div className="icon-container">
            <FaCog className="info-icon" />
          </div>
          <h3 className="card-title">PROJECTS</h3>
          <h4 className="card-subtitle">WHAT ARE WE UPTO</h4>
          <p className="card-description">
            Past work is the best indicator of future too. Know what we have done, to know what we can do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;