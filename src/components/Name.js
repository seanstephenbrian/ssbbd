import React, { useEffect, useState } from 'react';

import '../styles/name.scss';

export default function Name(props) {

    // receive current view mode as props:
    const { currentView } = props;

    const [expanded, setExpanded] = useState(false);

    if (currentView === 'minimal') {
        return (
            <div
                className='name name-not-expanded name-minimal'
            >
                <div className='letter s-1'>s</div>
                <div className='letter s-2'>s</div>
                <div className='letter b-1'>b</div>
                <div className='letter b-2'>b</div>
                <div className='letter d'>d</div>
            </div>
        )
    } else {
        if (!expanded) {
            return (
                <div
                    aria-hidden='true'
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
                    aria-hidden='true'
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
}