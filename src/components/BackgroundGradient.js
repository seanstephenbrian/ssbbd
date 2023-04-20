import React from 'react';

import '../styles/gradient.scss';

export default function BackgroundGradient(props) {

    // receive generated hex codes and gradient angle from parent:
    const { backgroundStyles } = props;

    return (
        <div className='gradient' style={backgroundStyles}>
        </div>
    )
}