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


// POST creating a comment (CREATE)
router.post('/:id', requireAuth, asyncHandler(async (req,res) => {
    
    const reviewToCreate = req.body;
    const newlyCreatedReview = await db.Review.create(reviewToCreate)
    return res.json(newlyCreatedReview)
}));






module.exports = router;
