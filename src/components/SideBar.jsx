import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({ title, menuItems }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">{title}</h2>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="sidebar-menu-item"
          >
            {item.label}
            <span className="arrow">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;