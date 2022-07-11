import React from 'react';
import './experience.css'

const Experience = ({ innerRef }) => {
    return (
        <section id='experience'>
            <div ref={innerRef}>
                About
            </div>
        </section>
    )
}
export default Experience;