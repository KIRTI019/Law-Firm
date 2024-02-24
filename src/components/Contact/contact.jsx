import React from 'react'
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>kkumar9415.agra@gmail.com</h5>
          <a href='mailto:kkumar9415.agra@gmail.com' target='_blank'>Send Message</a>
        </article>
        <article className='contact_option'>
          <RiMessageLine/>
          <h4>Messenger</h4>
          <h5>Kirti Kumar</h5>
          <a href='https://m.me/kirti.kumar' target='_blank'>Send Message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+919760551161</h5>
          <a href='https://wa.me/919760551161' target='_blank'>Send Message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='name' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact