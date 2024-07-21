import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image5 from './images/image5.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">InnReserve Booking System</h1>
          <p className="lead">Book your stay at the best hotels easily!</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
      <div>About</div>
      <div>
        <p className="small">
          The InnReserve Booking System is an easy-to-use web application designed to make booking restaurants and hotels simple and efficient. It helps customers quickly secure their dining and lodging experiences while providing businesses with a handy tool to manage and improve their reservations.
          By offering a seamless reservation process, the InnReserve Booking System aims to enhance overall customer satisfaction. Additionally, it equips businesses with the tools they need to effectively manage and grow their operations.
        </p>
      </div>
      <div className="image-gallery">
        <img src={image1} alt="Food" />
        <img src={image2} alt="Dine" />
        <img src={image3} alt="Bed" />
        <img src={image5} alt="Pool" />
        <img src={image7} alt="Room" />
        <img src={image8} alt="Drinks" />
        <img src={image9} alt="Lunch" />
        <img src={image10} alt="Hotel" />
        <img src={image11} alt="Wine" />
      </div>
    </div>
  );
};

export default Landing;
