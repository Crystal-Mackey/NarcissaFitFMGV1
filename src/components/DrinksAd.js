import React from 'react';
import DrinksImage from '../assets/drinks-ad.png';

const DrinksAd = () => {
  return (
    <section className="drinks-ad">
      <h2>Check Out Our Mobile Nutrition</h2>
      <p>Boost your energy with our range of pre and post-workout drinks!</p>
      <img src={DrinksImage} alt="Narcissafit Mobile Nutrition" />
    </section>
  );
}

export default DrinksAd;
