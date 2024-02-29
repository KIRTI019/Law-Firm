import React from "react";
import "./about.css";
import ME from "../../assests/photo1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
          <div className="about_me-image">
            <img src={ME} alt="me" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>0 years</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>0</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+</small>
            </article>
          </div>
          <p>
            Welcome to Ray Legal, a prestigious law firm located in Delhi,
            India. With a team of experienced lawyers, we are dedicated to
            providing top-notch legal services to our clients. <br />
            Our commitment to excellence, integrity, and client satisfaction
            sets us apart in the legal industry. Trust Ray Legal for all your
            legal needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
