import React from 'react';
import './Footer.css';

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
            <li><a href="/">Home</a></li>
            <li><a href="/company-summary">Company Summary</a></li>
            <li><a href="/testimonial">Testimonials and Certificates</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/infrastructure">Our Infrastructure</a></li>
            <li><a href="/consultation">Consultation Wing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li> 
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
            You Know exactly how we can help you! 
            
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Jainco Group. All rights reserved.</p>
        <a href="#top" className="back-to-top">
          <i className="arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;