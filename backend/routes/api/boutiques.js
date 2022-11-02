const express = require("express");
const router = express.Router();
const db = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");

// Backend Validations

const boutiqueValidations = [
  check('name')
  .exists({checkFalsy: true})
  .withMessage("Please provide a name")
  .isLength({max: 250})
  .withMessage("Name must be less than 251 characters")
  .isLength({min:2})
  .withMessage("Name must be at least 2 characters"),
  check('country')
  .exists({checkFalsy: true})
  .withMessage("Please provide a country")
  .isLength({max: 56})
  .withMessage("Country must be less than 57 characters")
  .isLength({min:4})
  .withMessage("Country must be at least 2 characters"),
  check('city')
  .exists({checkFalsy: true})
  .withMessage("Please provide a city")
  .isLength({max: 85})
  .withMessage("City must be less than 86 characters")
  .isLength({min:1})
  .withMessage("City must be at least 1 character"),
  check('address')
  .exists({checkFalsy: true})
  .withMessage("Please provide an address")
  .isLength({max: 85})
  .withMessage("Address must be less than 86 characters")
  .isLength({min:9})
  .withMessage("Address must be at least 9 character"),
  check('priceRange')
  .exists({checkFalsy: true})
  .withMessage("Please provide a price range")
  .isLength({max: 4})
  .withMessage("Address must be less than 5 characters")
  .isLength({min:1})
  .withMessage("Address must be at least 1 character"),
  check('imageUrl')
  .exists({checkFalsy: true})
  .withMessage('Please provide a boutique image URL')
  .isLength({max: 500})
  .withMessage('Perfume image URL must be less than 501 characters'),
  handleValidationErrors
]


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
  boutiqueValidations,
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
  boutiqueValidations,
  asyncHandler(async (req, res) => {
    const boutiqueToCreate = req.body;
    const newlyCreatedBoutique = await db.Boutique.create(boutiqueToCreate);
    return res.json(newlyCreatedBoutique);
  })
);

module.exports = router;
