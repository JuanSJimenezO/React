import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Book Inventory</div>
            <nav>
                <Link to="/" className="nav-button">
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to="/about" className="nav-button">
                    <FontAwesomeIcon icon={faUser} /> About
                </Link>
                <Link to="/contact" className="nav-button">
                    <FontAwesomeIcon icon={faEnvelope} /> Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
