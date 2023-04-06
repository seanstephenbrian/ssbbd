import React from 'react';
import BackgroundNoise from './BackgroundNoise';

export default function MinimalBackground() {

    return (
        <>
            <BackgroundNoise layer='one' />
            <BackgroundNoise layer='two' />
        </>
    )
}