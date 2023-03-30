import React from 'react';

import '../styles/gradient.scss';

export default function Gradient(props) {

    // receive generated hex codes and gradient angle from parent:
    const { backgroundStyles } = props;

    return (
        <div 
            className='gradient'
            style={backgroundStyles}
        >
        </div>
    )
}