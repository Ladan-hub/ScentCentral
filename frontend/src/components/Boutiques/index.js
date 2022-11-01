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
        
            <main className="all-boutiques-container">
                {boutiques.map((boutique) => (
                    <main className="boutiques-container">
                    <div className="boutique-image-container" key={boutique.id} >
        
                           
                            <img onClick={() => history.push(`/boutiques/${boutique.id}`)} className="boutique-image" src={boutique.imageUrl} alt="boutique preview" />
                            </div>
                            <div className="boutique-info-container">
                           <div>
                            <h4 className="boutique-name">{boutique.name}</h4>
                            </div>
                        
                            
                           <div>
                            <h4 className="boutique-country-city" >{boutique.country}, {boutique.city}</h4>
                            </div>
                            <div>
                            <h4 className="boutique-price-range">
                            {boutique.priceRange}
                            </h4>
                            </div>
                        
                        </div>
                    </main>
                ))}

            </main>


    )

}


export default Boutiques;
