import React from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';

import '../styles/main.scss';
import ContactForm from './ContactForm';

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
                <ContactForm />
            </div>
        </>
    );
}

export default Site;
