import React, { useState } from 'react';
import '../styles.css';

const AboutMe = () => {
    const [isDragging, setIsDragging] = useState(false);

    // Inicia el arrastre
    const handleDragStart = (e) => {
        setIsDragging(true);
        e.dataTransfer.setData('text/plain', 'Thank you for taking the time to read my {About Me} section. It truly means a lot that you showed interest in learning more about who I am and what I’m passionate about. If you have any questions or would like to connect further, feel free to reach out. I’d love to keep the conversation going!');
    };

    // Termina el arrastre
    const handleDragEnd = () => {
        setIsDragging(false);
    };

    // Permitir el evento "drop" en la zona
    const handleDragOver = (e) => {
        e.preventDefault(); // Necesario para permitir el drop
    };

    // Acción al soltar el elemento en la zona
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const data = e.dataTransfer.getData('text/plain');
        alert(`${data}`);
    };

    return (
        <div className="about-page">
            <h1>About Me</h1>
            <img
                src="https://picsum.photos/399"
                alt="Profile"
                className="profile-picture"
            />
            <p>
                Hi, I'm Carolina! I'm passionate about creating innovative solutions and building
                modern, user-friendly interfaces. I specialize in web development and enjoy learning
                new technologies.
            </p>

            {/* Draggable Element */}
            <div
                className="draggable"
                draggable="true"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    backgroundColor: isDragging ? '#e91e63' : '#ff4081', // Cambia el color al arrastrar
                }}
            >
                Drag Me
            </div>

            {/* Drop Zone */}
            <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                Drop Here
            </div>
        </div>
    );
};

export default AboutMe;
