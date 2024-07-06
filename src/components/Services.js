import React from 'react';
import Truck from "../assets/truck.png";
import '../App.css'; // Ensure this imports your CSS file

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>We offer a variety of fitness programs tailored to your needs.</p>
      <div className="service-packages">
        <h3>Personal Training Packages</h3>
        <ul>
          <li>
            <strong>Starter Pack:</strong> 5 sessions for $250 (first time use only, can stack packs)
          </li>
          <li>
            <strong>12 Sessions:</strong> $720
          </li>
          <li>
            <strong>8 Sessions:</strong> $600
          </li>
          <li>
            <strong>6 Sessions:</strong> $540
          </li>
          <li>
            <strong>Buddy Training (2 people):</strong> 5 sessions for $225
          </li>
          <li>
            <strong>Group Training (3-6 people):</strong> $175 (5 sessions)
          </li>
          <li>
            <strong>$60/week Team NarcissaFit Membership:</strong> includes 1 free training session per week, free classes, bootcamps, open gyms, and free access to all events
          </li>
        </ul>
        <h3>Additional Services</h3>
        <ul>
          <li>Parties</li>
          <li>Private Events</li>
          <li>Corporate Events</li>
          <li>School Team Workouts</li>
          <li>Health and Wellness Pop-ups</li>
        </ul>
        <div className="booking">
          <a href="https://narcissafmg.com/book" target="_blank" rel="noopener noreferrer">Book Now</a>
          <img src={Truck} alt="workout truck" className="truck-image" />
        </div>
      </div>
    </section>
  );
}

export default Services;
