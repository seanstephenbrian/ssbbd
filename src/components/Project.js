import React from 'react';

export default function Project(props) {
    // receive project info as props from Projects component:
    const { projectInfo } = props;

    return (
        <div className='project-card'>
            <div className='project-title'>
            {
                projectInfo.liveUrl ?
                <a className='project-title-link' href={projectInfo.liveUrl} target='_blank' rel='noopener noreferrer'>
                    {projectInfo.title}
                </a> :
                projectInfo.title
            }
            </div>
            <div className='project-description'>
                {projectInfo.description}
            </div>
            <div className='project-preview'>
                {
                    projectInfo.previewPath ?
                    <video 
                        autoPlay
                        className='preview-video' 
                        loop
                        muted
                        src={projectInfo.previewPath}
                    >
                    </video> :
                    '' 
                }
            </div>
            <div className='project-links'>
                {
                    projectInfo.liveUrl ?
                    <a className='project-link live-link' href={projectInfo.liveUrl} target='_blank' rel='noopener noreferrer'>
                        LIVE DEMO
                    </a> :
                    ''
                }
                <a className='project-link gh-link' href={projectInfo.gitUrl} target='_blank' rel='noopener noreferrer'>
                    GITHUB REPO
                </a>
            </div>
        </div>
    )
}