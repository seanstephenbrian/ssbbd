import React, { useState } from 'react';

import Typewriter from 'typewriter-effect';

import '../styles/intro.scss';

export default function Intro() {

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

    return (
        <>
            <section className='intro-text'>
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
                                setLinkVisible(true)
                            })
                            .start();
                    }}
                    options={typewriterConfig}
                />
            </section>
            {linkVisible ? 
            <button 
                className='projects-link'
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