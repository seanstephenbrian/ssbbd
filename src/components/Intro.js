import React from 'react';

import Typewriter from 'typewriter-effect';

export default function Intro() {

    // typewriter config:
    const typewriterConfig = {
        cursor: '',
        delay: 100,
        loop: false
    }

    return (
        <section className='intro-text'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('hello, my name is sean!')
                        .pauseFor(2500)
                        .start();
                }}
                options={typewriterConfig}
            />
        </section>
    )
}