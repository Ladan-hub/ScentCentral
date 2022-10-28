import { csrfFetch } from "./csrf";

// Action Types:
const CREATE = "review/CREATE";


// ACs: 

// AC for creating a review (CREATE)
export const createReviewAction = (review) => {
    return {
        type: CREATE,
        review
    }
}

// THUNKs:

// THUNK for creating a review (CREATE)
export const createReviewThunk = (review) => async dispatch => {
    const response = await csrfFetch (`/api/reviews/${review.boutiqueId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const review = await response.json();
        dispatch(createReviewAction(review));
        return review;
    }
}

const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE: {
            return {...state, [action.review.id]: action.review}
        }
        default:
            return state;
    }
};

export default reviewReducer;
