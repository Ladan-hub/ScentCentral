const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

// Don't forget to write validations

// GET all boutiques (READ)
router.get(
  "/",
  asyncHandler(async function (req, res) {
    const boutiques = await db.Boutique.findAll();
    return res.json(boutiques);
  })
);

// GET boutique detail
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const boutique = await db.Boutique.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.json(boutique);
  })
);

// GET user's boutiques
// router.get('/owned', asyncHandler(async(req,res) => {
//     const { user } = req;
//     console.log(user)

//     const boutiques = await db.Boutique.findAll({
//         where: {
//             userId: user.id
//         }
//     })
//     return res.json(boutiques)
// }))

// router.get('/owned', asyncHandler(async function(req,res) {
//     const boutiques = await db.Boutique.findAll();
//     return res.json(boutiques)
// }));

// POST uploading a boutique (CREATE)
router.post("/", requireAuth, asyncHandler(async (req,res) => {
    const boutiqueToCreate = req.body
    const newlyCreatedBoutique = await db.Boutique.create(boutiqueToCreate)
    return res.json(newlyCreatedBoutique)
}));

module.exports = router;
