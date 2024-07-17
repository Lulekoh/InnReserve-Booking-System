import React, { useReducer } from 'react';
import axios from 'axios';
import BookingContext from './BookingContext';
import bookingReducer from '../reducers/bookingReducer';
import {
  GET_BOOKINGS,
  ADD_BOOKING,
  BOOKING_ERROR,
} from '../types';

const BookingState = (props) => {
  const initialState = {
    bookings: [],
    error: null,
  };

  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const getBookings = async () => {
    try {
      const res = await axios.get('/api/bookings');

      dispatch({
        type: GET_BOOKINGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  const addBooking = async (booking) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/bookings', booking, config);

      dispatch({
        type: ADD_BOOKING,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BOOKING_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings: state.bookings,
        error: state.error,
        getBookings,
        addBooking,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;
