import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import '../styles/contact-form.scss';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q2lhk3c', 'template_fwlnf07', form.current, 'mSAIZ6QpOOWnDNHJc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    
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