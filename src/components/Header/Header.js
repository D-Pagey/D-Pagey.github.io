import React from 'react';

import './Header.css';
import heroImg from '../../imgs/Dogs.jpg';

function Header() {
    return (
        <header className='header'>
            <h1 className='title'>Dan Page</h1>
            <img src={heroImg} alt='Picture of Dan with dogs' 
            className='main-img'/>
        </header>
    )
}

export default Header;