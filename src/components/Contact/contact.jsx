import React, { useState } from "react";
import "./contact.css";
import { FaInstagram } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email sent successfully!", result.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FaInstagram />
            <h4>Email</h4>
            <h5>advocate_rupesh</h5>
            <a href="https://www.instagram.com/advocate_rupesh/" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessageLine />
            <h4>Messenger</h4>
            <h5>Kirti Kumar</h5>
            <a href="https://m.me/kirti.kumar" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+918800617452</h5>
            <a href="https://wa.me/918800617452" target="_blank">
              Send Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
          <input type="email" name="name" placeholder="Your Email" required onChange={handleChange} />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
