// src/pages/Explore.jsx
import React from 'react';
import './Explore.css';

const categories = [
  'Top 50 India',
  'Chill Vibes',
  'Workout Mix',
  'Romantic Hits',
  'Retro Classics',
  'Fresh Finds'
];

const Explore = () => {
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
        <h2>Discover New Music </h2>
        <p>Explore trending songs, artists, and playlists curated just for you.</p>
      </div>

      <div className="categories-section">
        <h3>Explore Categories</h3>
        <div className="category-list">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              {cat}
            </div>
          ))}
        </div>
      </div>
      <section className="mood-section">
        <h2>💖 What’s your mood for music?</h2>
        <div className="mood-grid">
          {moods.map((m) => (
            <div className="mood-item" key={m.mood}>
              <img src={m.img} alt={m.mood} />
              <p>{m.mood}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;

