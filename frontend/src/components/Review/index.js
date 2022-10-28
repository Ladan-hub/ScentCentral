import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Review.css";
import { deleteReviewThunk } from "../../store/reviews";


const Review = () => {

  const { boutiqueId } = useParams();

  // useSelectors
  const reviews = useSelector((state) => Object.values(state.reviews));
  const logedInUser = useSelector(state => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const deleteReviewEventHandler = async (id) => {
    const deleteReview = await dispatch(deleteReviewThunk(id));
    if (deleteReview) {
      history.push(`/boutiques/${boutiqueId}`)
    }
  }

    return (
        <div>
          <h2 className="review-label">Reviews</h2>
          {reviews.map((review) => (
            <div className="one-review">{review.content}
            {/* {review?.userId === logedInUser?.id ? <button className="delete-review-button" onClick={() => deleteComment(review.id)}>Delete Review</button> : null} */}
            <div className="delete-button-container">
            {review?.userId === logedInUser?.id ? <button className="delete-review-button" onClick={() => deleteReviewEventHandler(review.id)}>Delete Review</button> : null}
            </div>
            </div>
          ))}
        </div>
      );

}

export default Review;


