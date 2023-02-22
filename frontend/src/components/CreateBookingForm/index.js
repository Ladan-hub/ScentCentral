import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createBookingThunk } from "../../store/bookings";
import "./CreateBookingForm.css";

const CreateBookingForm = () => {
  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);
  const { boutiqueId } = useParams();
  const bookings = useSelector((state) => Object.values(state.bookings));
  console.log("these are all the bookings coming from redux store", bookings);

  //useStates
  const [startDate, setStartDate] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const now = new Date();

  // Validation Errors
  useEffect(() => {
    const errors = [];
    if (startDate === "") {
      errors.push("Please choose a date and time for your appointment");
    } else if (startDate !== "" && now.getDate() > +startDate.slice(8, -6)) {
      errors.push("You can't pick a day in the past");
    } else if (
      startDate !== "" &&
      now.getDate() === +startDate.slice(8, -6) &&
      now.getHours() > +startDate.slice(11, -3)
    ) {
      errors.push("You can't pick a time in the past");
    } else if (
      startDate !== "" &&
      now.getDate() === +startDate.slice(8, -6) &&
      now.getMinutes() > +startDate.slice(14)
    ) {
      errors.push("You can't pick a minute in the past");
    }
    setValidationErrors(errors);
  }, [startDate]);

  const dispatch = useDispatch();

  const bookingSubmitted = async (e) => {
    e.preventDefault();

    const hasExistingBooking = bookings.some((booking) => {
      return (
        booking.boutiqueId == boutiqueId && booking.userId == loggedInUser.id
      );
    });

    if (hasExistingBooking) {
      alert("You already have a booking for this boutique.");
      return;
    }

    const bookingToCreate = {
      boutiqueId: boutiqueId,
      userId: loggedInUser.id,
      startDate,
    };

    dispatch(createBookingThunk(bookingToCreate));
    reset();
  };

  const history = useHistory();
  const reset = () => {
    setStartDate("");
    history.push(`/boutiques/${boutiqueId}`);
  };

  return (
    loggedInUser && (
      <>
      <div className="form-title-banner">
        <h1 className="form-banner-text">Book Appointment</h1>
      </div>
      <main id="form-root">
        <div className="booking-form-container">
          <div className="error-message-container">
            <ul className="add-boutique-form-errors-ul">
              {validationErrors.map((validationError) => (
                <li
                  className="add-boutique-form-errors-li"
                  key={validationError}
                >
                  {validationError}
                </li>
              ))}
            </ul>
          </div>
          <form className="add-booking-form" onSubmit={bookingSubmitted}>
      
              <label className="form-label">
                <input
                  id="date-input-field"
                  type="datetime-local"
                  onChange={(e) => {
                    console.log(
                      "THIS IS THE DATE COMING FROM THE USER",
                      e.target.value
                    );
                    setStartDate(e.target.value);
                  }}
                  value={startDate}
                  name="startDate"
                />
                </label>
              <div className="add-booking-button-container">
                <button
                  type="submit"
                  className="add-booking-button"
                  disabled={validationErrors.length > 0}
                >
                  Book Appointment
                </button>
              </div>
          </form>
        </div>
      </main>
      </>
    )
  );
};

export default CreateBookingForm;
