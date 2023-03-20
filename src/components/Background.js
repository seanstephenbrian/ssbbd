import React, { useEffect, useState } from 'react';

import uniqid from 'uniqid';

import '../styles/background.scss';

export default function Background(props) {

    const { variableStyles } = props;

    const axes = (
        <div className='axes'>
            {variableStyles.axes.map((axis, index) => 
                <div className={'axis ' + 'axis-' + index} key={uniqid()} style={axis}></div>
            )}
        </div>
    );
    
    return (
        <div 
            className="background"
            style={variableStyles.backgroundElement}
        >
            <div className='hadrian'></div>

            {axes}
        </div>
    )
}