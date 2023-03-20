import React, { useEffect, useState } from 'react';

import uniqid from 'uniqid';

import '../styles/background.scss';

export default function Background(props) {

    const { createBackground } = props;

    const [backgroundStyles, setBackgroundStyles] = useState(createBackground());

    const axes = (
        <div className='axes'>
            {backgroundStyles.axes.map((axis, index) => 
                <div 
                    className={'axis axis-' + index} 
                    key={uniqid()}
                    style={axis}
                >
                </div>
            )}
        </div>
    );
    
    return (
        <div 
            className="background"
            onClick={() => {
                setBackgroundStyles(createBackground());
            }}
            style={backgroundStyles.backgroundElement}
        >
            {axes}
        </div>
    )
}