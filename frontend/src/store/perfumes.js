import { csrfFetch } from "./csrf";

//  -- Action Types --
const CREATE = "perfumes/CREATE";
const READ = 'perfumes/READ';
const UPDATE = 'perfumes/UPDATE';
const DELETE = 'perfumes/DELETE';

// -- AC --


// AC for creating a perfume (CREAT)
export const createPerfumeAction = (perfume) => {
    return {
        type: CREATE,
        perfume
    }
}

// AC for reading a perfume (READ)
export const readPerfumeAction = (perfumes) => {
    return {
        type: READ,
        perfumes
    }
}

// AC for updating a perfume (UPDATE)
export const updatePerfumeAction = (perfume) => {
    return {
        type: UPDATE,
        perfume
    }
}

// AC for deleting a perfume (DELETE)
export const deletePerfumeAction = (perfume) => {
    return {
        type: DELETE,
        perfume
    }
}


// -- THUNK -- 

// THUNK for creating a perfume (CREATE)
export const createPerfumeThunk = (perfume) => async dispatch => {
    const response = await csrfFetch (`/api/perfumes/${perfume.boutiqueId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(perfume)
    })
    if (response.ok) {
        const perfume = await response.json();
        dispatch(createPerfumeAction(perfume));
        return perfume;
    }
}


// THUNK for reading a perfume (READ)
export const readPerfumeThunk = (boutiqueId) => async dispatch => {
    const response = await csrfFetch (`/api/perfumes/${boutiqueId}`)
    if (response.ok) {
        const perfumes = await response.json();
        dispatch(readPerfumeAction(perfumes));
        return perfumes;
    }
};

// THUNK for updating a perfume (UPDATE)
export const updatePerfumeThunk = (editedPerfume, perfumeId) => async(dispatch) => {
    const response = await csrfFetch(`/api/perfumes/${perfumeId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editedPerfume)
    })
    if (response.ok) {
        const perfume = await response.json();
        dispatch(updatePerfumeAction(perfume));
        return perfume;
    }
}

// THUNK for deleting a perfume (DELETE)
export const deletePerfumeThunk = (id) => async dispatch => {
    const response = await csrfFetch('/api/perfumes/delete', {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if (response.ok) {
        const deletedPerfume = await response.json();
        dispatch(deletePerfumeAction(deletedPerfume))
        return deletedPerfume;
    }
}


// -- REDUCER -- 

const perfumeReducer = (state = {}, action) => {
    switch(action.type) {
        case READ: {
            const perfumesLoaded = {};
            action.perfumes.forEach((perfume) => {
                perfumesLoaded[perfume.id] = perfume
            });
            return perfumesLoaded;
        }

        case CREATE: {
            return {...state, [action.perfume.id]: action.perfume}
        }
        case UPDATE: {
            const newState = {...state};
            newState[action.perfume.id] = action.perfume;
            return newState;

        }
        case DELETE: {
            const newState = {...state};
            delete newState[action.perfume.id];
            return newState;
        }
        default: 
    return state
    }
    
}

export default perfumeReducer; 
