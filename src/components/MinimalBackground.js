import React, { useEffect } from 'react';

import BackgroundGradient from './BackgroundGradient';

import '../styles/noise.scss';

export default function MinimalBackground(props) {

    const { minimalBackgroundStyles } = props;

    return (
        <>
            <BackgroundGradient backgroundStyles={minimalBackgroundStyles} />
        </>
    )
}