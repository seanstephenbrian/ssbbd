import React, { useEffect, useState } from 'react';

import { generateFullBackground, generateMinimalBackground } from '../js/variable-styles';

import Background from './Background';
import Contact from './Contact';
import Footer from './Footer';
import Gradient from './Gradient';
import Intro from './Intro';
import Name from './Name';
import Projects from './Projects';
import ToggleViewButton from './ToggleViewButton';

import '../styles/main.scss';

import VegDrawings from './VegDrawings';
import ContactButton from './ContactButton';

function Site() {

    // track whether full view is permitted:
    const [fullViewAllowed, setFullViewAllowed] = useState('initializing');
    // track whether projects link button should be visible:
    const [projectsLinkVisible, setProjectsLinkVisible] = useState(false);
    // track whether typewriter effect has already run:
    const [ranTypewriter, setRanTypewriter] = useState(false);
    // and track whether the minimal view is currently enabled:
    const [currentView, setCurrentView] = useState();

    // minimal view background gradient:
    const [minimalBackgroundStyles, setMinimalBackgroundStyles] = useState(generateMinimalBackground());

    // check screen width on initial render to see if full view should be allowed:
    useEffect(() => {
        // if ('performance' in window) {
        //     window.addEventListener('load', () => {
        //         const pageTime = performance.getEntriesByType('navigation')[0].toJSON();
        //         console.log(pageTime.loadEventEnd);
        //     }); 
        // }
        if (window.screen.width > 500) {
            setFullViewAllowed(true);
            setCurrentView('full');
        } else {
            setFullViewAllowed(false);
            setCurrentView('minimal');
        }
    }, []);

    // toggle view button render conditions -- only show the button if full view is allowed:
    let toggleViewButton;
    if (fullViewAllowed) {
        toggleViewButton = (
            <ToggleViewButton 
                currentView={currentView}
                handleClick={() => {
                    if (currentView === 'minimal') setCurrentView('full');
                    if (currentView === 'full') setCurrentView('minimal');
                }}
            />
        );
    } else if (!fullViewAllowed) {
        toggleViewButton = '';
    }

    // SITE RENDER CONDITIONS:
    // don't show anything if initializing...
    if (fullViewAllowed === 'initializing') {
        return;
    // full view render conditions:
    } else if (currentView === 'full') {
        return (
            <>
                <Background
                    createBackground={generateFullBackground}
                />
                <div className='site-wrapper'>
                    <ContactButton />
                    {toggleViewButton}
                    <Name />
                    <Intro 
                        alertProjectsLinkVisible={() => setProjectsLinkVisible(true)}
                        alertRanTypewriter={() => setRanTypewriter(true)} 
                        linkVisible={projectsLinkVisible}
                        ranTypewriter={ranTypewriter} 
                    />
                    <Projects currentView={currentView} />
                    <VegDrawings context='full' />
                    <Contact />
                    <Footer />
                </div>
            </>
        );
    // minimal view render conditions:
    } else if (currentView === 'minimal') {

        function updateBackgroundGradient(e) {
            setMinimalBackgroundStyles(generateMinimalBackground());
        }

        return (
            <>
                <Gradient backgroundStyles={minimalBackgroundStyles} />
                <div 
                    className='site-wrapper'
                    onClick={updateBackgroundGradient}
                >
                    {toggleViewButton}
                    <Name currentView={currentView} />
                    <Intro 
                        alertProjectsLinkVisible={() => setProjectsLinkVisible(true)}
                        alertRanTypewriter={() => setRanTypewriter(true)} 
                        linkVisible={projectsLinkVisible}
                        ranTypewriter={ranTypewriter} 
                        currentView={currentView} 
                    />
                    <VegDrawings context='minimal-top' />
                    <Projects currentView={currentView} />
                    <VegDrawings context='minimal-bottom' />
                    <Contact currentView={currentView} />
                    <Footer currentView={currentView} />
                </div>
            </>
        )
    }
}

export default Site;
