import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="navbar-titles">
          <a href="#about" className="navbar-links">About</a></li>
          <li className="navbar-titles">
            <a href="#projects" className="navbar-links">Projects</a></li>
            <li className="navbar-titles">
              <a href="#contact" className="navbar-links">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
