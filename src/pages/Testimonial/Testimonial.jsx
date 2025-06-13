import React, { useState } from 'react';
import './Testimonial.css';

const certificates = [
  'cer1.jpg',
  'cer2.jpg',
  'cer3.jpg',
  'cer4.jpg',
  'cer5.jpg',
  
  
  'cer11.jpg',
  'cer12.jpg',
  'cer13.jpg',
  'cer14.jpg',
  'cer15.jpg',
  'cer16.jpg',
  'cer17.jpg',
  'cer18.jpg',
  'cer19.jpg',
  'cer20.jpg',
  'cer21.jpg',
  'cer22.jpg',
  'cer23.jpg',
  'cer24.jpg',
  'cer25.jpg',
  'cer26.jpg',
  'cer27.jpg',
  
  'cer30.jpg',
  'cer31.jpg',
  'cer32.jpg',
  'cer33.jpg',
  'cer34.jpg',
  'cer35.jpg',
  'cer36.jpg',
  'cer37.jpg',
  'cer38.jpg',
  'cer39.jpg',
  'cer40.jpg',
  'cer41.jpg',
  'cer42.jpg',
  'cer43.jpg',
  'cer44.jpg',
  'cer45.jpg',
  'cer46.jpg',
  'cer47.jpg',
  'cer48.jpg',
  'cer49.jpg',
  'cer50.jpg',
  'cer51.jpg',
  'cer52.jpg',
  'cer53.jpg',
  'cer54.jpg',
  'cer55.jpg',
  'cer56.jpg',
  'cer57.jpg',
  'cer58.jpg',
  
           
                               

   
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
