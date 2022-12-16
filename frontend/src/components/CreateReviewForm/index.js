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
  const [stars, setStars] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  // Form Validations
  useEffect(() => {
    const errors = [];
    if (content.length < 3) {
      errors.push("Review must be at least 3 chatracters");
    }
    if (content.length > 255) {
      errors.push("Rview must be less than 256 characters")
    }
    setValidationErrors(errors);
  }, [content]);

  // Submit review button event handler
  const reviewSubmitted = (e) => {
    
    e.preventDefault();

    const review = {
      content,
      stars,
      userId: loggedInUser.id,
      boutiqueId: boutiqueId,
    };

    console.log("THIS IS THE NEW REVIEW", review)

    dispatch(createReviewThunk(review));
    reset();
  };

  const reset = () => {
    setContent("");
    history.push(`/boutiques/${boutiqueId}`);
  };

  const starCount = (num) => {

    setStars(num)

}

  return (
    loggedInUser && (
      <main className="form-root">
      <div className="review-form-container">
        <div className="error-message-container">
        <ul className="error-messages-ul">
          {validationErrors.map((validationError) => (
            <li className="add-review-form-errors-li" key={validationError}>{validationError}</li>
          ))}
        </ul>
        </div>
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
          <div className="stars-and-button-container">
          {/* <div className='star-container'>
                                            {stars < 1 && <i id='noStar1' onClick={() => starCount(1)} className="fa-regular fa-star"></i>}
                                            {stars > 0 && <i id='star1' onClick={() => starCount(1)} className="fa-solid fa-star"></i>}
                                            {stars < 2 && <i id='noStar2' onClick={() => starCount(2)} className="fa-regular fa-star"></i>}
                                            {stars > 1 && <i id='star2' onClick={() => starCount(1)} className="fa-solid fa-star"></i>}
                                            {stars < 3 && <i id='noStar3'  onClick={() => starCount(3)} className="fa-regular fa-star"></i>}
                                            {stars > 2 && <i id='star3'  onClick={() => starCount(2)} className="fa-solid fa-star"></i>}
                                            {stars < 4 && <i id='noStar4'  onClick={() => starCount(4)} className="fa-regular fa-star"></i>}
                                            {stars > 3 && <i id='star4' onClick={() => starCount(3)} className="fa-solid fa-star"></i>}
                                            {stars < 5 && <i id='noStar5' onClick={() => starCount(5)} className="fa-regular fa-star"></i>}
                                            {stars > 4 && <i id='star5'  onClick={() => starCount(4)} className="fa-solid fa-star"></i>}
                                        </div> */}
        
          {/* <div className="add-review-button-container"> */}
          <button disabled={validationErrors.length > 0} className="add-new-review-button" type="submit">
            Create Review
          </button>
          {/* </div> */}
          </div>
          </main>
        </form>
      </div>
      </main>
    )
  );
};

export default ReviewForm;
