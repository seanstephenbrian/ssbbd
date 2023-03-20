import React from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Header from './Name';

import '../styles/main.scss';

function Site() {
    return (
        <>
            <Background
                    createBackground={generateBackgroundStyles}
            />
            <div className='site-wrapper'>
                <Header />
            </div>
        </>
    );
}

export default Site;
