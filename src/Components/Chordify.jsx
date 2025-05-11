// src/pages/Chordify.jsx
import React, { useState } from 'react';
import './Chordify.css';

const Chordify = () => {
  const [roomCode, setRoomCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleCreateRoom = () => {
    const newCode = Math.random().toString(36).substr(2, 6).toUpperCase();
    setRoomCode(newCode);
    setIsHost(true);
    setJoined(true);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim() !== '') {
      setIsHost(false);
      setJoined(true);
    }
  };

  return (
    <div className="chordify-container">
      <h2>🎶 Welcome to Chordify</h2>
      {!joined ? (
        <div className="chordify-actions">
          <button onClick={handleCreateRoom} className="chordify-button">Create Session</button>
          <div className="join-room">
            <input
              type="text"
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <button onClick={handleJoinRoom} className="chordify-button">Join Session</button>
          </div>
        </div>
      ) : (
        <div className="chordify-room">
          <h3>{isHost ? 'You are hosting a session' : 'You joined a session'}</h3>
          <p>Room Code: <strong>{roomCode}</strong></p>
          <div className="music-player-placeholder">
            🎧 Music Player & Shared Playlist Coming Soon!
          </div>
        </div>
      )}
    </div>
  );
};

export default Chordify;
