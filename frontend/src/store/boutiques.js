import { csrfFetch } from "./csrf";

// Action Types

const READ_BOUTIQUES = "boutiques/READ";

// Action Creators

// AC for READING all boutiques
export const readBoutiques = (boutiques) => {
  return {
    type: READ_BOUTIQUES,
    boutiques,
  };
};

// Thunk Action Creators

// Thunk AC for fetching all boutiques from the database
export const readBoutiquesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/boutiques/");
  if (response.ok) {
    const boutiques = await response.json();
    dispatch(readBoutiques(boutiques));
    return boutiques;
  }
};

// Reducer

const boutiqueReducer = (state = {}, action) => {
  switch (action.type) {
    case READ_BOUTIQUES: {
        const boutiquesLoaded = {};
        action.boutiques.forEach((boutique) => {
            boutiquesLoaded[boutique.id] = boutique;
        });
        return boutiquesLoaded;
    }
    default:
      return state;
  }
};

export default boutiqueReducer;
