import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li><button className='nav-button'>About</button></li>
                <li><button className='nav-button'>Projects</button></li>
                <li><button className='nav-button'>Skills</button></li>
                <li><button className='nav-button'>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;