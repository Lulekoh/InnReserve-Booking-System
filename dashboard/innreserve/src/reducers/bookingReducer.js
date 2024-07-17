import {
  GET_BOOKINGS,
  ADD_BOOKING,
  BOOKING_ERROR,
} from '../types';

const bookingReducer = (state, action) => {
  switch (action.type) {
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      };
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case BOOKING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
