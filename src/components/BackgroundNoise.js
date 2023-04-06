import React, { useEffect, useState } from 'react';

import '../styles/noise.scss';

import { noiseGradient, noiseFilter, noiseOpacity, randomNum } from '../js/gen';

import Noise1 from '../img/noise/noise1.svg';
import Noise2 from '../img/noise/noise2.svg';
import Noise3 from '../img/noise/noise3.svg';
import Noise4 from '../img/noise/noise4.svg';
import Noise5 from '../img/noise/noise5.svg';

export default function BackgroundNoise(props) {

    const { layer } = props;

    const [noiseNum, setNoiseNum] = useState(randomNum(6, 1));
    const [noiseSvg, setNoiseSvg] = useState();

    useEffect(() => {
        if (noiseNum === 1) setNoiseSvg(Noise1);
        if (noiseNum === 2) setNoiseSvg(Noise2);
        if (noiseNum === 3) setNoiseSvg(Noise3);
        if (noiseNum === 4) setNoiseSvg(Noise4);
        if (noiseNum === 5) setNoiseSvg(Noise5);
    }, [noiseNum]);

    return (
        <div 
            className={`noise noise-${layer}`}
            style={{
                backgroundColor: 'white',
                background: `${noiseGradient()}, url(${noiseSvg})`,
                filter: noiseFilter(),
                opacity: noiseOpacity()
            }}
        >
        </div>
    )
}