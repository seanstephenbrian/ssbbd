import React from 'react';

import { hex as generateHex } from '../js/gen';

export default function Project(props) {
    // receive project info as props from Projects component:
    const { projectInfo } = props;

    const boxShadowStyle = `0 0 calc(1*var(--rvv)) ${generateHex()}`;

    return (
        <div 
            className='project-card'
            style={{
                boxShadow: boxShadowStyle
            }}
        >
            <div className='project-title'>
                {projectInfo.title}
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
            <a className='project-link live-link' href={projectInfo.liveUrl}>
                LIVE DEMO
            </a>
            <a className='project-link gh-link' href={projectInfo.gitUrl}>
                GITHUB REPO
            </a>
        </div>
    )
}