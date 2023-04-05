import React from 'react';

import Noise from '../components/BackgroundNoise';

import '../styles/gradient.scss';

export default function BackgroundGradient(props) {

    // receive generated hex codes and gradient angle from parent:
    const { backgroundStyles } = props;

    return (
        <div className='gradient' style={backgroundStyles}>
        </div>
    )
}