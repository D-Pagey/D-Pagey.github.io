import React from 'react';

import './Header.css';
import heroImg from '../../imgs/Dogs.jpg';

function Header() {
    return (
        <header className='header'>
            <h1 className='title'>Dan Page</h1>
            <img src={heroImg} alt='Dan with dogs' 
            className='main-img'/>
            <p className='intro-copy'>I'm a self taught Front End Developer 
            focussing on working in React.</p>
            <p className='intro-copy'>Below you can see 10+ projects I have
             built in both Vanilla JS and rebuilt in React.</p>
        </header>
    )
}

export default Header;