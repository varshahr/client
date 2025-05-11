import React, { useState, useRef } from 'react';
import './Explore.css';

const Explore = () => {
  const [moodSongs, setMoodSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether the song is playing or paused
  const [currentSong, setCurrentSong] = useState(null); // Track which song is currently playing
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // State to track playback speed
  const audioRef = useRef(null);

  // Manual song data for each mood
  const songsData = {
    Happy: [
      {
        name: "Happy Song 1",
        artist: "Artist 1",
        previewUrl: "/songs/c.mp3",
        image: "/images/fav.jpg",
      },
      {
        name: "Happy Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/h.mp3",
        image: "/images/this.jpg",
      },
       {
        name: "Happy Song 3",
        artist: "Artist 2",
        previewUrl: "/songs/n.mp3",
        image: "/images/t.jpg",
      },
    ],
    Lost: [
      {
        name: "Lost Song 1",
        artist: "Artist 1",
        previewUrl: "/songs/a.mp3",
        image: "/images/a.jpg",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/k.mp3",
        image: "/images/song.png",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/o.mp3",
        image: "/images/p.jpg",
      },
    ],
      Alone: [
      {
        name: "alone song 1",
        artist: "Artist 1",
        previewUrl: "/songs/gna.mp3",
        image: "/images/h2.jpg",
      },
      {
        name: "alone song 2",
        artist: "Artist 2",
        previewUrl: "/songs/q.mp3",
        image: "/images/p.jpg",
      },
      {
        name: "alone Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/terachi.mp3",
        image: "/images/t4.jpg",
      },
    ],
    Romantic: [
      {
        name: "alone song 1",
        artist: "Artist 1",
        previewUrl: "/songs/lokam.mp3",
        image: "/images/.jpg",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/itu.mp3",
        image: "/images/itu.jpg",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/kanulu.mp3",
        image: "/images/t4.jpg",
      },
    ],
    Dance: [
      {
        name: "alone song 1",
        artist: "Artist 1",
        previewUrl: "/songs/p.mp3",
        image: "/images/p1.jpg",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/itu.mp3",
        image: "/images/itu.jpg",
      },
      {
        name: "Lost Song 2",
        artist: "Artist 2",
        previewUrl: "/songs/kanulu.mp3",
        image: "/images/t4.jpg",
      },
    ],
    // Add more moods here as needed
  };

  // Handle mood click and fetch songs from manual data
  const handleMoodClick = (mood) => {
    setMoodSongs(songsData[mood] || []);
  };

  const playPauseSong = (songUrl) => {
    if (audioRef.current) {
      if (isPlaying && currentSong === songUrl) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.src = songUrl;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentSong(songUrl);
      }
    }
  };

  const changeSpeed = (e) => {
    const speed = parseFloat(e.target.value);
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const moods = [
    { mood: "Happy", img: "/images/h.jpg" },
    { mood: "Lost", img: "/images/lost.jpg" },
    { mood: "Alone", img: "/images/alone.jpg" },
    { mood: "In Love", img: "/images/inlove.jpg" },
    { mood: "Self Love", img: "/images/selflove.jpg" },
    { mood: "Dance", img: "/images/dance.jpg" },
    { mood: "Timeless", img: "/images/timeless.jpg" },
    { mood: "Freedom", img: "/images/freedom.jpg" },
    { mood: "Broken", img: "/images/broken1.jpg" },
    { mood: "Romantic", img: "/images/romantic.jpg" },
  ];

  return (
    <div className="explore-container">
      <div className="explore-header">
        <h2>Discover New Music</h2>
        <p>Explore trending songs, artists, and playlists curated just for you.</p>
      </div>

      <section className="mood-section">
        <h2>💖 What’s your mood for music?</h2>
        <div className="mood-grid">
          {moods.map((m) => (
            <div
              className="mood-item"
              key={m.mood}
              onClick={() => handleMoodClick(m.mood)}  // Fetch songs when mood clicked
              style={{ cursor: "pointer" }}
            >
              <img src={m.img} alt={m.mood} />
              <p>{m.mood}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="songs-section">
        <h3>Recommended Songs:</h3>
        <div className="songs-list">
          {moodSongs.length === 0 ? (
            <p>No songs available for this mood yet.</p>
          ) : (
            moodSongs.map((song, index) => (
              <div key={index} className="song-item">
                <img src={song.image} alt={song.name} />
                <p>{song.name} - {song.artist}</p>

                {/* Play/Pause Button */}
                <button onClick={() => playPauseSong(song.previewUrl)}>
                  {isPlaying && currentSong === song.previewUrl ? "Pause" : "Play"}
                </button>

                {/* Playback Speed Control */}
                <div className="speed-control">
                  <label htmlFor={`speed-${index}`}>Speed:</label>
                  <input
                    type="range"
                    id={`speed-${index}`}
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={playbackSpeed}
                    onChange={changeSpeed}
                  />
                  <span>{playbackSpeed}x</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <audio ref={audioRef} controls style={{ display: "none" }} />
    </div>
  );
};

export default Explore;
