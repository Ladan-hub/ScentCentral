import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addBoutiqueThunk } from "../../store/boutiques";
import { createPerfumeThunk } from "../../store/perfumes";
import "./CreatePerfumeForm.css";

const CreatePerfumeForm = () => {
  const history = useHistory();

  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);

  // grabbing the boutiqueId from the URL
  const { boutiqueId } = useParams();

  // useStates
  const [name, setName] = useState("");
  const [numberAvailable, setNumberAvailable] = useState("");
  const [perfumeImgUrl, setPerfumeImgUrl] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // Validation Errors
  useEffect(() => {
    const errors = [];
    if (name.length < 2) {
      errors.push("Name must be at least 2 characters");
    }
    if (name.length > 250) {
      errors.push("Name must be less than 250 characters");
    }
    if (numberAvailable.length === 0) {
      errors.push("Enter the inventory number");
    }
    // if (numberAvailable === "") {
    //     errors.push("Number available must be between 0 and 1000")
    // }

    // console.log("THIS IS THE NUMBER", +numberAvailable);
    // console.log(typeof +numberAvailable);

    if (!Number.isInteger(parseInt(numberAvailable))) {
      errors.push("Please enter a valid number");
    }

    if (perfumeImgUrl.length < 10) {
      errors.push("Perfume image URL must be at least 10 characters");
    }
    if (perfumeImgUrl.length > 500) {
      errors.push("Perfume image URL must be less than 501 characters");
    }
    if (
      !perfumeImgUrl.endsWith(".jpg") &&
      !perfumeImgUrl.endsWith(".png") &&
      !perfumeImgUrl.endsWith(".gif")
    ) {
      errors.push("Image URL must end with .jpg, .png, or .gif");
    }
    if (
      !perfumeImgUrl.startsWith("http://") &&
      !perfumeImgUrl.startsWith("https://")
    ) {
      errors.push("Image URL must start with http:// or https://");
    }
    setValidationErrors(errors);
  }, [name, numberAvailable, perfumeImgUrl]);

  const dispatch = useDispatch();

  const perfumeSubmitted = async (e) => {
    e.preventDefault();
    const perfumeToCreate = {
      name,
      numberAvailable,
      perfumeImgUrl,
      boutiqueId: boutiqueId,
    };

    console.log("THIS IS THE NEW PERFUME", perfumeToCreate);

    dispatch(createPerfumeThunk(perfumeToCreate));
    reset();
  };

  const reset = () => {
    setName("");
    setNumberAvailable("");
    setPerfumeImgUrl("");
    history.push(`/boutiques/${boutiqueId}`);
  };

  return (
    loggedInUser && (
      <>
      <div className="form-title-banner">
        <h1 className="form-banner-text">Create Perfume</h1>
      </div>
      <main className="form-root">
        <div className="boutique-form-container">
    
          <div className="error-message-container">
            <ul className="add-boutique-form-errors-ul">
              {validationErrors.map((validationError) => (
                <li
                  className="add-boutique-form-errors-li"
                  key={validationError}
                >
                  {validationError}
                </li>
              ))}
            </ul>
          </div>
          <form className="add-boutique-form" onSubmit={perfumeSubmitted}>
            <main className="fields-container">
          
                <label className="form-label">
                  <input
                    className="add-boutique-field"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Perfume Name"
                    name="name"
                  />
                </label>
      
          
                <label className="form-label">
                  <input
                    className="add-boutique-field"
                    type="text"
                    onChange={(e) => setNumberAvailable(e.target.value)}
                    value={numberAvailable}
                    placeholder="Number Available"
                    name="numberAvailable"
                  />
                </label>
             
                <label className="form-label">
                  <input
                    className="add-boutique-field"
                    type="text"
                    onChange={(e) => setPerfumeImgUrl(e.target.value)}
                    value={perfumeImgUrl}
                    placeholder="Image URL"
                    name="perfumeImgUrl"
                  />
                </label>
      
              <div className="add-boutique-button-container">
                <button
                  disabled={validationErrors.length > 0}
                  id="perfume-add-boutique-button"
                  type="submit"
                >
                  Create Perfume
                </button>
              </div>
            </main>
          </form>
        </div>
      </main>
      </>
    )
  );
};

export default CreatePerfumeForm;
