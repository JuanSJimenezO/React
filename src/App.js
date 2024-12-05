import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

const App = () => {
    const [showAbout, setShowAbout] = useState(false);

    const handleAboutClick = () => {
        console.log('About button clicked!'); // Depuración
        setShowAbout(true);
    };

    const handleCloseAbout = () => {
        setShowAbout(false); // Cierra la biografía
    };

    return (
        <div>
            <Header onAboutClick={handleAboutClick} />
            {showAbout ? (
                <AboutMe isVisible={showAbout} onClose={handleCloseAbout} />
            ) : (
                <HeroSection />
            )}
            <Footer />
        </div>
    );
};

export default App;
