const express = require('express');
const router = express.Router();
const db = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");


// Don't forger Backend Validations 

// GET all perfumes (READ)
router.get('/:id', asyncHandler(async (req,res) => {
    const perfumes = await db.Perfume.findAll({
        where: {boutiqueId: req.params.id}
    })
    return res.json(perfumes)
}));








module.exports = router;
