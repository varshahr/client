// src/pages/Library.jsx
import React, { useEffect, useState, useRef } from 'react';
import { getSpotifyToken } from './SpotifyAuth';
import './Library.css';

const Library = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null); // This will store the audio element reference

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const token = await getSpotifyToken();
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=arijit%20singh&type=track&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log('Fetched data:', data); // Log the full API response

        setTracks(data.tracks.items);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    fetchSongs();
  }, []);

  const handlePlay = (track) => {
    console.log('Playing track:', track.name);
    console.log('Preview URL:', track.preview_url);

    // Check if preview_url exists
    if (!track.preview_url) {
      console.log('No preview available for this track');
      return; // Return early if no preview URL is available
    }

    if (currentTrack && currentTrack.id === track.id) {
      // If the same track is clicked, toggle play/pause
      if (audioRef.current.paused) {
        audioRef.current.play(); // Play if paused
      } else {
        audioRef.current.pause(); // Pause if playing
      }
    } else {
      // If a different track is clicked, play the new track
      setCurrentTrack(track); // Set the current track to the clicked one
      if (audioRef.current) {
        audioRef.current.pause(); // Pause any currently playing track
      }
      audioRef.current = new Audio(track.preview_url); // Create a new audio object for the track
      audioRef.current.autoplay = true; // Enable autoplay
      audioRef.current.play(); // Play the new track

      // Error handling for audio playback
      audioRef.current.onerror = (error) => {
        console.error('Error playing audio:', error);
      };
    }
  };

  return (
    <div className="library-container">
      <h2>🎵 Top Songs</h2>
      <ul className="track-list">
        {tracks.map((track) => (
          <li key={track.id} className="track-item">
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="album-image"
            />
            <div className="track-info">
              <p className="track-name">{track.name}</p>
              <p className="track-artist">by {track.artists[0].name}</p>
              {track.preview_url ? (
                <div>
                  <button
                    onClick={() => handlePlay(track)} // Play the song when clicked
                    className="play-button"
                  >
                    {currentTrack?.id === track.id && !audioRef.current?.paused
                      ? 'Pause' // If the song is playing, show "Pause"
                      : 'Play'} // Otherwise, show "Play"
                  </button>
                </div>
              ) : (
                <p>No preview available for this track.</p> // Show this message if no preview
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
