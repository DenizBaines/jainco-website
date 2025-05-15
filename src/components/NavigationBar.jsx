import React, { useState } from "react";
import "./NavigationBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Final hardcoded search list with correct links
  const pageNames = [
    { name: "Home", link: "/" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Company Summary", link: "/company-summary" },
    { name: "Management", link: "/management" },
    { name: "Projects", link: "/projects" },
    { name: "Infrastructure", link: "/infrastructure" },
    { name: "Consulting Wing", link: "/consultation" },
    { name: "Testimonials And Certificates", link: "/testimonial" },
    { name: "Social Commitment", link: "/social" },
    { name: "Water Treatment Plants", link: "/water-treatment-plants" },
    { name: "Plumbing And Sanitation", link: "/plumbing-sanitation" },
    { name: "Drainage System", link: "/drainage-system" },
    { name: "Sewerage Treatment Plants", link: "/sewerage-treatment" },
    { name: "Water Transmission System", link: "/water-treatment-system" },
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "Company Summary", link: "/company-summary" },
        { name: "Management", link: "/management" },
        { name: "Projects", link: "/projects" },
        { name: "Infrastructure", link: "/infrastructure" },
        { name: "Consulting Wing", link: "/consultation" },
        { name: "Testimonials And Certificates", link: "/testimonial" },
        { name: "Social Commitment", link: "/social" },
      ],
    },
    {
      name: "What We Do",
      dropdown: [
        { name: "Water Treatment Plants", link: "/water-treatment-plants" },
        { name: "Plumbing And Sanitation", link: "/plumbing-sanitation" },
        { name: "Drainage System", link: "/drainage-system" },
        { name: "Sewerage Treatment Plants", link: "/sewerage-treatment" },
        { name: "Water Transmission System", link: "/water-treatment-system" },
      ],
    },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/careers" },
  ];

  const filteredPages = pageNames.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchNavigate = (page) => {
    window.location.href = page.link;
  };

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
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <span>{item.name}</span>
            )}

            {item.dropdown && (
              <div className="dropdown-menu">
                {item.dropdown.map((subItem, idx) => (
                  <a key={idx} className="dropdown-item" href={subItem.link}>
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-search-area">
        <button className="search-it-button" onClick={() => setSearchOpen(!searchOpen)}>
          Search It
        </button>

        {searchOpen && (
          <div className="search-dropdown">
            <input
              type="text"
              placeholder="Search a page..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ul className="autocomplete-list">
                {filteredPages.map((page, idx) => (
                  <li key={idx} onClick={() => handleSearchNavigate(page)}>
                    {page.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
