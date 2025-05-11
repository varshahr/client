// TestToken.jsx

import React, { useEffect, useState } from 'react';
import { getSpotifyToken, getSongsForMood } from './SpotifyAuth';  // Import the functions

const TestToken = () => {
  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');

  // Fetch the token once the component is mounted
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getSpotifyToken();
      setToken(token);
      console.log('Spotify Token:', token);  // Log the token for testing
    };
    fetchToken();
  }, []);

  // Handle mood selection and fetch songs for the selected mood
  const handleMoodClick = async (mood) => {
    setSelectedMood(mood);
    const songs = await getSongsForMood(mood);
    setSongs(songs);
  };

  return (
    <div>
      <h1>Spotify Mood Songs</h1>
      <div>
        <button onClick={() => handleMoodClick('Happy')}>Happy</button>
        <button onClick={() => handleMoodClick('Sad')}>Sad</button>
        <button onClick={() => handleMoodClick('Romantic')}>Romantic</button>
        {/* Add more mood buttons as needed */}
      </div>

      {selectedMood && <h2>Songs for mood: {selectedMood}</h2>}

      <div>
        {songs.length === 0 ? (
          <p>No songs found.</p>
        ) : (
          <ul>
            {songs.map((song) => (
              <li key={song.name}>
                <p>{song.name} - {song.artist}</p>
                {song.image && <img src={song.image} alt={song.name} style={{ width: 100, height: 100 }} />}
                <audio controls>
                  <source src={song.previewUrl} />
                </audio>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestToken;
