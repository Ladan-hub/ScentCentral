import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteBoutiqueThunk,
  readBoutiqueDetailThunk,
} from "../../store/boutiques";
import Review from "../Review";

import "./BoutiqueDetailPage.css";

const BoutiqueDetail = () => {
  const { boutiqueId } = useParams();

  const loggedInUser = useSelector((state) => state.session.user);
  const boutique = useSelector((state) => state.boutiques[boutiqueId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  console.log("This is the reviews array", reviews)

  const reviewsObj = useSelector((state) => state.reviews);

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
          <div className="boutique-priceRange">{boutique.priceRange}</div>
          <div className="boutique-country-city">
            {boutique.country}, {boutique.city}
          </div>
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
          <span className="edit-boutique-button-container">
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="edit-boutique-button"
                onClick={editBoutiqueEventHandler}
              >
                Edit Boutique
              </button>
            ) : null}
          </span>
          <span className="review-button-container">
            { loggedInUser && boutique?.userId !== loggedInUser?.id ? (
              <button className="review-button" onClick={reviewEventHandler}>
                Leave a Review
              </button>
            ) : null}
          </span>
        </section>
        <section className="all-reviews">
          
            <section>
              <div>
                <Review />
              </div>
            </section>
          
        </section>
      </>
    );
  }
  return <></>;
};

export default BoutiqueDetail;
