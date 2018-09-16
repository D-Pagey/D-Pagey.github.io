import React from 'react';

import { NavbarWrapper, NavbarList, NavbarButton } from './styles';

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <li>
          <a href="#projects">
            <NavbarButton>Projects</NavbarButton>
          </a>
        </li>
        <li>
          <a href="#skills">
            <NavbarButton>Skills</NavbarButton>
          </a>
        </li>
        <li>
          <a href="#contact">
            <NavbarButton>Contact</NavbarButton>
          </a>
        </li>
      </NavbarList>
    </NavbarWrapper>
  );
}

export default Navbar;
