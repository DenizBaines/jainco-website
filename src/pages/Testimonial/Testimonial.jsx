import React, { useState } from 'react';
import './Testimonial.css';

const certificates = [
  'cert1.jpg',
  'cert2.jpg',
  'cert3.jpg',
  'cert4.jpg',
  'cert5.jpg',
  'cert6.jpg',
  'cert7.jpg',
  'cert8.jpg',
  'cert9.jpg',
  'cert10.jpg',
  'cert11.jpg',
  'cert12.jpg',
    'cert13.jpg',
    'cert14.jpg',
    'cert15.jpg',
    'cert16.jpg',
    'cert17.jpg',
    'cert18.jpg',
   
];

const Testimonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="testimonial-page">
      <h2 className="testimonial-heading">[ TESTIMONIALS AND CERTIFICATES ]</h2>

      <div className="cert-grid">
        {certificates.map((image, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => setSelectedImage(`/certificates/${image}`)}
          >
            <img
              src={`/certificates/${image}`}
              alt={`Certificate ${index + 1}`}
              className="cert-thumbnail"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="cert-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" className="modal-image" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
