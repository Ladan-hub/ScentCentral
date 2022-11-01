import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateReviewThunk } from "../../store/reviews";
import "./EditReviewForm.css";


const EditReview = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {reviewId} = useParams();
    const {boutiqueId} = useParams();
    console.log("THIS IS THE REVIEW ID",reviewId)
    console.log("this is the boutique id", boutiqueId)


    const review = useSelector((state) => state.reviews[reviewId]);
    const loggedInUser = useSelector((state) => state.session.user);

    // useStates 
    const [content, setContent] = useState(review.content);
    const [validationErrors, setValidationErrors] = useState([]);

    // Form Validations 
    useEffect(() => {
        const errors = [];
        if (content.length < 3) {
            errors.push("Review must be at least 3 chatracters")
        }
        setValidationErrors(errors)
    }, [content])


    // Dispatching UPDATE REVIEW 
    const editedReviewSubmitted = async (e) => {
        e.preventDefault();
        const editedReview = {
            id: reviewId,
            content,
            userId: loggedInUser.id,
            boutiqueId: boutiqueId,
        }
        const newReview = await dispatch(updateReviewThunk(editedReview, reviewId));
        console.log("NEW REVIEW", newReview)
        if (newReview) {
            history.push(`/boutiques/${boutiqueId}`)
        }
    }


    return loggedInUser && (
        <main className="form-root">
        <div className="review-form-container">
            <ul className="error-messages-ul">
                {validationErrors.map((validationError) => (
                    <li className="error-messages-li" key={validationError}>{validationError}</li>
                ))}
            </ul>
            <form className="review-form" onSubmit={editedReviewSubmitted}>
                <main className="fields-container">
                    <div className="add-review-textarea">
                <textarea className="review-field" name="content" onChange={(e) => setContent(e.target.value)} value={content}>
                </textarea>
                </div>
                <div className="add-review-button-container">
                <button disabled={validationErrors.length > 0} className="add-review-button" type="submit">Submit</button>
                </div>
                </main>
            </form>
        </div>
        </main>
    )

}
export default EditReview; 
