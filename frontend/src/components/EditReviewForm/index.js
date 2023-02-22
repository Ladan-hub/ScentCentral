import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateReviewThunk } from "../../store/reviews";
import "./EditReviewForm.css";

const EditReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { reviewId } = useParams();
  const { boutiqueId } = useParams();
  // console.log("THIS IS THE REVIEW ID",reviewId)
  // console.log("this is the boutique id", boutiqueId)

  const review = useSelector((state) => state.reviews[reviewId]);
  const loggedInUser = useSelector((state) => state.session.user);

  // useStates
  const [content, setContent] = useState(review.content);
  const [stars, setStars] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  // Form Validations
  useEffect(() => {
    const errors = [];
    if (content.length < 3) {
      errors.push("Review must be at least 3 chatracters");
    }
    if (content.length > 255) {
      errors.push("Rview must be less than 256 characters");
    }
    setValidationErrors(errors);
  }, [content]);

  // Dispatching UPDATE REVIEW
  const editedReviewSubmitted = async (e) => {
    e.preventDefault();
    const editedReview = {
      id: reviewId,
      content,
      stars,
      userId: loggedInUser.id,
      boutiqueId: boutiqueId,
    };
    const newReview = await dispatch(updateReviewThunk(editedReview, reviewId));
    console.log("NEW REVIEW", newReview);
    if (newReview) {
      history.push(`/boutiques/${boutiqueId}`);
    }
  };

  const starCount = (num) => {
    setStars(num);
  };

  return (
    loggedInUser && (
      <>
          <div className="form-title-banner">
            <h1 className="form-banner-text">Edit Review</h1>
          </div>
          <main className="form-root">
            <div className="review-form-container">
            <div className="error-message-container">
              <ul className="error-messages-ul">
                {validationErrors.map((validationError) => (
                  <li className="error-messages-li" key={validationError}>
                    {validationError}
                  </li>
                ))}
              </ul>
              </div>
              <form
                className="add-boutique-form"
                onSubmit={editedReviewSubmitted}
              >
                <label className="form-label">
                  <textarea
                    className="review-field"
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  ></textarea>
                </label>

                <div id="add-review-button-container">
                  <button
                    disabled={validationErrors.length > 0}
                    id="add-new-review-button"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
   
      </>
    )
  );
};
export default EditReview;
