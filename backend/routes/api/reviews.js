const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

// Backend Validations 
const reviewValidations = [
  check('content')
  .exists({checkFalsy: true})
  .withMessage('Please provide a review')
  .isLength({min:3})
  .withMessage("Review must be at least 3 characters"),
  handleValidationErrors
]

// POST creating a review (CREATE)
router.post('/:id', requireAuth,reviewValidations, asyncHandler(async (req,res) => {
    
  const review = await db.Review.create(req.body)
  return res.json(review)
}));

// GET all reviews (READ)
router.get('/:id', asyncHandler(async (req,res) => {
  // console.log("GET!!!!!!!!!!!")
  const reviews = await db.Review.findAll({
      where:{ boutiqueId: req.params.id }
  })
  return res.json(reviews)
}));


// DELETE deleting a review (DELETE)
router.delete('/delete', requireAuth, asyncHandler(async (req,res) => {
  const reviewToBeDeleted = await db.Review.findOne({
    where:{
        id: req.body.id
    }
})
await reviewToBeDeleted.destroy();
return res.json(reviewToBeDeleted);
}));



// PUT updating a review (UPDATE) /api/reviews/:id
router.put("/:id", requireAuth, reviewValidations, asyncHandler(async (req,res) => {
  // console.log("PUT!!!!!!!!!!!")
  const oldReview = await db.Review.findOne({
      where: {
          id: req.body.id
      }
  })
  const newReview = await oldReview.update(req.body);
  return res.json(newReview)
}))







module.exports = router;
