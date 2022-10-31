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


    const editedReviewSubmitted = (e) => {
        e.preventDefault();
        const editedReview = {
            content,
            userId: loggedInUser.id,
            boutiqueId: boutiqueId
        }
        console.log("THIS IS THE EDITED REVIEW", editedReview)
        const newReview = dispatch(updateReviewThunk(editedReview));
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
