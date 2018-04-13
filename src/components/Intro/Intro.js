import React from 'react';

import './Intro.css';
import Paintball from './paintball.jpg';

function Intro() {
  return (
    <section className="intro" id="about">
      <span className="image-container">
        <img src={Paintball} alt="paintballer" className="main-image" />
      </span>
      <div className="intro-message">
        <p className="intro-message--text">Welcome to my FreeCodeCamp basic portfolio,
             this is the 2nd project in the Front End Developer Certification.</p>
        <p className="intro-message--text2">When I'm not coding, I'm either playing
            tournament paintball, climbing or playing 5-a-side football.</p>
      </div>
    </section>
  )
}

export default Intro;
