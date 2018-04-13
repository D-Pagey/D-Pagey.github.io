import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact-me-title" id="contact">Contact Me</h3>
      <div className="contact-me">
        <p className="contact-me-text">Online profiles for if you would like to
          get in touch or see my code:</p>

        <div className="icons">
          <a href="https://twitter.com/Pagey64" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter-square fa-3x social"></i></a>
            <a href="https://github.com/D-Pagey" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square fa-3x social"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
