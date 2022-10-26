import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { readBoutiquesThunk } from "../../store/boutiques";

import "./Boutiques.css"



const Boutiques = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readBoutiquesThunk())
    }, [dispatch])

    // UseSelectors
    const boutiques = useSelector(state => Object.values(state.boutiques));

    const history = useHistory()

    return (
        <main className="splash-page">
            <section className="all-boutiques-container">
                {boutiques.map((boutique) => (
                    <span className="one-boutique-container" key={boutique.id} >
                        <span className="one-boutique">
                            <img onClick={() => history.push(`/boutiques/${boutique.id}`)} className="boutique-image" src={boutique.imageUrl} alt="boutique preview" />
                            <div className="boutique-name">{boutique.name}</div>
                            <div className="boutique-country-city">{boutique.country}, {boutique.city}</div>
                            <div className="boutique-price-range">{boutique.priceRange}</div>
                        </span>
                    </span>

                ))}

            </section>

        </main>
    )

}


export default Boutiques;
