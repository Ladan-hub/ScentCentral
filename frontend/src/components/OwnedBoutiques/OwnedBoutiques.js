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
  const loggedInUser = useSelector((state) => state.session.user);

  const history = useHistory()

  return (
   <>
      <section className="title">
        <h1 className="welcome-message">Welcome to your Boutiques!</h1>
        </section>
      <div className="add-new-boutique-container">
        <NavLink className="add-new-boutique-navlink" to="/new">
          <div className="add-new-boutique-text">Add a New Boutique</div>
        </NavLink>
      </div>
      
      <main className="owned-boutiques-container">
        {boutiques.map((boutique) => (
          <main className="one-boutique-container" key={boutique.id}>
            <div className="one-boutique">
              <img
                onClick={() => history.push(`/boutiques/${boutique.id}`)}
                className="boutique-image"
                src={boutique.imageUrl}
                alt="boutique preview"
                onError={event => {event.target.src = "https://library.tamu.edu/discovery/resources/images/default-thumbnail.jpg"}}
              />
              </div>
              <div className="boutique-name">{boutique.name}</div>
              <div className="boutique-country-city">
                {boutique.country}, {boutique.city}
              </div>
              <div className="boutique-price-range">{boutique.priceRange}</div>
          </main>
        ))}
   </main>
</>
  );
};

export default OwnedBoutiques;
