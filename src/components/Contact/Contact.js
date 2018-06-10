import React from 'react';

import './Contact.css';

function Contact() {
    return (
        <div className='contact-container' id='contact'>
            <h2 className='subtitle'>Online Profiles</h2>
            <p className='contact-copy'>Online profiles for if you would like to
             get in touch or see my code:</p>
            <div className="icons">
                <a href="https://twitter.com/Pagey64" target="_blank" 
                rel="noopener noreferrer">
                <i className="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https://github.com/D-Pagey" target="_blank" 
                rel="noopener noreferrer">
                <i className="fa fa-github-square fa-3x social"></i></a>
                <a href="https://www.linkedin.com/in/dan-page/" target="_blank" 
                rel="noopener noreferrer">
                <i className="fa fa-linkedin-square fa-3x social"></i></a>
            </div>
        </div>
    )
}

export default Contact;