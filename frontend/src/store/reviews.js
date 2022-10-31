import { csrfFetch } from "./csrf";

// Action Types:
const CREATE = "reviews/CREATE";
const READ = 'reviews/READ';
const DELETE = "reviews/DELETE";
const UPDATE = "reviews/UPDATE";


// ACs: 

// AC for creating a review (CREATE)
export const createReviewAction = (review) => {
    return {
        type: CREATE,
        review
    }
}

// AC for reading a review (READ)
export const readReviewAction = (reviews) => {
    return {
        type: READ,
        reviews
    }
}

// AC for deleting a review (DELETE)
export const deleteReviewAction = (review) => {
    return {
        type: DELETE,
        review
    }
}

// AC for updating a review (UPDATE)
export const updateReviewAction = (review) => {
    return {
        type: UPDATE,
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

// THUNK for reading a review (READ)
export const readReviewThunk = (boutiqueId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${boutiqueId}`)
    if (response.ok) {
        const reviews = await response.json();
        dispatch(readReviewAction(reviews));
        return reviews;
    }
};

// THUNK for deleting a review (DELETE)
export const deleteReviewThunk = (id) => async dispatch => {
    const response = await csrfFetch('/api/reviews/delete', {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if (response.ok) {
        const deletedReview = await response.json();
        dispatch(deleteReviewAction(deletedReview))
        return deletedReview;
    }
}

// THUNK for updating a review (UPDATE)
export const updateReviewThunk = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    if (response.ok) {
      const review = await response.json();
      dispatch(updateReviewAction(review));
      return review;
    }
  }

const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case READ: {
            const reviewsLoaded = {};
            action.reviews.forEach((review) => {
                reviewsLoaded[review.id] = review;
            });
            return reviewsLoaded;
        }
        case CREATE: {
            return {...state, [action.review.id]: action.review}
        }
        case DELETE: {
            const newState = {...state};
            delete newState[action.review.id];
            return newState;
        }
        case UPDATE: {
            const newState = {...state};
            newState[action.reviewe.id] = action.review;
        }
        default:
            return state;
    }
};

export default reviewReducer;
