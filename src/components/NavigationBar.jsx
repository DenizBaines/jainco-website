import React, { useState } from "react";
import "./NavigationBar.css";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (tabName) => {
    if (activeDropdown === tabName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(tabName);
    }
  };

  const menuItems = [
    { name: "Home" },
    { name: "About Us", dropdown: ["Who We Are", "Our Team", "Our History"] },
    { name: "What We Do", dropdown: ["Water Treatment Plant", "Product 2", "Product 3"] },
    { name: "Operations", dropdown: ["Operation 1", "Operation 2"] },
    { name: "Investors", dropdown: ["Reports", "Announcements"] },
    { name: "CIRP" },
    { name: "Contact Us" },
    { name: "Careers" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`navbar-item ${
              item.name === "Home" ? "active" : ""
            }`}
            onClick={() => item.dropdown && handleDropdown(item.name)}
          >
            {item.name}
            {item.dropdown && activeDropdown === item.name && (
              <div className="dropdown-menu">
                {item.dropdown.map((subItem, idx) => (
                  <div key={idx} className="dropdown-item">
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-search">
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default NavigationBar;
