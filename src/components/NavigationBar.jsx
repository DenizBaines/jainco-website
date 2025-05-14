import React, { useState } from "react";
import "./NavigationBar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home" },
    {
      name: "About Us",
      dropdown: ["Who We Are", "Our Team", "Our History"],
    },
    {
      name: "What We Do",
      dropdown: [
        "Water Treatment Plant",
        "Plumbing and Sanitation",
        "Drainage System",
        "Sewerage Treatment Plants",
        "Water Transmission System",
      ],
    },
    { name: "Contact Us" },
    { name: "Careers" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </div>

      <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            {item.name}
            {item.dropdown && (
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
