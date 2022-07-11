import React from 'react';
import './contact.css'

const Contact = ({ innerRef }) => {
    return (
        <section id='contact'>
            <div ref={innerRef}>
                About
            </div>
        </section>
    )
}
export default Contact;