import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateBoutiqueThunk } from "../../store/boutiques";
import { csrfFetch } from "../../store/csrf";

import "./EditBoutiqueForm.css";

const EditBoutiqueForm = () => {
  const history = useHistory();

  const { boutiqueId } = useParams();
  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);
  const boutique = useSelector((state) => state.boutiques[boutiqueId])


  // useStates
  const [name, setName] = useState(boutique.name);
  const [country, setCountry] = useState(boutique.country);
  const [city, setCity] = useState(boutique.city);
  const [address, setAddress] = useState(boutique.address);
  const [priceRange, setPriceRange] = useState(boutique.priceRange);
  const [imageUrl, setImageUrl] = useState(boutique.imageUrl);
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
    if (country.length < 2) {
      errors.push("Country must be at least 4 characters");
    }
    if (country.length > 56) {
      errors.push("Country must be less than 56 characters");
    }
    if (city.length < 1) {
      errors.push("City must be at least one character");
    }
    if (city.length > 85) {
      errors.push("City must be less than 85 characters");
    }
    if (address.length < 9) {
      errors.push("Address must be at least 9 characters");
    }
    if (address.length > 85) {
      errors.push("Address must be less than 85 characters");
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
      errors.push("Perfume image URL must be at least 10 characters");
    }
    if (imageUrl.length > 500) {
      errors.push("Perfume image URL must be less than 500 characters");
    }
    if (imageUrl.length > 500) {
      errors.push("Perfume image URL must be less than 500 characters");
    }
    if (
      !imageUrl.endsWith("jpg") &&
      !imageUrl.endsWith("png") &&
      !imageUrl.endsWith("gif")
    ) {
      errors.push("Image URL must end with jpg, png, or gif");
    }
    if((!imageUrl.startsWith("http://")) && (!imageUrl.startsWith("https://"))) {
      errors.push("Image URL must start with http:// or https://")
    }
    setValidationErrors(errors);
  }, [name, country, city, address, priceRange, imageUrl]);

  const dispatch = useDispatch();

  const editBoutiqueSubmitted = async (e) => {
    e.preventDefault();
    const boutique = {
      id: boutiqueId,
      name,
      country,
      city,
      address,
      priceRange,
      imageUrl,

      userId: loggedInUser.id,
    };

    const editedBoutique = await dispatch(updateBoutiqueThunk(boutique));
    if (editedBoutique) {
      history.push('/boutiques/owned');
    }
    // reset();
  };

  // const reset = () => {
  //   setName("");
  //   setCountry("");
  //   setCity("");
  //   setAddress("");
  //   setPriceRange("");
  //   setImageUrl("");
  //   // history.push('/')
  // };

  return (
    loggedInUser && (
      <main className="form-root">
      <div className="boutique-form-container">
        <h1 className="add-boutique">Edit Boutique</h1>
        <div className="error-message-container">
          <ul className="add-boutique-form-errors">
            {validationErrors.map((validationError) => (
              <li className="add-boutique-form-errors-li" key={validationError}>{validationError}</li>
            ))}
          </ul>
        </div>
        <form className="add-boutique-form" onSubmit={editBoutiqueSubmitted}>
          <main className="fields-container">
          <label className="add-boutique-form-label">
            <input
              className="add-boutique-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Boutique Name"
              name="name"
            />
          </label>
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
          <div className="edit-boutique-button-container">
          <button
            disabled={validationErrors.length > 0}
            className="add-boutique-button"
            type="submit"
          >
            Submit Edit
          </button>
          </div>
          </main>
        </form>
      </div>
      </main>
    )
  );
};

export default EditBoutiqueForm;
