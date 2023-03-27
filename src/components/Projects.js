import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import '../styles/projects.scss';

import Drawings from './Drawings';
import Project from './Project';

export default function Projects() {

    // store project data in state:
    const [projectData, setProjectData] = useState([]);

    // fetch project info from local json file on component mount:
    useEffect(() => {
        fetch('./projects.json')
        .then(res => res.json())
        .then((projectData) => {
            setProjectData(projectData.projects);
        });
    }, []);

    return (
        <>
            <Drawings />
            <h1 className='project-heading'>PROJECTS</h1>
            <section className='projects' id='projects'>
                {projectData.map((project, index) => {
                    return (
                        <Project key={uniqid()} projectInfo={project} />
                    )
                })}
            </section>
        </>
    )
}