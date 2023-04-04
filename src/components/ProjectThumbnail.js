import React from 'react';

export default function ProjectThumbnail(props) {
    
    const { projectInfo, currentView } = props;
    
    if (currentView === 'minimal') {
        return (
            <div className='project-thumbnail'>
            {
                projectInfo.thumbnail ?
                <a href={projectInfo.liveUrl} target='_blank' rel='noopener noreferrer'>
                    <img src={`./thumbnails/${projectInfo.thumbnail}`} alt='' />
                </a> :
                ''
            }
            </div>
        )
    } else {
        return;
    }
}