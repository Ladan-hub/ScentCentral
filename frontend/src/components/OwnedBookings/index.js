import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { readBookingsOwnedThunk } from "../../store/bookings";
import { readBoutiquesThunk } from "../../store/boutiques";
import { deleteBookingThunk } from "../../store/bookings";
import "./OwnedBookings.css";

const OwnedBookings = () => {
  const dispatch = useDispatch();

  // UseSelectors
  const loggedInUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));
  const boutiques = useSelector((state) => Object.values(state.boutiques));
  const boutiquesObj = useSelector((state) => state.boutiques);
  console.log("THIS IS THE BOUTIQUES OBJECT!!!", boutiquesObj);

  useEffect(() => {
    dispatch(readBookingsOwnedThunk());
    dispatch(readBoutiquesThunk());
  }, [dispatch]);

  // DELETE dispatch
  const deleteBookingEventHandler = async (id) => {
    const deleteBooking = await dispatch(deleteBookingThunk(id));
    if (deleteBooking) {
      history.push(`/bookings`);
    }
  };

  const history = useHistory();

  if (!bookings) {
    return null;
  }
  return (
    <>
      <section className="title-and-create-button-container">
        <h1 className="welcome-message">Welcome to your Bookings!</h1>
      </section>
      {bookings.length === 0 ? (
        <div className="no-bookings-owned-container">
          <h1 className="no-bookings-owned">
            You Currently Don't Own Any Bookings!
          </h1>
        </div>
      ) : (
        <main className="owned-bookings-container">
          {bookings.map((booking) => (
            <main className="one-booking-container" key={booking.id}>
              {/* {console.log("THIS IS MY BOOKING", booking)}
            {console.log(booking.boutiqueId)}
            {console.log(
              "THIS IS MY PRECIOUS BOUTIQUE!!",
              boutiquesObj[booking.boutiqueId]
            )} */}
              {booking?.userId === loggedInUser?.id ? (
                <div className="one-booking">
                  <div className="img-container">
                    <img
                      className="boutique-image"
                      src={boutiquesObj[booking.boutiqueId].imageUrl}
                      onClick={() =>
                        history.push(
                          `/boutiques/${boutiquesObj[booking.boutiqueId].id}`
                        )
                      }
                    />
                  </div>
                  <div className="boutique-address-container">
                    <div className="boutique-address">
                      {boutiquesObj[booking.boutiqueId].address}
                    </div>
                  </div>
                  <div className="start-date-container">
                    <div className="date-time">
                      <h4 className="date">
                        Date: {booking.startDate.slice(0, 10)}
                      </h4>
                      <h4 className="time">
                        Time: {booking.startDate.slice(11, 19)} UTC
                      </h4>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="booking-buttons-container">
                {booking?.userId === loggedInUser?.id ? (
                  <button
                    className="delete-perfume-button"
                    onClick={() => deleteBookingEventHandler(booking.id)}
                  >
                    Cancel Booking
                  </button>
                ) : null}
              </div>
            </main>
          ))}
        </main>
      )}
    </>
  );
};

export default OwnedBookings;
