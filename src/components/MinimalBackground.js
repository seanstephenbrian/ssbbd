import React from 'react';

import BackgroundGradient from './BackgroundGradient';
import BackgroundNoise from './BackgroundNoise';

import '../styles/noise.scss';

export default function MinimalBackground(props) {

    const { minimalBackgroundStyles } = props;

    return (
        <>
            <div className='minimal-bg-overlay'></div>
            <BackgroundGradient style={minimalBackgroundStyles} />
            <BackgroundNoise layer='one' />
            <BackgroundNoise layer='two' />
        </>
    )
}