import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Welcome to Innovate</h1>
            <p>Discover the future of innovation with cutting-edge solutions for your business.</p>
            <div className="hero-buttons">
                <button className="cta-button primary">
                    <FontAwesomeIcon icon={faRocket} /> Get Started
                </button>
                <button className="cta-button secondary">
                    <FontAwesomeIcon icon={faInfoCircle} /> Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
