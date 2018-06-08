import React from 'react';

import './Projects.css';

function Projects() {
    return (
        <section className='project-container' id='projects'>
            <h2 className='subtitle'>Projects</h2>
            <img className='thumbnail' 
            src='https://picsum.photos/275/250?image=0' alt='1st project' />
            <img className='thumbnail' 
            src='https://picsum.photos/275/250?image=1081' alt='2nd project' />
            <img className='thumbnail' 
            src='https://picsum.photos/275/250?image=1073' alt='3rd project' />
            <img className='thumbnail' 
            src='https://picsum.photos/275/250?image=998' alt='4th project' />
        </section>
    )
}

export default Projects;