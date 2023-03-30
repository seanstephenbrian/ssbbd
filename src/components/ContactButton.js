import React from 'react';

import '../styles/contact-button.scss';

export default function ContactButton() {
    return (
        <button 
            className='contact-button'
            onClick={() => document.querySelector('.contact').scrollIntoView()}
        >
            jump to contact form
        </button>
    )
}