import React from 'react';
import './Consultation.css';

const Consultation = () => {
  return (
    <div className="consultation-iso">
    <div className="consultation-page">
      <div className="consultation-container">
        <h1 className="page-title">CONSULTATION WING</h1>
        
        <div className="consultation-image-container">
          <img 
            src="images/consulting.jpg" 
            alt="Consultation services" 
            className="consultation-main-image" 
          />
        </div>
        
        <div className="consultation-content">
          <p>
            Jainco Buildcon Pvt. Ltd. is providing consultation to various Govt., semi Govt. and 
            private organizations. With the help of highly qualified engineers and technical experts with us, 
            we provide all type of consultancies to these organizations.
          </p>
          <p>
            Consultancy work includes advise and technical know how such as site investigations, preparation of reports, 
            estimates, tendering etc. including follow up and liason with different departments.
          </p>
          <p>
            We have already provided consultancy services to NDMC for 
            "Redevelopment of Connaught Place – Peer Review of water supply sewerage and drainage system."
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Consultation;