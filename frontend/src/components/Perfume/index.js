import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readPerfumeThunk } from "../../store/perfumes";
import "./Perfume.css"

const Perfume = () => {
    // Grab boutiqueId from the URL 
    const {boutiqueId} = useParams();

    // useSelectors
    const boutique = useSelector((state) => state.boutiques[boutiqueId]);

    const perfumesArr = useSelector((state) => Object.values(state.perfumes));
    console.log(" --- THIS IS PERFUMES ARRAY --- ", perfumesArr)

    const perfumesObj = useSelector((state) => state.perfumes);
    console.log(" --- THIS IS THE PERFUMES OBJECT --- ", perfumesObj )

    const loggedInUser = useSelector((state) => state.session.user);

    // useDispatch 
    const dispatch = useDispatch();

    // READ Dispatch
    useEffect(() => {
        dispatch(readPerfumeThunk(boutiqueId));
    }, [boutiqueId]);

    if (!perfumesArr) {
        return null;
    }

    return (
        <>
        <h2>Fragrances</h2>
        <main className="all-perfumes-container">
            {perfumesArr.map((perfume) => (
                <main className="perfumes-container">
        
                    <div className="perfume-image-container">
                    <img className="perfume-img"
                    src={perfume.perfumeImgUrl}
                    alt="perfume preview"
                    onError={event => {event.target.src = "https://ionicframework.com/docs/img/demos/thumbnail.svg"}}
                     />
                     </div>
                     <div className="perfume-name">
                     <h4>{perfume.name}</h4>
                     </div>
                     <div className="perfume-sold-out">
                     {perfume?.numberAvailable === 0 ? <h3>Sold Out At This Location!</h3> : null}
                     </div>
                </main>
            ))}
        </main>
        </>
    )

}

export default Perfume; 
