import React from 'react';
//import SideBar from '../../components/SideBar';
import './Social.css';
import SocialPhotos from '../../components/SocialPhotos';


const Social = () => {
  // About Us sidebar menu items
  
  //const aboutUsSidebarItems = [
    //{ label: 'Company Summary', path: '/about-us/company-summary' },
   // { label: 'Management', path: '/about-us/management' },
    //{ label: 'Projects', path: '/about-us/projects' },
    //{ label: 'Our Infrastructure', path: '/about-us/infrastructure' },
    //{ label: 'Consultation Wing', path: '/about-us/consultation-wing' },
    //{ label: 'Testimonials and Certificates', path: '/about-us/testimonials' },
    //{ label: 'Careers', path: '/careers' }
  //];

  return (
    <div className="careers-page">
      <div className="careers-container">
        <div className="main-content">
          <h1 className="page-title">SOCIAL COMMITMENT</h1>
          
          {/*
          <div className="careers-image-container">
            <img 
              src="/assets/careers-compass.jpg" 
              alt="Career compass" 
              className="careers-main-image" 
            />
          </div>
          */}
          
          
          <div className="job-posting">
            <h2>SOCIAL COMMITMENTS OF THE MANAGEMENT AND THE COMPANY.</h2>
            <p>
            The social commitments includes providing skilling and education to the underprivileged leading to Nation Building and 
            holistic development of remote rural and tribal villages. The company proudly supports Ekal Abhiyan( recipient of prestigious 
            Gandhi Peace Prize 2017 from Hon’ble President & Prime Minister of India) affiliated various organization working for 
            Ekal Movement towards this noble cause. Our firm & its key management is regularly supporting the following organisations :-
            <ul>
                <li>1. Ekal Abhiyan Trust and other affiliated organizations working of Ekal Vidyalaya Movement</li>
                <li>2. Samkalp- Run by Madhav Sharshti Nyas</li>
                <li>3. CHAUPAL</li>
                <li>4. Agroha Medical College, Haryana</li>
                <li>5. Maharaja Agrasen Hospital, Punjabi Bagh, Delhi</li>
                <li>6. Maharaja Agrasen Technical Education society running Engineering and Management institute in Rohini, Delhi </li>
                <li>7. Balaji Nirogdham- A Naturopathy Treatment Institute situated near Alipur, Delhi</li>
                <li>8. Salasar Dham Vikas Samiti, Rajasthan</li>
            </ul>
            </p>
          </div>
          <div className="social-photos">
            <SocialPhotos />
            
            </div>
        </div>
        
        {/*
        <div className="sidebar-container">
          <SideBar 
            title="ABOUT US" 
            menuItems={aboutUsSidebarItems} 
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default Social;

