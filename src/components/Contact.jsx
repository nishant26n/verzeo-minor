import React from "react";

const Contact = () => {
  return (
    <form className="contact-container" method="POST" target="_blank">
      <h2>Contact Form</h2>
      <div className="name">
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="email">
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="message">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="btn-container">
        <button type="submit">Send a message</button>
      </div>
    </form>
  );
};

export default Contact;
