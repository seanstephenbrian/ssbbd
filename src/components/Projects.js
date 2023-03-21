import React from 'react';

import '../styles/projects.scss';

import Project from './Project';

export default function Projects() {
    return (
        <section className='projects' id='projects'>
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    )
}