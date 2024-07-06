import React from 'react';
import BannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Narcissafit Mobile Gym" />
    </div>
  );
}

export default Banner;
