import React, { useState } from 'react';

import Typewriter from 'typewriter-effect';

import '../styles/intro.scss';

export default function Intro(props) {

    // receive current view mode & typewriter effect tracking methods as props:
    const { 
        alertRanTypewriter, 
        currentView,
        ranTypewriter } = props;

    // state:
    const [linkVisible, setLinkVisible] = useState(false);

    // typewriter config:
    const typewriterConfig = {
        cursor: '',
        delay: 30,
        loop: false,
        skipAddStyles: true,
        wrapperClassName: 'typewriter-wrapper'
    }

    // variable class names:
    let introClassName;
    let projectsLinkClassName;
    if (currentView === 'minimal') {
        introClassName = 'intro-text intro-text-minimal';
        projectsLinkClassName = 'projects-link projects-link-minimal';
    } else {
        introClassName = 'intro-text';
        projectsLinkClassName = 'projects-link';
    }

    // conditions for intro text render...
    let introText;
    // if it's not minimal mode AND the typewriter hasn't run, run the typewriter:
    if (currentView !== 'minimal' && !ranTypewriter) {
        introText = (
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<p>hello.</p>')
                        .pauseFor(900)
                        .typeString('<p>my name is sean.</p>')
                        .pauseFor(900)
                        .typeString(`<p>i'm a software developer specializing in dynamic and artful digital experiences.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>i have also worked as a chef, farmer, and writer.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>below you'll find links to my recent and noteworthy work on the web.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>thanks for stopping by!</p>`)
                        .pauseFor(900)
                        .callFunction(() => {
                            setLinkVisible(true);
                            alertRanTypewriter();
                        })
                        .start();
                }}
                options={typewriterConfig}
            />
        );
    // otherwise just show the text:
    } else {
        introText = (
            <div className='typewriter-wrapper'>
                    <p>hello!</p>
                    <p>my name is sean.</p>
                    <p>i'm a software developer specializing in dynamic and artful digital experiences.</p>
                    <p>i have also worked as a chef, farmer, and writer.</p>
                    <p>below you'll find links to my recent and noteworthy work on the web.</p>
                    <p>thanks for stopping by!</p>
            </div>
        );
    }

    return (
        <>
            <section className={introClassName}>
                {ranTypewriter.toString()}
                {introText}
            </section>

            {linkVisible && currentView !== 'minimal' ? 
            <button 
                className={projectsLinkClassName}   
                onClick={() => {
                    document.querySelector('#projects-anchor').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                SCROLL TO PROJECTS
            </button> : 
            ''}
        </>
    )
}