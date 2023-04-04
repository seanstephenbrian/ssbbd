import React from 'react';

import uniqid from 'uniqid';

export default function ProjectStack(props) {

    const { projectInfo, currentFilter, updateFilter } = props;

    return (
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
                            document.querySelector('#projects-anchor').scrollIntoView();
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
    )
}