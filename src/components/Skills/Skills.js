import React from 'react';

import './Skills.css';
import github from '../../imgs/github.png';

function Skills() {
    return (
        <section class='skills-section'>
            <h2 className='subtitle'>Tech Skills</h2>
            <img className='skills-ranking' 
            src="https://www.theatlas.com/i/atlas_HJB6ePoq.png" />
            <p className='skills-copy'>I learnt to code through FreeCodeCamp, 
            100DaysOfCode and CodeAcademy.</p>
            <img className='skills-ranking' 
            src={github} />
        </section>
    )
}

export default Skills;





