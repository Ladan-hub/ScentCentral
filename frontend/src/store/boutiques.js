import { csrfFetch } from "./csrf";

// Action Types:

const READ_BOUTIQUES = "boutiques/READ";
const READ_BOUTIQUE_DETAIL = "boutiques/DETAIL";
const READ_OWNED_BOUTIQUE = "boutiques/OWNED";
const CREATE = "boutique/CREATE";
const DELETE = "boutique/DELETE";
const UPDATE= 'boutique/UPDATE'

// Action Creators:

// AC for READING all boutiques
export const readBoutiques = (boutiques) => {
  return {
    type: READ_BOUTIQUES,
    boutiques,
  };
};

// AC for READING the boutique detail
export const readBoutiqueDetail = (boutique) => {
  return {
    type: READ_BOUTIQUE_DETAIL,
    boutique,
  };
};

// AC for READING owned boutiques
export const readBoutiquesOwned = (boutiques) => {
  return {
    type: READ_OWNED_BOUTIQUE,
    boutiques,
  };
};

// AC for CREATE
export const createBoutiqueAction = (boutique) => {
  return {
    type: CREATE,
    boutique,
  };
};

// AC for UPDATE
export const updateBoutiqueAction = (boutique) => {
  return {
    type: UPDATE,
    boutique
  }
}

// AC for DELETE
export const deleteBoutiqueAction = (boutiqueId) => {
  return {
    type: DELETE,
    boutiqueId
  }
}


// Thunks: 

// Thunk for fetching all boutiques from the database
export const readBoutiquesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/boutiques/");
  if (response.ok) {
    const boutiques = await response.json();
    dispatch(readBoutiques(boutiques));
    return boutiques;
  }
};

// Thunk for fetching one boutique from the database
export const readBoutiqueDetailThunk = (boutiqueId) => async (dispatch) => {
  console.log("HELLO FROM THUNK");
  const response = await csrfFetch(`/api/boutiques/${boutiqueId}`);
  if (response.ok) {
    console.log("RESPONSE WAS OK");
    const boutique = await response.json();
    dispatch(readBoutiqueDetail(boutique));
    return boutique;
  }
};

// Thunk for fetching all owned boutiques from the database
export const readBoutiquesOwnedThunk = () => async (dispatch) => {
  console.log("HELLO FROM THUNK");
  const response = await csrfFetch("/api/boutiques/owned");
  if (response.ok) {
    console.log("RESPONSE WAS OK");
    const boutiques = await response.json();
    console.log(boutiques)
    dispatch(readBoutiquesOwned(boutiques));
    return boutiques;
  }
  return {hello:"world"};
};

// Thunk CREATE
export const addBoutiqueThunk = (boutiqueToCreate) => async (dispatch) => {
  const response = await csrfFetch("/api/boutiques", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(boutiqueToCreate),
  });
  if (response.ok) {
    const newlyCreatedBoutique = await response.json();
    dispatch(createBoutiqueAction(newlyCreatedBoutique));
    return newlyCreatedBoutique;
  }
};



// Thunk DELETE
export const deleteBoutiqueThunk = (boutique) => async dispatch => {
  const response = await csrfFetch('/api/boutiques/delete', {
    method: 'DELETE',
    body: JSON.stringify(boutique)
  })
  if (response.ok) {
    const boutiqueToBeDeleted = await response.json();
    dispatch(deleteBoutiqueAction(boutiqueToBeDeleted.id))
    return boutiqueToBeDeleted;
  }
}

// Thunk UPDATE 
export const updateBoutiqueThunk = (boutique) => async(dispatch) => {
  const response = await csrfFetch(`/api/boutiques/${boutique.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(boutique)
  })
  if (response.ok) {
    const boutique = await response.json();
    dispatch(updateBoutiqueAction(boutique));
    return boutique;
  }
}


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
    case READ_BOUTIQUE_DETAIL: {
      const detailLoaded = { ...state };
      detailLoaded[action.boutique.id] = action.boutique;
      return detailLoaded;
    }
    case READ_OWNED_BOUTIQUE: {
        const boutiquesLoaded = {};
        action.boutiques.forEach((boutique) => {
            boutiquesLoaded[boutique.id] = boutique;
        });
        return boutiquesLoaded;
    }
    case CREATE: {
      return { ...state, [action.boutique.id]: action.boutique };
    }
    case UPDATE: {
      const newState = {...state};
      newState[action.boutique.id] = action.boutique;
    }

    case DELETE: {
      const newState = {...state};
      delete newState[action.boutiqueId]
      return newState;
    }
    default:
      return state;
  }
};

export default boutiqueReducer;
