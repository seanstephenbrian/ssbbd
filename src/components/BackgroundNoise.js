import React from 'react';

import '../styles/noise.scss';

import { generateBackgroundNoise } from '../js/variable-styles';

export default function BackgroundNoise() {
    return (
        <div className='noise' style={generateBackgroundNoise()}>
        </div>
    )
}