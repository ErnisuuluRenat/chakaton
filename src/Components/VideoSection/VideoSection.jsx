import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <div className={styles.videoSection}>
      <iframe
        width="1110"
        height="652"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
