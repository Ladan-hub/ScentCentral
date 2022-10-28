import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import { deleteBoutiqueThunk, readBoutiquesOwnedThunk } from "../../store/boutiques";

import "./OwnedBoutiques.css";


const OwnedBoutiques = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readBoutiquesOwnedThunk());
  }, [dispatch]);

  // UseSelectors
  const boutiques = useSelector((state) => Object.values(state.boutiques));

  const history = useHistory()

  return (
    <main className="owner-root-container">
      <section className="title-and-create-button-container">
        <h1>Welcome!</h1>
      </section>
      <div>
        <NavLink to="/new">
          <div>Add a New Boutique</div>
        </NavLink>
      </div>
      <section className="owned-boutiques-container">
        {boutiques.map((boutique) => (
          <span className="one-boutique-container" key={boutique.id}>
            <span className="one-boutique">
              <img
                onClick={() => history.push(`/boutiques/${boutique.id}`)}
                className="boutique-image"
                src={boutique.imageUrl}
                alt="boutique preview"
              />
              <div className="boutique-name">{boutique.name}</div>
              <div className="boutique-country-city">
                {boutique.country}, {boutique.city}
              </div>
              <div className="boutique-price-range">{boutique.priceRange}</div>
            </span>
          </span>
        ))}
      </section>
    </main>
  );
};

export default OwnedBoutiques;
