import React from 'react';

import './Projects.css';
import Wikipedia from './img/Wikipedia.png';
import Weather from './img/Weather.png';
import Quoter from './img/Quoter.png';
import Tribute from './img/Tribute.png';

function Projects() {
  return (
    <div className="projects">
      <h3 className="projects-title" id="projects">Projects</h3>
      <p className="projects-intro">Here is a small selection of the work I've done
         on my Web Dev journey:</p>

      <main className="project-thumbnails">
          <span className="thumbnail-container">
            <a href="https://codepen.io/Pagey/full/wrZRqR" target="_blank" rel="noopener noreferrer">
              <img src={Wikipedia} alt="Wikipedia Viewer" className="thumbnails" /></a></span>
          <span className="thumbnail-container">
            <a href="https://codepen.io/Pagey/full/GMgrwM" target="_blank" rel="noopener noreferrer">
              <img src={Weather} alt="Local Weather App" className="thumbnails" /></a></span>
          <span className="thumbnail-container">
            <a href="https://codepen.io/Pagey/full/eEXRZy/" target="_blank" rel="noopener noreferrer">
              <img src={Quoter} alt="Random Quote Machine" className="thumbnails" /></a></span>
          <span className="thumbnail-container">
            <a href="https://codepen.io/Pagey/full/GmOYdm/" target="_blank" rel="noopener noreferrer">
              <img src={Tribute} alt="Tribute Page" className="thumbnails" /></a></span>
      </main>
    </div>
  );
}

export default Projects;
