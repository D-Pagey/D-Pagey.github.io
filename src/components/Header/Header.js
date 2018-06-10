import React from 'react';

import './Header.css';
import heroImg from '../../imgs/Dogs.jpg';

function Header() {
    return (
        <header className='header'>
            <img src={heroImg} alt='Dan with dogs' 
            className='main-img'/>
            <div className='header-text'>
                <h1 className='title'>Dan Page</h1>
                <p className='intro-copy'>I'm a self taught Front End Developer 
                focussing on building apps in React.</p>
                <p className='intro-copy'>Below is a selection of the 10+ projects I
                 have built in Vanilla JS and then rebuilt in React.</p> 
            </div>
        </header>
    )
}

export default Header;