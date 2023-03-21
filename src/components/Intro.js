import React from 'react';

import Typewriter from 'typewriter-effect';

import '../styles/intro.scss';

export default function Intro() {

    // typewriter config:
    const typewriterConfig = {
        cursor: '',
        delay: 30,
        loop: false
    }

    return (
        <section className='intro-text'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('hello.')
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString('my name is sean.')
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2500)
                        .typeString(`i'm a software developer and creator specializing in dynamic digital experiences.`)
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(7000)
                        .typeString(`below you'll find links to my recent and noteworthy projects.`)
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(11000)
                        .typeString(`thanks for stopping by!!!!!!!!`)
                        .start();
                }}
                options={typewriterConfig}
            />
        </section>
    )
}