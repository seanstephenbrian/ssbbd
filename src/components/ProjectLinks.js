import React from 'react';

import LinkIcon from '../img/icons/go-to-link.svg';

export default function ProjectLinks(props) {

    const { projectInfo } = props;

    return (
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
    );
}