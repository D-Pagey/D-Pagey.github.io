import React from 'react';

import './index.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li><a href='#projects'><button className='nav-button'>Projects</button></a></li>
                <li><a href='#contact'><button className='nav-button'>Contact</button></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;