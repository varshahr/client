import React,{ useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './FeatureSection.css';

const features = [
  { title: 'Discover', description: 'Find your next favorite track', image: '/images/45.jpg' },
  { title: 'Playlists', description: 'Curated just for your mood', image: '/images/hit.jpg' },
  { title: 'Offline Mode', description: 'Listen without internet', image: '/images/g.jpg' },
  { title: 'HD Quality', description: 'Enjoy crystal clear sound', image: '/images/b.jpg' },
  { title: 'Daily Mix', description: 'Fresh music every day', image: '/images/1.jpg' },
  { title: 'Chordify', description: 'Listen with your friends', image: '/images/o.jpg' },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,              // Autoplay added
  autoplaySpeed: 4500,         // Time in ms (3 seconds)
  pauseOnHover: true,          // Optional: Pause when hovering
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
    const sliderRef = useRef(null);

  // Manually trigger autoplay using slickPlay() on component mount
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);
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
