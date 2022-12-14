import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createBookingThunk } from "../../store/bookings";



const CreateBookingForm = () => {
  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);
  const { boutiqueId } = useParams();
  const bookings = useSelector((state) => Object.values (state.bookings))
  console.log("THIS IS YOUR CURRENT BOOKINGS", bookings)
  // console.log("THIS IS THE BOUTIQUE ID", boutiqueId);

  //useStates
  const [startDate, setStartDate] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // Validation Errors



  // Form Submition Event Handler 
  const dispatch = useDispatch()
  const bookingSubmitted = async (e) => {
    e.preventDefault();
    const bookingToCreate = {
        boutiqueId: boutiqueId,
        userId: loggedInUser.id,
        startDate
    };
    console.log("THIS IS THE BOOKING TO BE CREATED", bookingToCreate)
    dispatch(createBookingThunk(bookingToCreate));
    reset();
    
  }
  const history = useHistory()
  const reset = () => {
    setStartDate("");
    history.push(`/boutiques/${boutiqueId}`)
  }
  
  return (
    loggedInUser && (
      <main className="form-root">
        <div className="booking-form-container">
          <div className="label">
            <h1 className="book-appointment">Book an Appointment</h1>
          </div>
          {/* <div className="error-message-container">
          <ul className="add-boutique-form-errors-ul">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div> */}
        <form className="add-booking-form" onSubmit={bookingSubmitted}>
            <main className="field-container">
                <div className="pick-a-date">
                    <input
                    type="datetime-local"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    name="startDate"
                    />
                </div>
                <div className="add-booking-button-container">
                    <button type="submit" className="add-booking-button">Book</button>
                </div>

            </main>

        </form>

        </div>
      </main>
    )
  );
};

export default CreateBookingForm;
