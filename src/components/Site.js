import React from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Contact from './Contact';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';

import '../styles/main.scss';
import VegDrawings from './VegDrawings';
import TopDrawings from './TopDrawings';

function Site() {

    return (
        <>
            <Background
                    createBackground={generateBackgroundStyles}
            />
            <div className='site-wrapper'>
                <Name />
                <Intro />
                <TopDrawings />
                <Projects />
                <VegDrawings />
                <Contact />
            </div>
        </>
    );
}

export default Site;
