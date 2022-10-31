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

// Don't forget to write validations


// GET all boutiques (READ)
router.get(
  "/",
  asyncHandler(async function (req, res) {
    const boutiques = await db.Boutique.findAll();
    return res.json(boutiques);
  })
);


// GET user's boutiques (READ)
router.get(
  "/owned",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const boutiques = await db.Boutique.findAll({
      where: {
        userId: user.id,
      },
    });

    return res.json(boutiques);
  })
);

// DELETE deleteing a boutique (DELETE)
router.delete(
  "/delete",
  requireAuth,
  asyncHandler(async (req, res) => {
    const boutiqueToBeDeleted = await db.Boutique.findOne({
      where: {
        id: req.body.id,
      },
    });
    await boutiqueToBeDeleted.destroy();
    return res.json(boutiqueToBeDeleted);
  })
);

// PUT updating a boutique (UPDATE)
router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const oldBoutique = await db.Boutique.findOne({
      where: {
        id: req.body.id,
      },
    });
    console.log("THIS IS THE OLD BOUTIQUE", oldBoutique)
    const newBoutique = oldBoutique.update(req.body);
    return res.json(newBoutique);
  })
);


// GET boutique detail (READ)
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


// POST uploading a boutique (CREATE)
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const boutiqueToCreate = req.body;
    const newlyCreatedBoutique = await db.Boutique.create(boutiqueToCreate);
    return res.json(newlyCreatedBoutique);
  })
);

module.exports = router;
