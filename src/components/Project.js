import React from 'react';

export default function Project(props) {
    // receive project info as props from Projects component:
    const { projectInfo } = props;

    return (
        <div className='project-card'>
            <div className='project-title'>
                {projectInfo.title}
            </div>
            <div className='project-description'>
                {projectInfo.description}
            </div>
            <a class='project-link live-link' href={projectInfo.liveUrl}>
                LIVE DEMO
            </a>
            <a class='project-link gh-link' href={projectInfo.gitUrl}>
                GITHUB REPO
            </a>
        </div>
    )
}