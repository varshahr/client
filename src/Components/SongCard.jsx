// components/SongCard.jsx
import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  const defaultImage = 'public/images/song.png'; // public/images/song.png

  return (
    <div className="song-card">
      <img
        src={song.image ? song.image : defaultImage}
        alt={song.title}
        className="song-image"
      />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
