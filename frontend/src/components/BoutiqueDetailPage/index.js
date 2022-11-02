import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteBoutiqueThunk,
  readBoutiqueDetailThunk,
} from "../../store/boutiques";
import Review from "../Review";

import "./BoutiqueDetailPage.css";


const BoutiqueDetail = () => {

  // const [editReview, setEditReview] = useState({});

  const { boutiqueId } = useParams();

  const loggedInUser = useSelector((state) => state.session.user);
  const boutique = useSelector((state) => state.boutiques[boutiqueId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  console.log("This is the reviews array", reviews)

  const reviewsObj = useSelector((state) => state.reviews);
  console.log("THIS IS REVIEWS OBJ", reviewsObj)

  // console.log(boutique);

  // Thunk Action Dispatch for reading the boutique detail
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readBoutiqueDetailThunk(boutiqueId));
  }, [dispatch, boutiqueId]);

  const history = useHistory();

  // Delete button event handler
  const deleteBoutiqueEventHandler = async () => {
    const perfumeToBeDeleted = await dispatch(deleteBoutiqueThunk(boutique));
    if (perfumeToBeDeleted) {
      history.push("/boutiques/owned");
    }
  };

  // Edit button event handler
  const editBoutiqueEventHandler = async () => {
    history.push(`/boutiques/${boutiqueId}/edit`);
  };

  // Review button event handler
  const reviewEventHandler = async () => {
    history.push(`/boutiques/${boutiqueId}/review`);
  };

  if (boutique) {
    return (
      <>
        <div className="boutique-name-container">
          <h1 className="boutique-name">{boutique.name}</h1>
        </div>
        <div className="boutique-priceRange-country-city-container">
        <div className="boutique-detail-country-city">
            {boutique.country}, {boutique.city}
          </div>
          <div className="boutique-priceRange">{boutique.priceRange}</div>
        </div>
        <div className="boutique-image-container">
          <img
            className="single-boutique-image"
            src={boutique.imageUrl}
            alt="boutique preview"
          />
        </div>
        <div className="boutique-address-container">
          <div>{boutique.address}</div>
        </div>
        <section className="buttons-container">
          <span className="delete-boutique-button-container">
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="delete-boutique-button"
                onClick={deleteBoutiqueEventHandler}
              >
                Delete Boutique
              </button>
            ) : null}
          </span>
          <span className="go-to-edit-boutique-button-container">
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="go-to-edit-boutique-button"
                onClick={editBoutiqueEventHandler}
              >
                Edit Boutique
              </button>
            ) : null}
          </span>
          <div className="review-button-container">
            {/* {reviews.map((review) => {if (review.userId){
              (
                <div>
                  <button>You already left a review!</button>
                </div>
              )
            }})} */}
            { loggedInUser && boutique?.userId !== loggedInUser?.id ? (
        
              <button className="review-button" onClick={reviewEventHandler}>
                Leave a Review
              </button>
            ) : null}
          </div>
        </section>
        <section className="all-reviews">
          { loggedInUser && boutique?.userId !== loggedInUser?.id && reviews.length === 0 ? (<div className="write-first-review">Be the first one to write a review for {boutique.name}!</div>) : <section>
              <div>
                <Review  />
              </div>
            </section> }
        </section>
      </>
    );
  }
  return <></>;
};

export default BoutiqueDetail;
