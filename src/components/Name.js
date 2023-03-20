import React, { useEffect, useState } from 'react';

import '../styles/name.scss';

export default function Name() {
    const [expanded, setExpanded] = useState(false);

    if (!expanded) {
        return (
            <div
                className='name name-not-expanded'
                onMouseOver={() => {
                    setExpanded(true);
                }}
            >
                <div className='letter s-1'>s</div>
                <div className='letter s-2'>s</div>
                <div className='letter b-1'>b</div>
                <div className='letter b-2'>b</div>
                <div className='letter d'>d</div>
            </div>
        )
    } else {
        return (
            <div
                className='name name-expanded'
                onMouseLeave={() => {
                    setExpanded(false);
                }}
            >
                <div className='letter s-1'>sean</div>
                <div className='letter s-2'>stephen</div>
                <div className='letter b-1'>brian</div>
            </div>
        )
    }
}