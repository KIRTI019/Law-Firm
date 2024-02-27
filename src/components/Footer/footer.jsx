import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Ray Legal
      </a>

      <div className="footer_socials">
        <a href="https://www.facebook.com/kirti.kumar.946954">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/elpha_019">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/KIRTIKUMAR019">
          <FaSquareXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ray Legal. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
