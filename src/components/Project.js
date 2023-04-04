import React, { useRef } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectPreview from './ProjectPreview';
import ProjectLinks from './ProjectLinks';
import ProjectStack from './ProjectStack';

export default function Project(props) {

    const cardRef = useRef(null);

    // receive project info as props from Projects component:
    const { 
        currentFilter,
        currentView, 
        projectInfo, 
        updateFilter } = props;

    return (
        <div className={`project-card ${currentView}`} ref={cardRef}>

            <ProjectTitle projectInfo={projectInfo} currentView={currentView} />

            <ProjectThumbnail projectInfo={projectInfo} currentView={currentView} />
        
            <div className='project-description'>
                {projectInfo.description}
            </div>

            <ProjectPreview projectInfo={projectInfo} currentView={currentView} />

            <ProjectLinks projectInfo={projectInfo} />

            <ProjectStack projectInfo={projectInfo} currentFilter={currentFilter} updateFilter={updateFilter} />

        </div>
    )
}