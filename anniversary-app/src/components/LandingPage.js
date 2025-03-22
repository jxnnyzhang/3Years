// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/video');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>We've been together for 3 years!</h1>
      <p style={styles.subtitle}>That's a total of 1095 days of love and memories.</p>
      <button style={styles.button} onClick={handleClick}>
        See Your Surprise
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff9f6',
    height: '100vh',
    textAlign: 'center',
    paddingTop: '50px'
  },
  title: {
    fontFamily: 'Pacifico, cursive',
    color: '#ff6f61',
    fontSize: '3em'
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#555'
  },
  button: {
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2em',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default LandingPage;
