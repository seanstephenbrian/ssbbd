import React from 'react';

export default function Project(props) {
    // receive project info as props from Projects component:
    const { projectInfo } = props;

    return (
        <div className='project-card'>
            <div className='title'>
                {projectInfo.title}
            </div>
            <div className='description'>
                {projectInfo.description}
            </div>
            <a href={projectInfo.liveUrl}>
                live link
            </a>
            <a href={projectInfo.gitUrl}>
                git link
            </a>
        </div>
    )
}