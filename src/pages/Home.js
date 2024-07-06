import React from 'react';
import Introduction from '../components/Introduction';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import DrinksAd from '../components/DrinksAd';
import '../App.css';

const Home = () => {
  return (
    <div>
      <div className="logo-background"></div>
      <Banner />
      <main>
        <Introduction />
        <Services />
        <DrinksAd />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
