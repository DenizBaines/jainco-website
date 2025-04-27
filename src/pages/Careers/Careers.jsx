import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <h1 className="page-title">CAREERS</h1>

      <div className="careers-image-container">
        <img 
          src="/images/careers.jpg" 
          alt="Career compass" 
          className="careers-main-image" 
        />
      </div>

      <div className="job-posting">
        <h2>Experienced Civil Engineers</h2>
        <p>
          Some posts for Civil Engineers, Degree Holders with a minimum experience of 5 years in Water transmission systems, 
          sewer lines of various diameters, sewage pumping stations, under ground reservoirs.
        </p> 
        <p>
          We also need some Civil Engineers preferably degree holders having the experience of executing the works with trench-less technology.
        </p>

        <h2>Fresh Engineers</h2>
        <p>
          We also require fresh engineers, degree holders as well as diploma holders for our site works at different places.
        </p>

        <h2>Supervisors</h2>
        <p>
          We are on the look out for supervisors, who should be able to control various sites of works having work force up to 200 persons.
        </p>

        <p className="email-note">
          If you think you’re qualified, do write to us at <strong>careers@jaincogroup.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default Careers;
