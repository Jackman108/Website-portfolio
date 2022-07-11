import React from 'react';
import './services.css'

const Services = ({ innerRef }) => {
    return (
        <section id='services'>
            <div ref={innerRef}>
                About
            </div>
        </section>
    )
}
export default Services;