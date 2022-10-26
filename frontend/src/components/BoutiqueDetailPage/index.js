import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readBoutiqueDetailThunk } from "../../store/boutiques";

import "./BoutiqueDetailPage.css";

const BoutiqueDetail = () => {
  const { boutiqueId } = useParams();

  const boutique = useSelector((state) => state.boutiques[boutiqueId]);
  console.log(boutique);

  // Thunk Action Dispatch for reading the boutique detail
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dispatching boutique detail thunk")
    dispatch(readBoutiqueDetailThunk(boutiqueId));
  }, [dispatch, boutiqueId]);

  if (boutique) {
    return (
      <>
        <div className="boutique-name-container">
          <h1 className="boutique-name">{boutique.name}</h1>
        </div>
        <div className="boutique-priceRange-country-city-container">
            <div className="boutique-priceRange">{boutique.priceRange}</div>
            <div className="boutique-country-city">{boutique.country}, {boutique.city}</div>
        </div>
        <div className="boutique-image-container">
        <img className="single-boutique-image" src={boutique.imageUrl} alt="boutique preview" />
        </div>
        <div className="boutique-address-container">
            <div>{boutique.address}</div>

        </div>
      </>
    );
  }
  return (
    <></>
  )
};

export default BoutiqueDetail;
