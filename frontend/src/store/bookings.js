import { csrfFetch } from "./csrf";

// -- Action Types --
const CREATE = "bookings/CREATE";
const READ_OWNED_BOOKING = "bookings/OWNED";
const DELETE = 'bookings/DELETE';

// -- AC --

// AC for creating a booking (CREATE)
export const createBookingAction = (booking) => {
  return {
    type: CREATE,
    booking
  }
}

// AC for reading owned bookings (READ)
export const readBookingsOwnedAction = (bookings) => {
  return {
    type: READ_OWNED_BOOKING,
    bookings,
  };
};

// AC for deleting a booking (DELETE)
export const deleteBookingAction = (booking) => {
  return {
    type: DELETE,
    booking
  }
}


// -- THUNK --

// THUNK for creating a booking (CREATE)
export const createBookingThunk = (booking) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${booking.boutiqueId}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(booking)
  })
  if (response.ok) {
    const booking = await response.json();
    dispatch(createBookingAction(booking));
    return booking
  }
}

// THUNK for reading owned bookings (READ)
export const readBookingsOwnedThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/bookings/");
  if (response.ok) {
    const bookings = await response.json();
    console.log("THIS IS BOOKINGS FROM BACKEND", bookings);
    dispatch(readBookingsOwnedAction(bookings));
    return bookings;
  }
  return { hello: "world" };
};

// THUNK for deleting a booking (DELETE)
export const deleteBookingThunk = (id) => async dispatch => {
  const response = await csrfFetch('/api/bookings/delete', {
    method: 'DELETE',
    body: JSON.stringify({id})
  })
  if (response.ok) {
    const deletedBooking = await response.json();
    dispatch(deleteBookingAction(deletedBooking))
    return deletedBooking
  }
}

// Reducer
const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE: {
      return {...state, [action.booking.id]: action.booking}
  }
    case READ_OWNED_BOOKING: {
      const bookingsLoaded = {};
      action.bookings.forEach((booking) => {
        bookingsLoaded[booking.id] = booking;
      });
      return bookingsLoaded;
    }
    case DELETE: {
      const newState = {...state};
      delete newState[action.booking.id];
      return newState;
  }
    default:
      return state;
  }
};

export default bookingReducer;
