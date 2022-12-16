import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePerfumeThunk, readPerfumeThunk } from "../../store/perfumes";
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

    //useHistory
    const history = useHistory();

    // useDispatch 
    const dispatch = useDispatch();

    // READ Dispatch
    useEffect(() => {
        dispatch(readPerfumeThunk(boutiqueId));
    }, [boutiqueId]);

    // DELETE Dispatch 
    const deletePerfumeEventHandler = async (id) => {
      const deletePerfume = await dispatch(deletePerfumeThunk(id));
      if (deletePerfume) {
        history.push(`/boutiques/${boutiqueId}`)
      }
    };

    // EDIT event handler 
    const editPerfumeEventHandler = async(id) => {
      history.push(`/${boutiqueId}/perfume/${id}/edit`)
    }

    if (!perfumesArr) {
        return null;
    }

    return (
        <>
        <div className="fragrance-title-container">
        <h2 className="fragrance-title">Fragrances</h2>
        </div>
        <main className="all-perfumes-container">
            {perfumesArr.map((perfume) => (
                <main className="perfumes-container">
        
                    <div className="perfume-image-container">
                    <img className="perfume-img"
                    src={perfume.perfumeImgUrl}
                    alt="perfume preview"
                    onError={event => {event.target.src = "https://library.tamu.edu/discovery/resources/images/default-thumbnail.jpg"}}
                     />
                     </div>
                     <div className="perfume-name-container">
                     <h4>{perfume.name}</h4>
                     </div>
                     <div className="perfume-sold-out">
                     {perfume?.numberAvailable === 0 ? <h3>Sold Out At This Location!</h3> : null}
                     </div>
                     <div className="perfume-buttons-container">
                     {/* <span className="delete-boutique-button-container"> */}
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="delete-perfume-button"
                onClick={() => deletePerfumeEventHandler(perfume.id)}
              >
                Delete Perfume
              </button>
            ) : null}
          {/* </span> */}
          {/* <span className="delete-boutique-button-container"> */}
            {boutique?.userId === loggedInUser?.id ? (
              <button
                className="edit-perfume-button"
                onClick={() => editPerfumeEventHandler(perfume.id)}
              >
                Edit Perfume
              </button>
            ) : null}
          {/* </span> */}
                     </div>
                </main>
            ))}
        </main>
        </>
    )

}

export default Perfume; 

