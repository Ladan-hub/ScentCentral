import { GoogleApiWrapper } from "google-maps-react";
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
        <>
        {/* <div className="share-your-boutiques-container">
        <h1 className="share-your-boutiques-text">Share your perfume boutiques with the world!</h1>
        </div> */}
        <div className="box">
        <img className="main-banner" src="https://www.bykilian.com/media/export/cms/APRIL%202020/APRIL%202020/TOP_BANNER_3840x960_LIQUORS_DESKTOP.jpg" alt="main banner"/>
        <div className="text-over-banner"><h1 className="text">Discover Our Exclusive <br />Selection of Boutiques <br />Around The World</h1></div>
        </div>
            <main className="all-boutiques-container">
            
                
                
                
                {boutiques.map((boutique) => (
                    <main className="boutiques-container">
                        
                    <div className="boutique-image-container" key={boutique.id} >
        
                           
                            <img onClick={() => history.push(`/boutiques/${boutique.id}`)} className="boutique-image" src={boutique.imageUrl} alt="boutique preview" onError={event => {event.target.src = "https://library.tamu.edu/discovery/resources/images/default-thumbnail.jpg"}} />
                            </div>
                            <div className="boutique-info-container">
                           
                            <h4 className="boutique-name">{boutique.name}</h4>
                            <h4 className="boutique-country-city" >{boutique.country}, {boutique.city}</h4>
                            <h4 className="boutique-price-range">
                            {boutique.priceRange}
                            </h4>
                           
                        
                        </div>
                    </main>
                ))}

             
            </main>
            <footer className="footer">
            <a className="footer-github-link" rel="noreferrer" href="https://github.com/Ladan-hub/ScentCentral">Github</a>
            <a className="footer-linkedIn" rel="noreferrer" href="https://linkedin.com/in/ladan-nazari">LinkedIn</a>
         </footer>
         </>


    )

}


export default Boutiques;
