import React, { useEffect, useState } from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';

import '../styles/main.scss';
import VegDrawings from './VegDrawings';
import TopDrawings from './TopDrawings';
import ContactButton from './ContactButton';

function Site() {

    // track whether full view is permitted in state:
    const [fullViewAllowed, setFullViewAllowed] = useState('loading');

    useEffect(() => {
        if (window.screen.width > 500) {
            setFullViewAllowed(true);
        } else {
            setFullViewAllowed(false);
        }
    }, []);


    if (fullViewAllowed === 'loading') {
        return (
            <></>
        )
    } else if (fullViewAllowed === true) {
        return (
            <>
                <Background
                    createBackground={generateBackgroundStyles}
                />
                <div className='site-wrapper'>
                    <ContactButton />
                    <Name />
                    <Intro />
                    <TopDrawings />
                    <Projects />
                    <VegDrawings />
                    <Contact />
                    <Footer />
                </div>
            </>
        );
    } else if (fullViewAllowed === false) {
        return (
            <>
                <div className='site-wrapper'>
                    <Intro fullViewAllowed={false} minimalView={true} />
                    <Projects fullViewAllowed={false} minimalView={true} />
                    <Contact fullViewAllowed={false} minimalView={true} />
                    <Footer fullViewAllowed={false} minimalView={true} />
                </div>
            </>
        )
    }

}

export default Site;
