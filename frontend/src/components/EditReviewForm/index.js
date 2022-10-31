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
    // console.log("THIS IS THE REVIEW ID",reviewId)
    // console.log("this is the boutique id", boutiqueId)


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
    const editedReviewSubmitted = (e) => {
        e.preventDefault();
        const editedReview = {
            id: reviewId,
            content,
            userId: loggedInUser.id,
            boutiqueId: boutiqueId,
        }
        const newReview = dispatch(updateReviewThunk(editedReview, reviewId));
        if (newReview) {
            history.push(`/boutiques/${boutiqueId}`)
        }


    }


    return loggedInUser && (
        <div className="review-div">
            <ul className="error-messages">
                {validationErrors.map((validationError) => (
                    <li key={validationError}>{validationError}</li>
                ))}
            </ul>
            <form className="review-form" onSubmit={editedReviewSubmitted}>
                <textarea className="review-field" name="content" onChange={(e) => setContent(e.target.value)} value={content}>
                </textarea>
                <button className="review-submit-button" type="submit">Submit</button>
            </form>
        </div>
    )

}
export default EditReview; 
