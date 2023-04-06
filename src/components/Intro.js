import React from 'react';

import Typewriter from 'typewriter-effect';

import '../styles/intro.scss';

export default function Intro(props) {

    // receive current view mode & typewriter effect tracking methods as props:
    const { 
        alertRanTypewriter,
        alertProjectsLinkVisible,
        currentView,
        linkVisible,
        ranTypewriter,
        noTypewriter } = props;

    // typewriter config:
    const typewriterConfig = {
        cursor: '',
        delay: 30,
        loop: false,
        skipAddStyles: true,
        wrapperClassName: 'typewriter-wrapper'
    }

    // conditions for intro text render...
    let introText;
    // if the typewriter effect has not yet run to completion, then run the typewriter:
    if (!ranTypewriter && !noTypewriter) {
        introText = (
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<p>hello.</p>')
                        .pauseFor(900)
                        .typeString('<p>my name is sean.</p>')
                        .pauseFor(900)
                        .typeString(`<p>i'm a software developer specializing in dynamic and imaginative digital experiences.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>i have also worked as a chef, farmer, and writer.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>below you'll find links to my recent and noteworthy work on the web.</p>`)
                        .pauseFor(900)
                        .typeString(`<p>thanks for stopping by!</p>`)
                        .pauseFor(900)
                        .callFunction(() => {
                            alertProjectsLinkVisible();
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
                <p>i'm a software developer specializing in dynamic and imaginative digital experiences.</p>
                <p>i have also worked as a chef, farmer, and writer.</p>
                <p>below you'll find links to my recent and noteworthy work on the web.</p>
                <p>thanks for stopping by!</p>
            </div>
        );
    }

    return (
        <>
            <section className={`intro-text ${currentView}`}>
                {introText}
            </section>

            {linkVisible && currentView !== 'minimal' ? 
            <button 
                className='projects-link'   
                onClick={() => {
                    document.querySelector('.projects-section-heading').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                JUMP TO PROJECTS
            </button> : 
            ''}
        </>
    )
}