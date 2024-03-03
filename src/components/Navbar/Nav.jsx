import React, { useState } from "react";
import "./nav.css";
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const drawer = (
      <div className="permalinks">
        <a href="#">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </div>
  )

  return (
    <nav>
      <div>
        <a href="#" className="nav_logo">
          Ray Legal
        </a>
      </div>
      <div className="permalinks">
        <a href="#">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </div>

      <button className="draw" onClick={toggleMobileMenu}>{isMobileMenuOpen ? <FaTimes /> : <FaBars />}</button>

      {isMobileMenuOpen && (
        <div className="slide">
          <button onClick={toggleMobileMenu}><FaTimes /></button>
          <ul className="list">
          <li>
          <a href="#">HOME</a>
          </li>
          <li>
          <a href="#about">ABOUT</a>
          </li>
          <li>
          <a href="#services">SERVICES</a>
          </li>
          <li>
          <a href="#contact">CONTACT</a>
          </li>
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
