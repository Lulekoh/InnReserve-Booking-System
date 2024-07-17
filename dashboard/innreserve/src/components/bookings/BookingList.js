import React, { useEffect, useContext } from 'react';
import BookingContext from '../../context/BookingContext';

const BookingList = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings, getBookings } = bookingContext;

  useEffect(() => {
    getBookings();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2 className="text-primary">Your Bookings</h2>
      {bookings.map((booking) => (
        <div key={booking._id} className="card bg-light">
          <h3 className="text-primary text-left">
            {booking.hotel} <span style={{ float: 'right' }}>{booking.checkIn}</span>
          </h3>
          <ul className="list">
            <li>
              <i className="fas fa-calendar-alt"></i> {booking.checkOut}
            </li>
            <li>
              <i className="fas fa-users"></i> {booking.guests} Guests
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
