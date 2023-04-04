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

    // use state variables to track whether full view is allowed,
    const [fullViewAllowed, setFullViewAllowed] = useState('initializing');
    // if the projects link button has been made visible,
    const [projectsLinkVisible, setProjectsLinkVisible] = useState(false);
    // if the typewriter effect has completed,
    const [ranTypewriter, setRanTypewriter] = useState(false);
    // the currently enabled view type,
    const [currentView, setCurrentView] = useState();
    // and the current background gradient (only used in minimal view):
    const [minimalBackgroundStyles, setMinimalBackgroundStyles] = useState(generateMinimalBackground());

    // method to update the background gradient (again, only used for minimal view):
    function updateBackgroundGradient(e) {
        setMinimalBackgroundStyles(generateMinimalBackground());
    }

    // check screen width on initial render to see if full view should be allowed:
    useEffect(() => {
        if (window.screen.width > 500) {
            setFullViewAllowed(true);
            setCurrentView('full');
        } else {
            setFullViewAllowed(false);
            setCurrentView('minimal');
        }
    }, []);

    // these are the TOGGLE VIEW button render conditions -- only show the button if full view is allowed:
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

    // GENERAL SITE RENDER CONDITIONS:
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
                    <VegDrawings context='minimal-top' ranTypewriter={ranTypewriter} />
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
