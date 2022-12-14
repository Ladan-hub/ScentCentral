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
    const [stars, setStars] = useState(0);
    const [validationErrors, setValidationErrors] = useState([]);

    // Form Validations 
    useEffect(() => {
        const errors = [];
        if (content.length < 3) {
            errors.push("Review must be at least 3 chatracters")
        }
        if (content.length > 255) {
            errors.push("Rview must be less than 256 characters")
          }
        setValidationErrors(errors)
    }, [content])


    // Dispatching UPDATE REVIEW 
    const editedReviewSubmitted = async (e) => {
        e.preventDefault();
        const editedReview = {
            id: reviewId,
            content,
            stars,
            userId: loggedInUser.id,
            boutiqueId: boutiqueId,
        }
        const newReview = await dispatch(updateReviewThunk(editedReview, reviewId));
        console.log("NEW REVIEW", newReview)
        if (newReview) {
            history.push(`/boutiques/${boutiqueId}`)
        }
    }

    const starCount = (num) => {
        setStars(num)
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
                <div className='starDiv'>
                                            {stars < 1 && <i id='noStar1' onClick={() => starCount(1)} className="fa-regular fa-star"></i>}
                                            {stars > 0 && <i id='star1' onClick={() => starCount(1)} className="fa-solid fa-star"></i>}
                                            {stars < 2 && <i id='noStar2' onClick={() => starCount(2)} className="fa-regular fa-star"></i>}
                                            {stars > 1 && <i id='star2' onClick={() => starCount(1)} className="fa-solid fa-star"></i>}
                                            {stars < 3 && <i id='noStar3' onClick={() => starCount(3)} className="fa-regular fa-star"></i>}
                                            {stars > 2 && <i id='star3' onClick={() => starCount(2)} className="fa-solid fa-star"></i>}
                                            {stars < 4 && <i id='noStar4' onClick={() => starCount(4)} className="fa-regular fa-star"></i>}
                                            {stars > 3 && <i id='star4' onClick={() => starCount(3)} className="fa-solid fa-star"></i>}
                                            {stars < 5 && <i id='noStar5' onClick={() => starCount(5)} className="fa-regular fa-star"></i>}
                                            {stars > 4 && <i id='star5' onClick={() => starCount(4)} className="fa-solid fa-star"></i>}

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
