import React, { useState } from 'react';
import './SocialPhotos.css';

const images = [
  require('./SocialPhotosAssets/social1.jpg'),
  require('./SocialPhotosAssets/social2.jpg'),
  require('./SocialPhotosAssets/social3.jpg'),
  require('./SocialPhotosAssets/social4.jpg'),
  require('./SocialPhotosAssets/social5.jpg'),
  require('./SocialPhotosAssets/social6.jpg'),
  require('./SocialPhotosAssets/social7.jpg'),
  require('./SocialPhotosAssets/social8.jpg'),  
  require('./SocialPhotosAssets/social9.jpg'),
  require('./SocialPhotosAssets/social10.jpg'),
  require('./SocialPhotosAssets/social11.jpg'), 
  require('./SocialPhotosAssets/social12.jpg'),
  require('./SocialPhotosAssets/social13.jpg'),
  require('./SocialPhotosAssets/social14.jpg'),
  require('./SocialPhotosAssets/social15.jpg'),
  require('./SocialPhotosAssets/social16.jpg'),
];

const SocialPhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="social-photos-container">
      <h1 className="social-photos-main-heading">_____</h1>
      
      <div className="social-description">
        <p>
          At JainCo, we believe in giving back to the communities we serve. Through our various social initiatives, 
          we aim to make a positive impact on society and the environment.
        </p>
      </div>
      
      <div className="social-photos-wrapper">
        <h2 className="social-photos-heading">Our Social Activities</h2>

        <div className="social-photos-grid">
          {images.map((img, index) => (
            <div className="social-photo-container" key={index}>
              <img
                src={img}
                alt={`Social Activity ${index + 1}`}
                className="social-photo"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="social-modal" onClick={() => setSelectedImage(null)}>
          <div className="social-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="social-modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Enlarged View" className="social-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialPhotos;