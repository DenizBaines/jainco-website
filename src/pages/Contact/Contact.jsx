import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-iso">
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-map">
     
      <iframe 
           title="Jainco Group Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.810397160367!2d77.14588209986685!3d28.707434245436843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d022999b9d2ab%3A0x791ee58889f58bcb!2sJainco%20Buildcon%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747134282382!5m2!1sen!2sin" 
           width="100%" 
           height="450" 
           //style="border:0;" 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"
           allowFullScreen=""
           referrerPolicy="no-referrer-when-downgrade"
          >
      </iframe>

      </div>

      <div className="contact-card">
        <h3>Get in Touch</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Registered Office</strong></td>
              <td>3-5, First Floor, L.S.C., BQ Block, DDA Market, Shalimar Bagh, Delhi-110088</td>
            </tr>
            <tr>
              <td><strong>Telephone</strong></td>
              <td>(0) 011-27478097, 011-27479430, 011-27478800</td>
            </tr>
            <tr>
              <td><strong>Fax</strong></td>
              <td>011-27473751</td>
            </tr>
            <tr>
              <td><strong>E-Mail</strong></td>
              <td><a href="mailto:info@jaincogroup.com">info@jaincogroup.com</a></td>
            </tr>
            <tr>
              <td><strong>Website</strong></td>
              <td><a href="\" target="_blank" rel="noopener noreferrer">www.jaincogroup.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Contact;
