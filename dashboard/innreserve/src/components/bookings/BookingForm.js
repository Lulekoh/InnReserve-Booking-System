import React, { useState, useContext } from 'react';
import BookingContext from '../../context/BookingContext';

const BookingForm = () => {
  const bookingContext = useContext(BookingContext);
  const { addBooking } = bookingContext;

  const [booking, setBooking] = useState({
    hotel: '',
    checkIn: '',
    checkOut: '',
    guests: '',
  });

  const { hotel, checkIn, checkOut, guests } = booking;

  const onChange = (e) => setBooking({ ...booking, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addBooking(booking);
    setBooking({
      hotel: '',
      checkIn: '',
      checkOut: '',
      guests: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Make a Booking</h2>
      <input
        type="text"
        placeholder="Hotel"
        name="hotel"
        value={hotel}
        onChange={onChange}
      />
      <input
        type="date"
        name="checkIn"
        value={checkIn}
        onChange={onChange}
      />
      <input
        type="date"
        name="checkOut"
        value={checkOut}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Number of Guests"
        name="guests"
        value={guests}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value="Add Booking"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default BookingForm;
