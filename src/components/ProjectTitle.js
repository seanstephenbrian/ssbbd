import React from 'react';

export default function ProjectTitle(props) {

    const { projectInfo, currentView } = props;

    if (projectInfo.liveUrl) {
        return (
            <div className='project-title'>
                <a className='project-title-link' href={projectInfo.liveUrl} target='_blank' rel='noopener noreferrer'>
                    {
                        // special formatting for BATTLESQUARES in minimal view:
                        projectInfo.title === 'battlesquares' && currentView === 'minimal' ?
                        'battle squares' :
                        projectInfo.title
                    }
                </a>
            </div>

        )
    } else {
        return (
            <div className='project-title'>
                {projectInfo.title}
            </div>
        )
    }
}