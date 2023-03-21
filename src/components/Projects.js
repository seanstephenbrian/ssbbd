import React, { useEffect, useState } from 'react';

import '../styles/projects.scss';

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

    useEffect(() => {
        console.log(projectData);
    }, [projectData])

    return (
        <section className='projects' id='projects'>
            {projectData.map((project) => {
                return (
                    <Project projectInfo={project} />
                )
            })}
        </section>
    )
}