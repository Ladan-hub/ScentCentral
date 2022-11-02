import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addBoutiqueThunk } from "../../store/boutiques";

import "./CreateBoutiqueForm.css";

const CreateBoutiqueForm = () => {
  const history = useHistory();

  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);

  // useStates
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
    if (country.length < 4) {
      errors.push("Country must be at least 4 characters");
    }
    if (country.length > 56) {
      errors.push("Country must be less than 57 characters");
    }
    if (city.length < 1) {
      errors.push("City must be at least one character");
    }
    if (city.length > 85) {
      errors.push("City must be less than 86 characters");
    }
    if (address.length < 9) {
      errors.push("City must be at least 9 characters");
    }
    if (address.length > 85) {
      errors.push("City must be less than 86 characters");
    }
    if (
      priceRange !== "$" &&
      priceRange !== "$$" &&
      priceRange !== "$$$" &&
      priceRange !== "$$$" &&
      priceRange !== "$$$$"
    ) {
      errors.push("Price Range must be $ up to $$$$");
    }
    if (imageUrl.length < 10) {
      errors.push("Boutique image URL must be at least 10 characters");
    }
    if (imageUrl.length > 500) {
      errors.push("Boutique image URL must be less than 501 characters");
    }
    // if (imageUrl.length > 500) {
    //   errors.push("Perfume image URL must be less than 500 characters");
    // }
    if ((!imageUrl.endsWith(".jpg")) && (!imageUrl.endsWith(".png")) && (!imageUrl.endsWith(".gif"))) {
      errors.push("Image URL must end with .jpg, .png, or .gif");
    }
    setValidationErrors(errors);
  }, [name, country, city, address, priceRange, imageUrl]);

  const dispatch = useDispatch();

  const boutiqueSubmitted = async (e) => {
    e.preventDefault();
    const boutiqueToCreate = {
      name,
      country,
      city,
      address,
      priceRange,
      imageUrl,
      userId: loggedInUser.id,
    };

    dispatch(addBoutiqueThunk(boutiqueToCreate));
    reset();
  };

  const reset = () => {
    setName("");
    setCountry("");
    setCity("");
    setAddress("");
    setPriceRange("");
    setImageUrl("");

    history.push("/");
  };

  const brokenLinkImage = () => {
  

  }

  return (
    loggedInUser && (
      <main className="form-root">
      <div className="boutique-form-container">
        <h1 className="add-boutique">Create a Boutique</h1>
        <div className="error-message-container">
          <ul className="add-boutique-form-errors-ul">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div>
        <form className="add-boutique-form" onSubmit={boutiqueSubmitted}>
          <main className="fields-container">
          <div className="add-boutique-form-label">
          <label >
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Boutique Name"
              name="name"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              placeholder="Country"
              name="country"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              name="city"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Address"
              name="address"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setPriceRange(e.target.value)}
              value={priceRange}
              placeholder="Price Range"
              name="priceRange"
            />
          </label>
          </div>
          <div>
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              placeholder="Image URL"
              name="imageUrl"
            />
          </label>
          </div>
          <div className="add-boutique-button-container">
          <button disabled={validationErrors.length > 0} className="add-boutique-button"  type="submit">
            Create Boutique!
          </button>
          </div>
          </main>
        </form>
      </div>
      
      </main>
    )
  );
};

export default CreateBoutiqueForm;
