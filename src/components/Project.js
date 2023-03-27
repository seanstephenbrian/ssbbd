import React from 'react';

import LinkIcon from '../img/icons/go-to-link.svg';

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
                        <span>LIVE DEMO</span>
                        <img className='link-icon' src={LinkIcon} alt=''></img>
                    </a> :
                    ''
                }
                <a className='project-link gh-link' href={projectInfo.gitUrl} target='_blank' rel='noopener noreferrer'>
                    <span>GITHUB REPO</span>
                    <img className='link-icon' src={LinkIcon} alt=''></img>
                </a>
            </div>
            <div className='project-stack'>
                {projectInfo.stack.map((item) => {
                    return (
                        <div 
                            className={`stack-item ${item}-tag`}
                            style={{
                                backgroundColor: `var(--${item}-tag-bg)`
                            }}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}