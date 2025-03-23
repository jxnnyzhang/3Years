// src/components/MemoryLane.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoryLane = () => {
  const navigate = useNavigate();
  const [isHoveringNo, setIsHoveringNo] = useState(false);

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
    width: '300px', // Control image width here
    height: 'auto',
    margin: '0 auto'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block'
  };

  const headingStyle = {
    position: 'absolute',
    bottom: '50px', // Move up or down as needed
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    padding: '50px',
    borderRadius: '5px',
    whiteSpace: 'nowrap'
  };

  const buttonContainerStyle = {
    position: 'absolute',
    left: '50%',
    display: 'flex',
    gap: '20px',
    bottom: '40px',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    borderRadius: '5px',
    whiteSpace: 'nowrap'
  };

  // Base style for both buttons.
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out'
  };

  // Combined styles for each button based on hover state.
  const yesButtonStyle = {
    ...buttonStyle,
    transform: isHoveringNo ? 'scale(1.5)' : 'scale(1)'
  };

  const noButtonStyle = {
    ...buttonStyle,
    transform: isHoveringNo ? 'scale(0.3)' : 'scale(1)'
  };

  const handleYes = () => {
    // Navigate to the video page.
    navigate('/video');
  };

  const handleNo = () => {
    // Navigate back to the landing page.
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/images/cutepikachu.png`} 
          alt="Pikachu"
          style={imageStyle}
        />
        <h1 style={headingStyle}>Shall we go down memory lane?</h1>
        <div style={buttonContainerStyle}>
          <button style={yesButtonStyle} onClick={handleYes}>
            Yes
          </button>
          <button
            style={noButtonStyle}
            onClick={handleNo}
            onMouseEnter={() => setIsHoveringNo(true)}
            onMouseLeave={() => setIsHoveringNo(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
