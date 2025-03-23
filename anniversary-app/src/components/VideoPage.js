// src/components/VideoPage.js
import React, { useState } from 'react';

const VideoPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
    // Auto-play the video after it becomes visible
    setTimeout(() => {
      const video = document.getElementById('annivVideo');
      if (video) video.play();
    }, 0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Happy 3 Year Anniversary!</h1>
      <p style={styles.subtitle}>This page is just for you, my love.</p>
      <button style={styles.button} onClick={handlePlay}>
        Click to watch your surprise
      </button>
      {showVideo && (
        <div style={styles.videoContainer}>
          <video id="annivVideo" controls style={styles.video}>
            <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
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
  },
  videoContainer: {
    marginTop: '30px'
  },
  video: {
    maxWidth: '90%',
    border: '2px solid #ff6f61',
    borderRadius: '5px'
  }
};

export default VideoPage;
