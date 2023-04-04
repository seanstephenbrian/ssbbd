import React from 'react';

import '../styles/veg-drawings.scss';

import Drawing1 from '../img/drawings/delicata.png';
import Drawing2 from '../img/drawings/apple-2.png';
import Drawing3 from '../img/drawings/arugula.png';
import Drawing4 from '../img/drawings/apple.png';
import Drawing5 from '../img/drawings/fennel.png';

export default function VegDrawings(props) {

    const { context } = props;

    if (context === 'full') {
        return (
            <div className='drawings'>
                <img className='drawing delicata' alt='' src={Drawing1} ></img>
                <img className='drawing apple apple-1' alt='' src={Drawing2} ></img>
                <img className='drawing arugula' alt='' src={Drawing3 }></img>
                <img className='drawing apple apple-2' alt='' src={Drawing4} ></img>
                <img className='drawing fennel' alt='' src={Drawing5} ></img>
            </div>
        )
    } else if (context === 'minimal-top') {
        return (
            <div className='drawings minimal'>
                <img className='drawing delicata' alt='' src={Drawing1} ></img>
                <img className='drawing apple apple-1' alt='' src={Drawing2} ></img>
                <img className='drawing arugula' alt='' src={Drawing3 }></img>
            </div>
        )
    } else if (context === 'minimal-bottom') {
        return (
            <div className='drawings minimal bottom'>
                <img className='drawing apple apple-2' alt='' src={Drawing4} ></img>
                <img className='drawing fennel' alt='' src={Drawing5} ></img>
            </div>
        )
    }
}