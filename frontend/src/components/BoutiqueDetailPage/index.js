import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {deleteBoutiqueThunk, readBoutiqueDetailThunk} from "../../store/boutiques";

import "./BoutiqueDetailPage.css";

const BoutiqueDetail = () => {
  const { boutiqueId } = useParams();

  const loggedInUser = useSelector(state => state.session.user);
  const boutique = useSelector((state) => state.boutiques[boutiqueId]);
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
    history.push(`/boutiques/${boutiqueId}/edit`)
  }

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
        {boutique?.userId === loggedInUser?.id ?   <span className="buttons-container">
        <span className="delete-boutique-button-container">
        <button
            className="delete-boutique-button"
            onClick={deleteBoutiqueEventHandler}
          >
            Delete Boutique
          </button>
        </span>
        <span className="edit-boutique-button-container">
          <button className="edit-boutique-button" onClick={editBoutiqueEventHandler}>Edit Boutique</button>
        </span>
        </span> : null }
      </>
    );
  }
  return <></>;
};

export default BoutiqueDetail;
