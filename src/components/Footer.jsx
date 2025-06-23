import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <p>
            We are India's top Water Resource Management Company. We are
            experts in the field of water supply, sewerage, drainage, water/sewage
            pumping stations, fire suppression and housing work
          </p>
        </div>

        <div className="footer-section">
          <h3>NAVIGATION</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company-summary">Company Summary</Link></li>
            <li><Link to="/testimonial">Testimonials and Certificates</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/infrastructure">Our Infrastructure</Link></li>
            <li><Link to="/consultation">Consultation Wing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p className="contact-info">
            <strong>Registered Office:</strong> 3-5, First Floor, L.S.C., 
            BQ Block, DDA Market, Shalimar Bagh, Delhi-110088
          </p>
          <p className="contact-info">
            <strong>Telephone:</strong> (0) 011-27478097, 011-27479430, 011-27478800
          </p>
          <div className="info-iso">
            <p className="contact-info">
              <strong>E-Mail:</strong> info@jaincogroup.com
            </p>
          </div>
          <p className="contact-info">
            <strong>WEBSITE:</strong> www.jaincogroup.com
          </p>
        </div>

        <div className="footer-section">
          <h3>WHAT WE DO</h3>
          <p>
            We are experts in all water management and related services.
            You know exactly how we can help you!
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jainco Group. All rights reserved.</p>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <i className="arrow-up"></i>
         </button>

      </div>
    </footer>
  );
};

export default Footer;
