import React from 'react';
import './Home.css';
import SongCard from './SongCard';
import FeatureSection from './FeatureSection';

const Home = () => {
  const songs = [
    { id: 1, title: "Kesariya", artist: "Arijit Singh", image: "/images/song.png" },
    { id: 2, title: "Heeriye", artist: "Jasleen Royal", image: "/images/this.jpg" },
    { id: 3, title: "RamaChakkani Seetha", artist: "Arijit Singh", image: "/images/fav.jpg" },
    { id: 4, title: "Naatu Naatu", artist: "Rahul Sipligunj", image: "/images/t.jpg" },
  ];

  return (
    <div className="home">
      <div className="banner">
        <p>Your vibe, your music, your way.</p>
        <FeatureSection />
      </div>

      <div className="hero-section">
        <h2>Welcome back!</h2>
        <p>Explore your favorite beats, trending playlists, and fresh releases.</p>
      </div>

      <section className="trending-section">
        <h2>🎵 Trending Now</h2>
        <div className="songs-container">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
