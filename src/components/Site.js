import React, { useEffect, useState } from 'react';

import { generateBackgroundStyles} from '../js/variable-styles';

import Background from './Background';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';
import ToggleViewButton from './ToggleViewButton';

import '../styles/main.scss';
import VegDrawings from './VegDrawings';
import TopDrawings from './TopDrawings';
import ContactButton from './ContactButton';

function Site() {

    // track whether full view is permitted in state:
    const [fullViewAllowed, setFullViewAllowed] = useState('initializing');
    // track whether typewriter effect has run in state:
    const [ranTypewriter, setRanTypewriter] = useState(false);
    // and whether the minimal view is currently enabled:
    const [currentView, setCurrentView] = useState();

    useEffect(() => {
        if (window.screen.width > 500) {
            setFullViewAllowed(true);
            setCurrentView('full');
        } else {
            setFullViewAllowed(false);
            setCurrentView('minimal');
        }
    }, []);

    if (fullViewAllowed === 'initializing') {
        return;
    } else if (fullViewAllowed === true && currentView === 'full') {
        return (
            <>
                <Background
                    createBackground={generateBackgroundStyles}
                />
                <div className='site-wrapper'>
                    <ContactButton />
                    <ToggleViewButton 
                        currentView={currentView} 
                        handleClick={() => {
                            setCurrentView('minimal');
                        }}
                    />
                    <Name />
                    <Intro 
                        alertRanTypewriter={() => setRanTypewriter(true)} 
                        ranTypewriter={ranTypewriter} 
                    />
                    <TopDrawings />
                    <Projects />
                    <VegDrawings />
                    <Contact />
                    <Footer />
                </div>
            </>
        );
    } else if (fullViewAllowed === true && currentView === 'minimal') {
        return (
            <>
                <div className='site-wrapper gradient-bg'>
                    <ToggleViewButton 
                        currentView={currentView}
                        handleClick={() => {
                            setCurrentView('full');
                        }}
                    />
                    <Name currentView={currentView} />
                    <Intro 
                        alertRanTypewriter={() => setRanTypewriter(true)} 
                        ranTypewriter={ranTypewriter} 
                        currentView={currentView} 
                    />
                    <Projects currentView={currentView} />
                    <Contact currentView={currentView} />
                    <Footer currentView={currentView} />
                </div>
            </>
        )
    } else if (fullViewAllowed === false) {
        return (
            <>
                <div className='site-wrapper gradient-bg'>
                    <Name currentView={currentView} />
                    <Intro 
                        alertRanTypewriter={() => setRanTypewriter(true)} 
                        ranTypewriter={ranTypewriter} 
                        currentView={currentView} 
                    />
                    <Projects currentView={currentView} />
                    <Contact currentView={currentView} />
                    <Footer currentView={currentView} />
                </div>
            </>
        )
    }

}

export default Site;
