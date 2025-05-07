import React from 'react';
import Slider from 'react-slick';
import './FeatureSection.css';

const features = [
  { title: 'Discover', description: 'Find your next favorite track', image: '/images/q.jpg' },
  { title: 'Playlists', description: 'Curated just for your mood', image: '/images/playlists.jpg' },
  { title: 'Offline Mode', description: 'Listen without internet', image: '/images/offline-mode.jpg' },
  { title: 'HD Quality', description: 'Enjoy crystal clear sound', image: '/images/hd-quality.jpg' },
  { title: 'Daily Mix', description: 'Fresh music every day', image: '/images/daily-mix.jpg' },
  { title: 'Chordify', description: 'Listen with your friends', image: '/images/chordify.jpg' },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show 3 features at once
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

const FeatureSection = () => {
  return (
    <div className="feature-carousel">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="image-container">
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSection;
