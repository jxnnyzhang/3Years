// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowButton(true);
        }, 1000); // 10 seconds delay
        return () => clearTimeout(timer);
      }, []);
    
      const handleNext = () => {
        navigate('/memory-lane');
      };

  // Inline styles for a simple, centered layout
    const containerStyle = {
        backgroundColor: '#f5f5dc', // Light, creamy color
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0'
    };

    const imageContainer = {
        position: 'relative',
        width: '300px',   // Control image width here
        height: 'auto',
        margin: '0 auto'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        display: 'block'
    };

    // This container will be positioned on top of the image
    const textContainer = {
        position: 'absolute',
        bottom: '0px',    // Move up or down as needed
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        padding: '50px',
        borderRadius: '5px'
    };

    const titleStyle = {
        fontSize: '2rem',
        margin: '0',
        color: '#000',
        whiteSpace: 'nowrap'
    };

    const subtitleStyle = {
        margin: '4px 0 0 0',
        fontSize: '1.2rem',
        color: '#555'
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: showButton ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        padding: '10px 20px',
        border: '2px solid rgba(221, 160, 221, 0.7)',
        backgroundColor: 'rgba(192, 105, 219, 0.3)',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <div style={imageContainer}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/pikachu.png`} 
                    alt="Pikachu"
                    style={imageStyle}
                />
                <div style={textContainer}>
                    <h1 style={titleStyle}>We've been together for 3 years!</h1>
                    <p style={subtitleStyle}>
                        That’s 1095 days of love, laughter, and memories!
                    </p>
                    {showButton && (
                        <button style={buttonStyle} onClick={handleNext}>
                        Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
    };

    export default LandingPage;
