import React from 'react';

import './Projects.css';

function Projects() {
    return (
        <section className='project-container'>
            <h2 className='subtitle'>Projects</h2>
            <img className='thumbnail' src='https://picsum.photos/275/250?image=0' />
            <img className='thumbnail' src='https://picsum.photos/275/250?image=1081' />
            <img className='thumbnail' src='https://picsum.photos/275/250?image=1073' />
            <img className='thumbnail' src='https://picsum.photos/275/250?image=998' />
        </section>
    )
}

export default Projects;