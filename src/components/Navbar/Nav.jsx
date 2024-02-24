import React from "react";
import "./nav.css";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
