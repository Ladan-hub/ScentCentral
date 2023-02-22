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

  // grabbing the boutiqueId from the URL
  const { boutiqueId } = useParams();

  // useStates
  const [content, setContent] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // Form Validations
  useEffect(() => {
    const errors = [];
    if (content === "") {
      errors.push("")
    }
    else if (content.length < 3) {
      errors.push("Review must be at least 3 chatracters");
    }
    if (content.length > 255) {
      errors.push("Rview must be less than 256 characters");
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

    console.log("THIS IS THE NEW REVIEW", review);

    dispatch(createReviewThunk(review));
    reset();
  };

  const reset = () => {
    setContent("");
    history.push(`/boutiques/${boutiqueId}`);
  };

  

  return (
    loggedInUser && (
      <>
        <div className="form-title-banner">
          <h1 className="form-banner-text">Leave Review</h1>
        </div>
        <main className="form-root">
          <div className="review-form-container">
            <div className="error-message-container">
              <ul className="error-messages-ul">
                {validationErrors.map((validationError) => (
                  <li
                    className="add-review-form-errors-li"
                    key={validationError}
                  >
                    {validationError}
                  </li>
                ))}
              </ul>
            </div>
            <form className="add-boutique-form" onSubmit={reviewSubmitted}>
              <label className="form-label">
                <textarea
                  className="review-field"
                  value={content}
                  name="review"
                  placeholder="Review"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </label>

              <div className="review-button-container">
                <button
                  disabled={validationErrors.length > 0}
                  className="add-new-review-button"
                  type="submit"
                >
                  Create Review
                </button>
              </div>
            </form>
          </div>
        </main>
      </>
    )
  );
};

export default ReviewForm;
