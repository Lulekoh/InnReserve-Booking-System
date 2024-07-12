import React, { useState } from 'react';
import './App.css';


// Import necessary modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Define basename based on your GitHub Pages URL
const basename = '/InnReserve-Booking-System';

// Render your routes within BrowserRouter
function App() {
  return (
    <Router basename={basename}>
      <Switch>
        <Route exact path="/">
          {/* Your home component */}
        </Route>
        <Route path="/about">
          {/* About page component */}
        </Route>
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

// Import sample images
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function App() {
  const [bookings, setBookings] = useState([]);
  const [bookingName, setBookingName] = useState('');
  const [message, setMessage] = useState('');

  const addBooking = () => {
    if (bookingName.trim() !== '') {
      setBookings([...bookings, bookingName]);
      setBookingName('');
      setMessage(`Booking "${bookingName}" added successfully!`);
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      setMessage('Please enter a booking name.');
    }
  };

  const handleSignIn = (provider) => {
    if (provider === 'Facebook') {
      window.location.href = 'https://www.facebook.com/';
    } else if (provider === 'Google') {
      window.location.href = 'https://accounts.google.com/signin';
    } else {
      alert(`Signing in with ${provider}...`);
      // Implement actual sign-in logic here for other providers
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>InnReserve Booking System</h1>
      </header>
      <div className="top-bar">
        <form className="booking-form" onSubmit={(e) => { e.preventDefault(); addBooking(); }}>
          <input
            type="text"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            placeholder="Enter booking name"
            className="booking-input"
          />
          <button type="submit" className="submit-button">Add Booking</button>
        </form>
        <div className="sign-in-buttons">
          <button className="sign-in-button google" onClick={() => handleSignIn('Google')}>Sign in with Google</button>
          <button className="sign-in-button facebook" onClick={() => handleSignIn('Facebook')}>Sign in with Facebook</button>
        </div>
      </div>
      <main>
        <div className="images-container">
          <div className="image-frame">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="image-frame">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="image-frame">
            <img src={image3} alt="Image 3" />
          </div>
        </div>
        <p className="message">{message}</p>
        <ul className="bookings-list">
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">{booking}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
