import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createBookingThunk } from "../../store/bookings";
import "./CreateBookingForm.css"



const CreateBookingForm = () => {
  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);
  const { boutiqueId } = useParams();
  const bookings = useSelector((state) => Object.values (state.bookings))
  // console.log("THIS IS MY BOOKING", bookings)
  // console.log("THIS IS THE BOUTIQUE ID", boutiqueId);

  //useStates
  const [startDate, setStartDate] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const now = new Date()
  console.log("THIS IS MY NOW", now);
  console.log("this is user's now", startDate)

  // Validation Errors
  useEffect(() => {
    const errors = [];
    if (startDate === "") {
      errors.push("Please choose a date and time for your appointment")
    }
    else if ( startDate !== ""  && now.getDate() > +startDate.slice(8, -6) ) {
      errors.push("You can't pick a day in the past")
    }
    else if ( startDate !== "" && now.getDate() === +startDate.slice(8, -6) && (now.getHours() > +startDate.slice(11, -3))) {
      errors.push("You can't pick a time in the past")
    }
    else if ( startDate !== "" && now.getDate() === +startDate.slice(8, -6) && now.getMinutes() > +startDate.slice(14)) {
      errors.push("You can't pick a minute in the past")
    }
    setValidationErrors(errors)
  }, [startDate])

  

  // console.log(new Date());


  // Form Submition Event Handler 
  const dispatch = useDispatch()
  const bookingSubmitted = async (e) => {
    e.preventDefault();
    // bookings.map((booking) => {
    //   if (booking.id && loggedInUser.id === booking.userId ) {
    //     alert('You already have a booking for this boutique.')
    //   } 
    // })
    const bookingToCreate = {
        boutiqueId: boutiqueId,
        userId: loggedInUser.id,
        startDate
    };
    // console.log("THIS IS THE BOOKING TO BE CREATED", bookingToCreate)
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
        {/* {bookings.map((booking) => (
          <div className="no-booking">
            {loggedInUser?.id === booking?.userId ? (
              <h1>You already have a booking for this boutique at {booking.startDate}</h1>

            ) :null  }

          </div>
        ))} */}
        
        <div className="booking-form-container">
          <div className="book-appointment-label">
            <h1 className="book-appointment">Book an Appointment</h1>
          </div>
          <div className="error-message-container">
          <ul className="add-boutique-form-errors-ul">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div>
        <form className="add-booking-form" onSubmit={bookingSubmitted}>
            <main className="fields-container">
                <div className="pick-a-date">
                    <input
                    id="date-input-field"
                    type="datetime-local"
                    onChange={
                      (e) => {console.log("THIS IS THE DATE COMING FROM THE USER" , e.target.value); setStartDate(e.target.value)}
                 
                    }
                    value={startDate}
                    name="startDate"
                    />
                </div>
                <div className="add-booking-button-container">
                    <button type="submit" className="add-booking-button" disabled={validationErrors.length > 0}>Book Appointment</button>
                </div>

            </main>

        </form>

        </div>
      </main>
    )
  );

};

export default CreateBookingForm;
