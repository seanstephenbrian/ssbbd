import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import EmailIcon from '../img/icons/email.svg';

import '../styles/contact.scss';

export default function Contact(props) {

    const { currentView } = props;

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
            <section className={`contact ${currentView}`}>
                <h1 className='contact-heading'>
                    contact
                </h1>
                <h2 className='contact-subheading'>
                    whether you're interested in working together or just want to connect, please reach out! i'd love to hear from you.
                </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label className='name-label' htmlFor='from_name'>name:</label>
                    <input className='name-input' type='text' name='from_name' placeholder=' ' required></input>
                    <label className='email-label' htmlFor='from_email'>email:</label>
                    <input className='email-input' type='email' name='from_email' placeholder=' ' ></input>
                    <label className='message-label' htmlFor='message'>message:</label>
                    <textarea className='message-input' name='message' placeholder=' ' required></textarea>
                    <button className='submit-button' type='submit'>
                        <span>send</span>
                        <img className='email-icon' src={EmailIcon} alt=''></img>
                    </button>
                </form>
            </section>
        )
    }

    if (formSubmitted) {
        return (
            <section className='contact submission-confirmation'>
                thanks for reaching out!
            </section>
        )
    }
}