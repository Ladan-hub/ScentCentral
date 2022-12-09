import { csrfFetch } from "./csrf";

// Action Types
const READ = 'perfumes/READ';

// -- AC --

// AC for reading a perfume (READ)
export const readPerfumeAction = (perfumes) => {
    return {
        type: READ,
        perfumes
    }
}

// -- THUNK -- 

// THUNK for reading a review (READ)
export const readPerfumeThunk = (boutiqueId) => async dispatch => {
    const response = await csrfFetch (`/api/perfumes/${boutiqueId}`)
    if (response.ok) {
        const perfumes = await response.json();
        dispatch(readPerfumeAction(perfumes));
        return perfumes;
    }
};







const perfumeReducer = (state = {}, action) => {
    switch(action.type) {
        case READ: {
            const perfumesLoaded = {};
            action.perfumes.forEach((perfume) => {
                perfumesLoaded[perfume.id] = perfume
            });
            return perfumesLoaded;
        }
        default: 
    return state
    }
    
}

export default perfumeReducer; 
