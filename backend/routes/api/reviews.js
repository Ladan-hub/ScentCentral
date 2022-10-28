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


// POST creating a review (CREATE)
router.post('/:id', requireAuth, asyncHandler(async (req,res) => {
    
    const reviewToCreate = req.body;
    const newlyCreatedReview = await db.Review.create(reviewToCreate)
    return res.json(newlyCreatedReview)
}));

// GET all reviews (READ)
router.get('/:id', requireAuth, asyncHandler(async (req,res) => {
  const reviews = await db.Comment.findAll({
      where:{
          boutiqueId: req.params.id
      }
  })
  return res.json(reviews)
}));







module.exports = router;
