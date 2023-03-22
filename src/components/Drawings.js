import React from 'react';

import '../styles/drawings.scss';

import Drawing1 from '../img/drawings/delicata.png';
import Drawing2 from '../img/drawings/apple-2.png';
import Drawing3 from '../img/drawings/arugula.png';
import Drawing4 from '../img/drawings/apple.png';
import Drawing5 from '../img/drawings/fennel.png';

export default function Drawings() {
    return (
        <div className='drawings'>
            <img className='drawing delicata' src={Drawing1} ></img>
            <img className='drawing apple apple-1' src={Drawing2} ></img>
            <img className='drawing arugula' src={Drawing3 }></img>
            <img className='drawing apple apple-2' src={Drawing4} ></img>
            <img className='drawing fennel' src={Drawing5} ></img>
        </div>
    )
}