import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import '../styles/projects.scss';

import Project from './Project';

export default function Projects(props) {

    const { currentView } = props;

    // store project data in state:
    const [projectData, setProjectData] = useState([]);
    // store reference to all possible tags:
    const [stackTags, setStackTags] = useState([
        'all',
        'css',
        'express',
        'firebase',
        'html',
        'javascript',
        'jest',
        'mongoose',
        'node',
        'pug',
        'react',
        'sass',
        'webpack'
    ]);
    const [selectedTag, setSelectedTag] = useState('all');

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
            <div id='projects-anchor' aria-hidden={true} style={{paddingTop: '50px'}}></div>
            <h1 className={`projects-section-heading ${currentView}`}>
                PROJECTS
            </h1>
            <section className={`stack-tags ${currentView}`}>
                <h2>filter projects by tag:</h2>
                <section className='tag-list'>
                    {stackTags.map((tag) => {
                        let selectedStatus = '';
                        if (tag === selectedTag) {
                            selectedStatus = 'selected';
                        }
                        return (
                            <button
                                className={`stack-tag-btn ${selectedStatus} ${currentView}`}
                                key={uniqid()}
                                onClick={(e) => {
                                    setSelectedTag(e.target.innerText);
                                }}
                                style={{ backgroundColor: `var(--${tag}-tag-bg)` }}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </section>
            </section>
            <section className={`projects ${currentView}`} id='projects'>
                {projectData.map((project, index) => {
                    if (selectedTag === 'all') {
                        return (
                            <Project
                                currentView={currentView} 
                                key={uniqid()} 
                                projectInfo={project}
                                updateFilter={setSelectedTag}
                            />
                        )
                    } else if (project.stack.includes(selectedTag)) {
                        return (
                            <Project
                                currentFilter={selectedTag}
                                currentView={currentView}
                                key={uniqid()}
                                projectInfo={project} 
                                updateFilter={setSelectedTag}
                            />
                        )
                    }
                })}
            </section>
        </>
    )
}