import React from 'react';

export default function ProjectPreview(props) {

    const { projectInfo, currentView } = props;

    if (currentView === 'full') {
        return (
            <div className='project-preview'>
                <a href={projectInfo.liveUrl} target='_blank' rel='noopener noreferrer'>
                    <video 
                        className='preview-video' 
                        loop
                        muted
                        onMouseEnter={(e) => {
                            e.target.play();
                        }}
                        onMouseLeave={(e) => {
                            e.target.pause();
                        }}
                        playsInline
                    >
                        <source src={`./video/${projectInfo.previewWebm}`} type="video/webm" />
                        <source src={`./video/${projectInfo.previewMp4}`} type="video/mp4" />
                    </video>
                </a>
            </div>
        );
    } else {
        return;
    }
}