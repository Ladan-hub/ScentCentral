import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Review.css";
import { deleteReviewThunk, readReviewThunk } from "../../store/reviews";
import stars from "./star.PNG"

const Review = () => {
  

  const { boutiqueId } = useParams();

  // useSelectors

  const boutique = useSelector((state) => state.boutiques[boutiqueId]);

  const reviews = useSelector((state) => Object.values(state.reviews));
  // console.log("THIS IS THE REVIEWS ARRAY!!!!", reviews)

  const reviewsObj = useSelector((state) => state.reviews);
  // console.log("THIS IS THE REVIEWS OBJECT", reviewsObj)

  const loggedInUser = useSelector((state) => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const deleteReviewEventHandler = async (id) => {
    const deleteReview = await dispatch(deleteReviewThunk(id));
    if (deleteReview) {
      history.push(`/boutiques/${boutiqueId}`);
    }
  };

  const editReviewEventHandler = async (id) => {
    history.push(`/${boutiqueId}/reviews/${id}/edit`);
  };

  // READ dispatch
  useEffect(() => {
    // console.log("USEEFFECT EDIT REVIEW", editReview);
    dispatch(readReviewThunk(boutiqueId));
  }, [boutiqueId]);

  if (!reviews) {
    return null;
  }


  return (
    <div>
      {loggedInUser?.id === boutique?.userId ? <div className="you-cant-leave-review"> You can't leave a review for your own boutique!</div> : null}
      <h2 className="review-label">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="reviews-container">
        
          <div className="reviewer-username-container">
            {loggedInUser?.id === review.userId && <div className="reviewer-username">{loggedInUser.username}</div>}
            {/* {loggedInUser?.id !== review.userId && <div>{review.userId}</div>} */}
          </div>
          <spam className="stars-image-container">
            <img className="star-img" style={{width:"15px"}} src={stars}></img>
          </spam>
          <spam className="stars-number">
          {review.stars}
          </spam>
          <div className="one-review">
            {review.content}
            <div className="buttons-container">
            <div className="delete-review-button-container">
              {review?.userId === loggedInUser?.id ? (
                <button
                  className="delete-review-button"
                  onClick={() => deleteReviewEventHandler(review.id)}
                >
                  Delete Review
                </button>
              ) : null}
            </div>
            <div className="edit-review-button-container">
              {review?.userId === loggedInUser?.id ? (
                <button
                  className="edit-review-button"
                  onClick={() => editReviewEventHandler(review.id)}
                >
                  Edit Review
                </button>
              ) : null}
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
