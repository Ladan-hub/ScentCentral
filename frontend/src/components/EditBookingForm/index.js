import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createBookingThunk } from "../../store/bookings";
import { updateBookingThunk } from "../../store/bookings";


const EditBookingForm = () => {
  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);
  // const { boutiqueId } = useParams(); 
  const { bookingId } = useParams();
  const bookings = useSelector((state) => Object.values (state.bookings))
  const bookingsObj = useSelector((state) => state.bookings)
  const booking = bookingsObj[bookingId];

  console.log("THIS IS MY BOOKING", booking)
  console.log("THIS IS MY BOOKING BOUTIQUEID", booking.boutiqueId)


  // console.log("THIS IS 1 BOOKING", booking)

  // console.log("THIS IS EACH BOOKING OBJECT!!!", bookingsObj[bookingId]);


  // console.log("THIS IS YOUR CURRENT BOOKINGS", bookings)
  // console.log("THIS IS THE BOUTIQUE ID", boutiqueId);

  //useStates
  const [startDate, setStartDate] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

   // Validation Errors
   useEffect(() => {
    const errors = [];
    if (startDate === "") {
      errors.push("Please choose a date and time for your appointment")
    }
    setValidationErrors(errors)
  }, [startDate])



  // Form Submition Event Handler 
  const dispatch = useDispatch()
  const editBookingSubmitted = async (e) => {
    e.preventDefault();
    const editedBooking = {
        id: booking.id,
        boutiqueId: booking.boutiqueId,
        userId: loggedInUser.id,
        startDate
    };
    console.log("THIS IS THE BOOKING TO BE CREATED", editedBooking)
    dispatch(updateBookingThunk(editedBooking, booking.id));
    reset();
    
  }
  const history = useHistory()
  const reset = () => {
    setStartDate("");
    history.push(`/bookings`)
  }
  
  return (
    loggedInUser && (
      <main className="form-root">
        <div className="booking-form-container">
          <div className="book-appointment-label">
            <h1 className="book-appointment">Change your Appointment</h1>
          </div>
          <div className="error-message-container">
          <ul className="add-boutique-form-errors-ul">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div>
        <form className="add-booking-form" onSubmit={editBookingSubmitted}>
            <main className="fields-container">
                <div className="pick-a-date">
                    <input
                    id="date-input-field"
                    type="datetime-local"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    name="startDate"
                    />
                </div>
                <div className="add-booking-button-container">
                    <button type="submit" className="add-booking-button">Book Appointment</button>
                </div>

            </main>

        </form>

        </div>
      </main>
    )
  );
};

export default EditBookingForm;
