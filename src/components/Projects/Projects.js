import React from 'react';

import './Projects.css';
import twitch from '../../imgs/twitch.png';
import wikipedia from '../../imgs/wikipedia.png';
import calculator from '../../imgs/calculator.png';
import tictactoe from '../../imgs/tictactoe.png';

function Projects() {
    return (
        <section className='project-container' id='projects'>
            <h2 className='subtitle'>Projects</h2>
            <img className='thumbnail' 
            src={tictactoe} alt='3rd project' />
            <img className='thumbnail' 
            src={twitch} alt='1st project' />
            <img className='thumbnail' 
            src={calculator} alt='2nd project' />
            <img className='thumbnail' 
            src={wikipedia} alt='4th project' />
        </section>
    )
}

export default Projects;