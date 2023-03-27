import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import '../styles/projects.scss';

import Drawings from './Drawings';
import Project from './Project';

export default function Projects() {

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
            <Drawings />
            <section className='projects-section-label'>
                <h1 className='project-heading'>PROJECTS</h1>
                <h2 className='project-subheading'>
                    (preview videos play on hover)
                </h2>
            </section>
            <section className='stack-tags'>
                <h2>filter projects by tag:</h2>
                <section className='tag-list'>
                    {stackTags.map((tag) => {
                        let selectedStatus = '';
                        if (tag === selectedTag) {
                            selectedStatus = 'selected';
                        }
                        return (
                            <button
                                className={`stack-tag-sort-btn ${selectedStatus}`}
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
            <section className='projects' id='projects'>
                {projectData.map((project, index) => {
                    if (selectedTag === 'all') {
                        return (
                            <Project 
                                key={uniqid()} 
                                projectInfo={project}
                                updateFilter={setSelectedTag}
                            />
                        )
                    } else if (project.stack.includes(selectedTag)) {
                        return (
                            <Project
                                currentFilter={selectedTag}
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