import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import '../styles/contact-form.scss';

export default function Contact() {

    // track form status in state:
    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q2lhk3c', 'template_fwlnf07', form.current, 'mSAIZ6QpOOWnDNHJc')
            .then(() => {
                setFormSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    if (!formSubmitted) {
        return (
            <section className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <section className='form-section'>
                        <label htmlFor='from_name'>your name:</label>
                        <input type='text' name='from_name' required></input>
                    </section>
                    <section className='form-section'>
                        <label htmlFor='from_email'>your email:</label>
                        <input type='email' name='from_email'></input>
                    </section>
                    <section className='form-section'>
                        <label htmlFor='message'>your message:</label>
                        <textarea name='message'></textarea>
                    </section>
                    <input type='submit'></input>
                </form>
            </section>
        )
    }

    if (formSubmitted) {
        return (
            <section className='contact-form submission-confirmation'>
                thanks for reaching out!
            </section>
        )
    }
}