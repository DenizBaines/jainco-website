import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-map">
        <iframe
          title="Jainco Group Location"
          src="https://www.google.com/maps?q=3-5,+First+Floor,+L.S.C.,+BQ+Block,+DDA+Market,+Shalimar+Bagh+Delhi-110088&output=embed"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-card">
        <h3>Get in Touch</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Registered Office</strong></td>
              <td>3-5, First Floor, L.S.C., BQ Block, DDA Market, Shalimar Bagh Delhi-110088.</td>
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
  );
};

export default Contact;
