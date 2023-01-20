import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteBoutiqueThunk,
  readBoutiqueDetailThunk,
} from "../../store/boutiques";
import Review from "../Review";
import Perfume from "../Perfume";
import "./BoutiqueDetailPage.css";



const BoutiqueDetail = () => {

  // const [editReview, setEditReview] = useState({});

  const { boutiqueId } = useParams();

  const loggedInUser = useSelector((state) => state.session.user);
  const boutique = useSelector((state) => state.boutiques[boutiqueId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  // console.log("This is the reviews array", reviews)

  const reviewsObj = useSelector((state) => state.reviews);
  // console.log("THIS IS REVIEWS OBJ", reviewsObj)

  const bookings = useSelector((state) => Object.values (state.bookings))
  console.log("THESE ARE THE BOOKINGS", bookings)


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

  // Create perfume event handler
  const createPerfumeEventHandler = async => {
    history.push(`/boutiques/${boutiqueId}/perfume`)
  }

  // Create booking event handler
  const createBookingEventHandler = async => {
    history.push(`/boutiques/${boutiqueId}/booking`)
  }

  if (boutique) {
    return (
      <>
        <div className="boutique-name-container">
          <h1 id="boutique-name">{boutique.name}</h1>
        </div>
        <div className="boutique-country-city-container">
        <div className="boutique-detail-country-city">
        {reviews.length} reviews . {boutique.country}, {boutique.city}
          </div>
          </div>
         <div className="boutique-priceRange-container">
          <div className="boutique-priceRange">{boutique.priceRange}</div>
          </div>
        
        <div className="boutique-image-container">
          <img
            className="single-boutique-image"
            src={boutique.imageUrl}
            alt="boutique preview"
            onError={event => {event.target.src = "https://library.tamu.edu/discovery/resources/images/default-thumbnail.jpg"}}
          />
        </div>
        <div className="boutique-address-container">
          <div className="boutique-address">{boutique.address}</div>
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
          <span className="go-to-create-perfume-button-container">
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="go-to-create-perfume-button"
                onClick={createPerfumeEventHandler}
              >
                Create Perfume
              </button>
            ) : null}
          </span>
          
        </section>
        <section className="all-perfumes">
          <section>
            <div>
              <Perfume /> 
            </div>
          </section>
          {loggedInUser && boutique?.userId !== loggedInUser?.id  ? (
            <div className="bookings-botton-container">
            <button className="go-to-create-booking-button" onClick={createBookingEventHandler}>Book an Apponitment</button>
          </div>

          ) : null }
        </section>
        <div className="review-button-container">
            { loggedInUser && boutique?.userId !== loggedInUser?.id ? (
        
              <button className="review-button" onClick={reviewEventHandler}>
                Leave a Review
              </button>
            ) : null}
          </div>
        <section className="all-reviews">
          <section>
              <spam>
                <Review  />
              </spam>
            </section> 
        </section>
      </>
    );
  }
  return <></>;
};

export default BoutiqueDetail;
