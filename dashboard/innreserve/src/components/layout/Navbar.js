import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <span className="nav-link">Hello {user && user.name}</span>
      </li>
      <li className="nav-item">
        <a onClick={onLogout} href="#!" className="nav-link">
          <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/register" className="btn btn-primary mr-2">Register</Link>
        <Link to="/login" className="btn btn-light">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">InnReserve Booking System</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home Page <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurants-hotels" className="nav-link">
                Restaurants/Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/price-range" className="nav-link">
                Price range
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/disabled" className="nav-link disabled">
                Disabled
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
