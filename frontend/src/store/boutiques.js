import { csrfFetch } from "./csrf";

// Action Types:

const READ_BOUTIQUES = "boutiques/READ";
const READ_BOUTIQUE_DETAIL = "boutiques/DETAIL";
// const READ_OWNED_BOUTIQUE = "boutiques/OWNED"
const CREATE = "boutique/CREATE";





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
        boutique
    }
}

// export const readBoutiquesOwned = (boutiques) => {
//     return {
//       type: READ_OWNED_BOUTIQUE,
//       boutiques,
//     };
//   };

// AC for CREATE 
export const createBoutiqueAction = (boutique) => {
  return {
      type: CREATE,
      boutique
  }
}


// Thunk Action Creators:

// Thunk AC for fetching all boutiques from the database
export const readBoutiquesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/boutiques/");
  if (response.ok) {
    const boutiques = await response.json();
    dispatch(readBoutiques(boutiques));
    return boutiques;
  }
};

// Thunk AC for fetching one boutique from the database 
export const readBoutiqueDetailThunk = (boutiqueId) => async (dispatch) => {
    const response = await csrfFetch(`/api/boutiques/${boutiqueId}`)
    console.log(response)
    if (response.ok) {
        const boutique = await response.json();
        console.log(boutique)
        dispatch(readBoutiqueDetail(boutique));
        return boutique;
    }
};

// Thunk AC for fetching all owned boutiques from the database
// export const readBoutiquesOwnedThunk = () => async (dispatch) => {
//     const response = await csrfFetch("/api/boutiques/owned");
//     if (response.ok) {
//       const boutiques = await response.json();
//       dispatch(readBoutiquesOwned(boutiques));
//       return boutiques;
//     }
//   };


// Thunk AC CREATE
export const addBoutiqueThunk = (boutiqueToCreate) => async dispatch => {
  const response = await csrfFetch ('/api/boutiques', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(boutiqueToCreate)
  })
  if (response.ok) {
    const newlyCreatedBoutique = await response.json();
    dispatch(createBoutiqueAction(newlyCreatedBoutique));
    return newlyCreatedBoutique;
  };
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
    case READ_BOUTIQUE_DETAIL: {
        const detailLoaded = {...state};
        detailLoaded[action.boutique.id] = action.boutique;
        return detailLoaded;
    }
    // case READ_OWNED_BOUTIQUE: {
    //     const boutiquesLoaded = {};
    //     action.boutiques.forEach((boutique) => {
    //         boutiquesLoaded[boutique.id] = boutique;
    //     });
    //     return boutiquesLoaded;
    // }

    case CREATE: {
      return { ...state, [action.boutique.id]: action.boutique}
    }
    default:
      return state;
  }
};

export default boutiqueReducer;
