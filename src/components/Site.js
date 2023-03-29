import React from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Contact from './Contact';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';

import '../styles/main.scss';

function Site() {
    return (
        <>
            <Background
                    createBackground={generateBackgroundStyles}
            />
            <div className='site-wrapper'>
                <Name />
                <Intro />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default Site;
