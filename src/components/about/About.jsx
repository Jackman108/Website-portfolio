import React from 'react';
import './about.css';

const About = ({ innerRef }) => {
    return (
        <section id='about'>
            <div ref={innerRef}>
                About
            </div>
        </section>
    )
}

export default About;
