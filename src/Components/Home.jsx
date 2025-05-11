// Home.jsx
import React from 'react';
import './Home.css';
import SongCard from './SongCard';
import FeatureSection from './FeatureSection';

const Home = () => {
  const songs = [
    {
      id: 1,
      title: "Kesariya",
      artist: "Arijit Singh",
      image: "/images/song.png",
      audio: "/songs/k.mp3"
    },
    {
      id: 2,
      title: "Heeriye",
      artist: "Jasleen Royal",
      image: "/images/this.jpg",
      audio: "/songs/h.mp3"
    },
    {
      id: 3,
      title: "RamaChakkani Seetha",
      artist: "Arijit Singh",
      image: "/images/fav.jpg",
      audio: "/songs/c.mp3"
    },
    {
      id: 4,
      title: "Naatu Naatu",
      artist: "Rahul Sipligunj",
      image: "/images/t.jpg",
      audio: "/songs/n.mp3"
    }
  ];

  return (
    <div className="home">
      <div className="banner">
        <p>Your vibe, your music, your way.</p>
        <FeatureSection />
      </div>

      <div className="content-section">
        <h1 className="welcome-heading">Welcome back!</h1>
        <p>Explore your favorite beats, trending playlists, and fresh releases.</p>
      </div>

      <section className="trending-section content-section">
        <h2>🎵 Trending Now</h2>
        <div className="song-list">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
