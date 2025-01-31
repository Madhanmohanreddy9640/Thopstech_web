import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone />
            <span>+91 7989751956</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>info@thopstech.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Service Rd, Subbaiah Reddy Colony, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037</span>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className='view-courses' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
