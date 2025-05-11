// SongCard.jsx
import React, { useRef, useState } from 'react';
import './SongCard.css';
import { FaPlay, FaPause, FaForward, FaBackward, FaDownload } from 'react-icons/fa';

const SongCard = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    if (audio && audio.duration) {
      audio.currentTime = (value / 100) * audio.duration;
      setProgress(value);
    }
  };

  const skip = (seconds) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime += seconds;
    }
  };

  return (
    <div className="song-card">
      <img
        src={song.image || '/images/song.png'}
        alt={song.title}
        className="song-image"
      />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>

      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Controls */}
      <div className="control-buttons">
        <button onClick={() => skip(-10)} title="Rewind 10s">
          <FaBackward />
        </button>

        <button onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={() => skip(10)} title="Forward 10s">
          <FaForward />
        </button>

        <a
          href={song.audio}
          download
          className="download-btn"
          title="Download"
        >
          <FaDownload />
        </a>
      </div>

      <input
        type="range"
        className="progress-bar"
        value={progress}
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default SongCard;
