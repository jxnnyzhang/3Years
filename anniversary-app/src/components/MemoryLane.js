// src/components/MemoryLane.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoryLane = () => {
  const navigate = useNavigate();
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupLevel, setPopupLevel] = useState(0);

  // Main page styles
  const containerStyle = {
    backgroundColor: '#f5f5dc', // Light, creamy color
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    position: 'relative'
  };

  const imageContainer = {
    position: 'relative',
    width: '300px', // Control image width here
    margin: '0 auto'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block'
  };

  const headingStyle = {
    position: 'absolute',
    bottom: '50px', // Adjust vertical position as needed
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

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out'
  };

  const yesButtonStyle = {
    ...buttonStyle,
    transform: isHoveringNo ? 'scale(1.5)' : 'scale(1)'
  };

  const noButtonStyle = {
    ...buttonStyle,
    transform: isHoveringNo ? 'scale(0.3)' : 'scale(1)'
  };

  // Modal (popup) overlay styles
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  // Modal content (popup card) styles
  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    width: '300px'
  };

  // Determine the popup message based on the current popup level.
  const getPopupMessage = (level) => {
    switch (level) {
      case 0:
        return "Are you sure??";
      case 1:
        return "Really, are you sure??";
      case 2:
        return "Seriously, are you absolutely sure??";
      case 3:
        return "Come on, it's not that bad! Are you really sure??";
      default:
        return "Please decide: Are you sure??";
    }
  };

  // Handlers for the main page buttons
  const handleYes = () => {
    // Navigate to the video page.
    navigate('/video');
  };

  const handleNo = () => {
    // Show the confirmation popup
    setShowConfirmation(true);
    setPopupLevel(0);
  };

  // Handlers for the popup buttons
  const handlePopupYes = () => {
    // If the user keeps clicking "Yes" in the popup, increase the popup level
    setPopupLevel((prevLevel) => prevLevel + 1);
    // The popup remains open (appears again) with a more aggressive message.
  };

  const handlePopupNo = () => {
    // Close the popup and reset popup level.
    setShowConfirmation(false);
    setPopupLevel(0);
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
      {showConfirmation && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              {getPopupMessage(popupLevel)}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                style={{ padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                onClick={handlePopupYes}
              >
                Yes
              </button>
              <button
                style={{ padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                onClick={handlePopupNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryLane;
