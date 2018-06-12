import React from 'react';

import './index.css';
import twitch from '../../imgs/twitch.png';
import wikipedia from '../../imgs/wikipedia.png';
import calculator from '../../imgs/calculator.png';
import tictactoe from '../../imgs/tictactoe.png';

function Projects() {
    return (
        <section className='project-container' id='projects'>
            <h2 className='subtitle'>Projects</h2>
            <a href='https://github.com/d-pagey/calculator' target='_blank' 
            rel='noopener noreferrer'><img className='thumbnail' src={calculator} 
            alt='Calculator Thumbnail' /></a>
            <a href='https://github.com/d-pagey/tictactoe' target='_blank' 
            rel='noopener noreferrer'><img className='thumbnail' src={tictactoe} 
            alt='TicTacToe Thumbnail' /></a>
            <a href='https://github.com/d-pagey/wikipedia' target='_blank' 
            rel='noopener noreferrer'><img className='thumbnail' src={wikipedia} 
            alt='Wikipedia Thumbnail' /></a>
            <a href='https://github.com/d-pagey/twitchtv' target='_blank' 
            rel='noopener noreferrer'><img className='thumbnail' src={twitch} 
            alt='TwitchTV Thumbnail' /></a>
        </section>
    )
}

export default Projects;