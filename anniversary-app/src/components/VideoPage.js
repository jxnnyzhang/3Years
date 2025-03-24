import React from 'react';

const VideoPage = () => {
  const pageStyle = {
    backgroundColor: '#fdf8ed',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  };

  // Set a fixed container that you want the video to fill.
  const containerStyle = {
    position: 'relative',
    width: '400px',      // Desired container width
    height: '650px',     // 16:9 container (800x450)
    overflow: 'hidden',
    border: '1px solid #dda0dd',
    borderRadius: '6px',
    backgroundColor: '#000'
  };

  /**
   * The iframe wrapper is absolutely positioned and scaled up so that
   * it covers the container. Adjust the scale value to control how much
   * of the video is cropped.
   */
  const iframeWrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '328%',     // Scale factor—adjust as needed
    height: '200%',    // Scale factor—adjust as needed
    transform: 'translate(-50%, -50%)'
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 0
  };

  // Use the embed URL for your video.
  const embedUrl =
    "https://www.youtube.com/embed/3WO8jK0AGvU?controls=1&modestbranding=1&rel=0&fs=1";

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={iframeWrapperStyle}>
          <iframe
            src={embedUrl}
            style={iframeStyle}
            // Using the standard HTML attribute instead of the deprecated React prop:
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
