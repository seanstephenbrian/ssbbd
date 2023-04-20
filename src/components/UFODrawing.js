import React from 'react';

import UFO from '../img/drawings/ufo.png';

import '../styles/ufo-drawing.scss';

export default function UFODrawing(props) {

    const { currentView } = props;

    return (
        <div className={`ufo-container ${currentView}`}>
            <img className='ufo-drawing' src={UFO} alt='' />
        </div>
    )
}