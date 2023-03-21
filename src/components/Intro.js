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
                        .typeString(`i'm a software developer specializing in dynamic & artful digital experiences.`)
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(6000)
                        .typeString(`i have also worked as a chef, farmer, and writer.`)
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(9000)
                        .typeString(`below you'll find links to my recent and noteworthy work on the web.`)
                        .start();
                }}
                options={typewriterConfig}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(12000)
                        .typeString(`thanks for stopping by!!!!!!!!`)
                        .start();
                }}
                options={typewriterConfig}
            />
        </section>
    )
}