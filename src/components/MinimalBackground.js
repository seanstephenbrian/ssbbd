import React from 'react';
import BackgroundGradient from './BackgroundGradient';
import BackgroundNoise from './BackgroundNoise';

export default function MinimalBackground(props) {

    const { minimalBackgroundStyles } = props;

    return (
        <>
            <BackgroundGradient backgroundStyles={minimalBackgroundStyles} />
            <BackgroundNoise layer='one' />
            <BackgroundNoise layer='two' />
        </>
    )

}