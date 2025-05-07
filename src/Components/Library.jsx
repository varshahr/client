import React, { useState } from 'react';
import './Library.css';

const Library = () => {
  const [likedSongs, setLikedSongs] = useState([]); // Initially, empty liked songs array
  const [playlists, setPlaylists] = useState([]);   // Initially, empty playlists array

  return (
    <div className="library-container">
      <div className="library-header">
        <h2>🎵 Your Library</h2>
        <p>Find your liked songs, playlists, and more all in one place.</p>
      </div>

      <div className="library-section">
        <h3>❤️ Liked Songs</h3>
        {likedSongs.length === 0 ? (
          <p className="empty-msg">You haven't liked any songs yet. Start listening to your favorite tracks!</p>
        ) : (
          <ul className="songs-list">
            {likedSongs.map((song, index) => (
              <li key={index} className="song-item">
                <span>{song}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="library-section">
        <h3>📁 Your Playlists</h3>
        {playlists.length === 0 ? (
          <p className="empty-msg">Create your first playlist and save your favorite tracks!</p>
        ) : (
          <ul className="playlists-list">
            {playlists.map((playlist, index) => (
              <li key={index} className="playlist-item">
                <span>{playlist}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Library;
