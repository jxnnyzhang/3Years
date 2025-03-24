// src/components/VideoPage.js
import React, { useRef, useState, useEffect } from 'react';

const VideoPage = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Format time as mm:ss
  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle play/pause on video or big play button click
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Toggle fullscreen mode on/off
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Auto-hide controls after 3 seconds of no mouse movement
  const resetHideTimer = () => {
    setShowControls(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = () => {
      resetHideTimer();
    };
    container.addEventListener('mousemove', handleMouseMove);
    resetHideTimer();
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = volume;
  }, [volume]);

  // Overall page style
  const pageStyle = {
    backgroundColor: '#fdf8ed',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0
  };

  /**
   * The aspect ratio container uses an aspect ratio of 8.5/16 to crop a bit more from the sides.
   * This ensures the border hugs the central content of the video.
   */
  const aspectRatioContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    aspectRatio: '8.5/16',
    width: 'auto',
    maxWidth: '400px',
    overflow: 'hidden',
    border: '1px solid #dda0dd',
    borderRadius: '6px'
  };

  // Video style: fills container and crops side letterboxing
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  // Big play button overlay (visible when video is paused)
  const bigPlayButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(221, 160, 221, 0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: isPlaying ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 5
  };

  const bigPlayIconStyle = {
    color: '#fff',
    fontSize: '30px',
    lineHeight: 1
  };

  // Control bar styling: cute, pastel, semi-transparent, auto-hiding
  const controlBarStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(221, 160, 221, 0.5)',
    color: '#fff',
    padding: '3px 4px',
    gap: '4px',
    boxSizing: 'border-box',
    opacity: showControls ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    pointerEvents: showControls ? 'auto' : 'none'
  };

  // Small, cute control buttons
  const controlButtonStyle = {
    background: 'none',
    border: '1px solid #fff',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.7rem',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Time display style
  const timeStyle = {
    fontSize: '0.7rem',
    minWidth: '50px',
    textAlign: 'center'
  };

  // Compute progress bar fill percentage
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;
  const progressBarComputedStyle = {
    flex: 1,
    margin: '0 4px',
    cursor: 'pointer',
    height: '4px',
    borderRadius: '2px',
    appearance: 'none',
    background: `linear-gradient(to right, #dda0dd ${progressPercentage}%, white ${progressPercentage}%)`
  };

  // Compute volume slider fill percentage (0 to 100)
  const volumePercentage = volume * 100;
  const volumeComputedStyle = {
    width: '40px',
    cursor: 'pointer',
    height: '4px',
    borderRadius: '2px',
    appearance: 'none',
    background: `linear-gradient(to right, #dda0dd ${volumePercentage}%, white ${volumePercentage}%)`
  };

  // Fullscreen icon style
  const fullscreenIconStyle = {
    fontSize: '0.7rem'
  };

  return (
    <>
      {/* Slider thumb styling for WebKit & Firefox */}
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #dda0dd;
            cursor: pointer;
            margin-top: -4px; /* Adjusts for the slider track height */
          }
          input[type="range"]::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #dda0dd;
            cursor: pointer;
          }
        `}
      </style>
      <div style={pageStyle}>
        <div style={aspectRatioContainerStyle} ref={containerRef}>
          <video
            ref={videoRef}
            style={videoStyle}
            src={`${process.env.PUBLIC_URL}/3Years.mp4`}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={handlePlayPause}
            controls={false}
          />
          {/* Big play button overlay */}
          {!isPlaying && (
            <button style={bigPlayButtonStyle} onClick={handlePlayPause}>
              <span style={bigPlayIconStyle}>►</span>
            </button>
          )}
          {/* Custom Control Bar */}
          <div style={controlBarStyle}>
            <button style={controlButtonStyle} onClick={handlePlayPause}>
              {isPlaying ? '❚❚' : '►'}
            </button>
            <span style={timeStyle}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <input
              style={progressBarComputedStyle}
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
            />
            <input
              style={volumeComputedStyle}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
            <button style={controlButtonStyle} onClick={handleFullscreen}>
              <span style={fullscreenIconStyle}>⛶</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
