import React, { useEffect, useState } from 'react';

import '../styles/background.scss';

export default function Background(props) {

    const { variableStyles } = props;
    
    return (
        <div 
            className="background"
            style={variableStyles.backgroundElement}
        >
            <div
                className='first-div'
                style={variableStyles.firstDiv}
            >
            </div>
            <div
                className='second-div'
                style={variableStyles.secondDiv}
            >
            </div>
        </div>
    )
}