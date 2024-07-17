import React from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <BookingState>
        <Router>
          <Navbar />
          <section className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bookings/new" element={<BookingForm />} />
              <Route path="/bookings" element={<BookingList />} />
            </Routes>
          </section>
        </Router>
      </BookingState>
    </AuthState>
  );
};

export default App;
