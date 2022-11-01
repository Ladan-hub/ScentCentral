import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReviewThunk } from "../../store/reviews";

import "./LeaveReviewForm.css";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);

  // reviews
  const reviews = useSelector((state) => Object.values(state.reviews));
  console.log("THESE ARE THE REVIEWS", reviews);

  // grabbing the boutiqueId from the URL
  const { boutiqueId } = useParams();

  // useStates
  const [content, setContent] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // Form Validations
  useEffect(() => {
    const errors = [];
    if (content.length < 3) {
      errors.push("Review must be at least 3 chatracters");
    }
    setValidationErrors(errors);
  }, [content]);

  // Submit review button event handler
  const reviewSubmitted = (e) => {
    
    e.preventDefault();

    const review = {
      content,
      userId: loggedInUser.id,
      boutiqueId: boutiqueId,
    };

    dispatch(createReviewThunk(review));
    reset();
  };

  const reset = () => {
    setContent("");
    history.push(`/boutiques/${boutiqueId}`);
  };

  return (
    loggedInUser && (
      <main className="form-root">
      <div className="review-form-container">
        <ul className="error-messages-ul">
          {validationErrors.map((validationError) => (
            <li className="error-messages-li" key={validationError}>{validationError}</li>
          ))}
        </ul>
        <form className="review-form" onSubmit={reviewSubmitted}>
          <main className="fields-container">
            <div className="add-review-textarea">
          <textarea
            className="review-field"
            value={content}
            name="review"
            placeholder="Review"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          </div>
          <div className="add-review-button-container">
          <button disabled={validationErrors.length > 0} className="add-review-button" type="submit">
            Create Review
          </button>
          </div>
          </main>
        </form>
      </div>
      </main>
    )
  );
};

export default ReviewForm;
