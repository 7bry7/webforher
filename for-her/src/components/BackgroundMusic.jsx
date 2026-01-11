import React, { useState, useRef, useEffect } from 'react';
import '../index.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Reference to the actual audio HTML element
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to play automatically when the site loads
    const audio = audioRef.current;
    audio.volume = 0.3; // Set volume to 30% so it's not too loud

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started!
          setIsPlaying(true);
        })
        .catch((error) => {
          // Autoplay was blocked by the browser.
          // This is normal! The user needs to interact first.
          console.log("Autoplay blocked. User needs to click play.");
          setIsPlaying(false);
        });
    }
  }, []);

  // Function to toggle play/pause when button is clicked
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      {/* The actual audio element (hidden) */}
      {/* 'loop' makes it repeat forever */}
      <audio ref={audioRef} src="/bg-music.mp3" loop />

      {/* The Mute/Unmute Button */}
      <button className="music-toggle-btn" onClick={togglePlay}>
        {isPlaying ? (
            // Speaker with sound icon
            <span role="img" aria-label="playing">🔊</span>
        ) : (
            // Muted speaker icon
            <span role="img" aria-label="muted" style={{opacity: 0.6}}>🔈</span>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;