import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updatePerfumeThunk } from "../../store/perfumes";
import "./EditPerfumeForm.css";

const EditPerfumeForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();



  const { boutiqueId } = useParams();
  const {perfumeId} = useParams();

  // console.log("THIS IS THE PERFUME ID", perfumeId)
  // console.log("THIS IS THE BOUTIQUE ID", boutiqueId)


  const perfume = useSelector((state) => state.perfumes[perfumeId])
  const loggedInUser = useSelector((state) => state.session.user);



  // useStates
  const [name, setName] = useState(perfume.name);
  const [numberAvailable, setNumberAvailable] = useState(perfume.numberAvailable);
  const [perfumeImgUrl, setPerfumeImgUrl] = useState(perfume.perfumeImgUrl);
  const [validationErrors, setValidationErrors] = useState([]);

  // Validation Errors
  useEffect(() => {
    const errors = [];
    if (name.length < 2) {
      errors.push("Name must be at least 2 characters");
    }
    if (name.length > 250) {
      errors.push("Name must be less than 251 characters");
    }
    if (numberAvailable.length === 0) {
        errors.push("Enter the inventory number")
    }
    // if (numberAvailable === "") {
    //     errors.push("Number available must be between 0 and 1000")
    // }
    
    if (perfumeImgUrl.length < 10) {
      errors.push("Perfume image URL must be at least 10 characters");
    }
    if (perfumeImgUrl.length > 500) {
      errors.push("Perfume image URL must be less than 501 characters");
    }
    if ((!perfumeImgUrl.endsWith(".jpg")) && (!perfumeImgUrl.endsWith(".png")) && (!perfumeImgUrl.endsWith(".gif"))) {
      errors.push("Image URL must end with .jpg, .png, or .gif");
    }
    if((!perfumeImgUrl.startsWith("http://")) && (!perfumeImgUrl.startsWith("https://"))) {
      errors.push("Image URL must start with http:// or https://")
    }
    setValidationErrors(errors);
  }, [name,numberAvailable, perfumeImgUrl]);



  const editedPerfumeSubmitted = async (e) => {
    e.preventDefault();
    const editedPerfume = {
      id: perfumeId,
      name,
      numberAvailable,
      perfumeImgUrl,
      boutiqueId: boutiqueId
    };

    console.log("THIS IS THE EDITED PERFUME", editedPerfume)


    dispatch(updatePerfumeThunk(editedPerfume, perfumeId));
    reset();
  };

  const reset = () => {
    setName(perfume.name);
    setNumberAvailable(perfume.numberAvailable);
    setPerfumeImgUrl(perfume.perfumeImgUrl)
    history.push(`/boutiques/${boutiqueId}`);
  };
  

  return (
    loggedInUser && (
      <main className="form-root">
      <div className="boutique-form-container">
        <h1 className="add-boutique">Edit Perfume</h1>
        <div className="error-message-container">
          <ul className="add-boutique-form-errors-ul">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div>
        <form className="add-boutique-form" onSubmit={editedPerfumeSubmitted}>
          <main className="fields-container">
          <div className="add-boutique-form-label">
          <label >
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Perfume Name"
              name="name"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setNumberAvailable(e.target.value)}
              value={numberAvailable}
              placeholder="Number Available"
              name="numberAvailable"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setPerfumeImgUrl(e.target.value)}
              value={perfumeImgUrl}
              placeholder="Image URL"
              name="perfumeImgUrl"
            />
          </label>
          </div>
          <div className="add-boutique-button-container">
          <button disabled={validationErrors.length > 0} className="add-boutique-button"  type="submit">
            Edit Perfume!
          </button>
          </div>
          </main>
        </form>
      </div>
      
      </main>
    )
  );
};

export default EditPerfumeForm;
