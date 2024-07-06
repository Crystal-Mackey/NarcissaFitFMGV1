import React from 'react';
import InstagramLogo from "../assets/instagramicon.png";
import FacebookLogo from "../assets/facebookicon.png";
import TiktokLogo from "../assets/tiktokicon.png";

const Footer = () => {
  return (
    <footer>
      <p>Follow us on social media:</p>
      <div>
        <a href="https://www.instagram.com/narcissafit/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/narcissafit" target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/@narcissafit" target="_blank" rel="noopener noreferrer">
          <img src={TiktokLogo} alt="TikTok" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
