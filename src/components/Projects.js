import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import '../styles/projects.scss';

import Project from './Project';
import UFODrawing from './UFODrawing';

export default function Projects(props) {

    const { currentView } = props;

    // store project data in state:
    const [projectData, setProjectData] = useState([]);

    // store currently selected tag in state:
    const [selectedTag, setSelectedTag] = useState('all');

    // array containing all possible tags:
    const stackTags = [
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
    ];

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
            <div style={{position: 'relative'}}>
                {currentView === 'full' ? <UFODrawing currentView={currentView} /> : ''}
                <h1 className={`projects-section-heading ${currentView}`}>PROJECTS</h1>
            </div>
            <section className={`stack-tags ${currentView}`}>
                <h2>filter projects by tag</h2>
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
                {projectData.map((project) => {
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
                    } else {
                        return;
                    }
                })}
            </section>
        </>
    )
}