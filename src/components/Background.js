import React, { useEffect, useState } from 'react';

import '../styles/background.scss';

export default function Background(props) {

    const { variableStyles } = props;

    const axes = (
        <div className='axes'>
            {variableStyles.axes.map((axis) => 
                <div style={axis}></div>
            )}
        </div>
    );
    
    return (
        <div 
            className="background"
            style={variableStyles.backgroundElement}
        >
            <div className='hadrian'>
            </div>

            {axes}

            {/* <div className='axes'>
                <div className='axis axis-1' style={variableStyles.axis1}></div>
                <div className='axis axis-2' style={variableStyles.axis2}></div>
                <div className='axis axis-3' style={variableStyles.axis3}></div>
            </div> */}
        </div>
    )
}