import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: "bi bi-house-door",
      title: "Location",
      desc: (
        <a href="https://maps.app.goo.gl/16cod79w9Awdrem89" className="contact-link" target="_blank" rel="noopener noreferrer">
         SEASHORE NANOTECH
        </a>
      ),
    },
    {
      id: 2,
      icon: "bi bi-telephone",
      title: "Phone",
      desc: (
        <a href="tel:+919824688824" className="contact-link">
          +91 98246 88824
        </a>
      ),
    },
    {
      id: 3,
      icon: "bi bi-envelope",
      title: "Gmail",
      desc: (
        <a href="mailto:seashorenanotech@gmail.com" className="contact-link">
          seashorenanotech@gmail.com
        </a>
      ),
    },
    {
      id: 4,
      icon: "bi bi-chat-dots",
      title: "Chat",
      desc: (
        <div className="chat-icons">
          <a href="https://wa.me/9824688824" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-messenger"></i>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="contact-container">
       <div className="contact-hero-section">
        <h1>Contact Us</h1>
        <hr></hr>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <i className={`${contact.icon} contact-icon`}></i>
            <h3>{contact.title}</h3>
            <p>{contact.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
