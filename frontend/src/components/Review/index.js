import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Review.css";
import { deleteReviewThunk, readReviewThunk } from "../../store/reviews";


const Review = () => {

  const { boutiqueId } = useParams();

  // useSelectors
  const reviews = useSelector((state) => Object.values(state.reviews));
  const reviewsObj = useSelector((state) => state.reviews)
  const loggedInUser = useSelector(state => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const deleteReviewEventHandler = async (id) => {
    const deleteReview = await dispatch(deleteReviewThunk(id));
    if (deleteReview) {
      history.push(`/boutiques/${boutiqueId}`)
    }
  }

  const editReviewEventHandler = async(id) => {
    history.push(`/${boutiqueId}/reviews/${id}/edit`)
  }

  // READ dispatch
  useEffect(() => {
    dispatch(readReviewThunk(boutiqueId))

  }, [boutiqueId])

  if (!reviews) {
    return null;
  }
    return (
        <div>
          <h2 className="review-label">Reviews</h2>
          {reviews.map((review) => (
            <div className="reviews-container">
            <div className="one-review">{review.content}
            <div className="delete-review-button-container">
            {review?.userId === loggedInUser?.id ? <button className="delete-review-button" onClick={() => deleteReviewEventHandler(review.id)}>Delete Review</button> : null}
            </div>
            <div className="edit-review-button-container">
            {review?.userId === loggedInUser?.id ? <button className="edit-review-button" onClick={() => editReviewEventHandler(review.id)}>Edit Review</button> : null}
            </div>
            </div>
            </div>
          ))}
        </div>
        
      );

}

export default Review;


