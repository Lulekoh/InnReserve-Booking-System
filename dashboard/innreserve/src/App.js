import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import BookingForm from './components/bookings/BookingForm';
import BookingList from './components/bookings/BookingList';
import AuthState from './context/AuthState';
import BookingState from './context/BookingState';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const basename = '/InnReserve-Booking-System';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingName, setBookingName] = useState('');
  const [message, setMessage] = useState('');

  const addBooking = () => {
    if (bookingName.trim() !== '') {
      setBookings([...bookings, bookingName]);
      setBookingName('');
      setMessage(`Booking "${bookingName}" added successfully!`);
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
    }
  };

  return (
    <AuthState>
      <BookingState>
        <Router basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookings/new" element={<BookingForm />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route
              path="/home"
              element={
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
              }
            />
          </Routes>
        </Router>
      </BookingState>
    </AuthState>
  );
};

export default App;
