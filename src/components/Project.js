import React, { useState } from 'react';

import uniqid from 'uniqid';

import LinkIcon from '../img/icons/go-to-link.svg';

export default function Project(props) {

    // receive project info as props from Projects component:
    const { currentFilter, projectInfo, updateFilter } = props;

    // track preview video loading status in state:
    const [isLoading, setIsLoading] = useState(true);

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
                    className='preview-video' 
                    loop
                    muted
                    onLoadedData={() => {
                        setIsLoading(false);
                    }}
                    onMouseEnter={(e) => {
                        e.target.play();
                    }}
                    onMouseLeave={(e) => {
                        e.target.pause();
                    }}
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
                    let selectedStatus = '';
                    if (item === currentFilter) {
                        selectedStatus = 'selected';
                    }
                    return (
                        <div 
                            className={`stack-item ${item}-tag ${selectedStatus}`}
                            key={uniqid()}
                            onClick={(e) => {
                                updateFilter(e.target.innerText);
                            }}
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