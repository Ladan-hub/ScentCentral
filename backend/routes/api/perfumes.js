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
const perfumeValidations = [
  check('name')
  .exists({checkFalsy: true})
  .withMessage("Please provide a name")
  .isLength({min: 2 })
  .withMessage("Name must be at least 2 characters")
  .isLength({max: 250})
  .withMessage("Name must be less than 250 characters"),
  check('numberAvailable')
  .exists({checkFalsy: true})
  .withMessage("Please provide the inventory number")
  .isIn({checkFalsy: true})
  .withMessage("Please provide a valid number"),
  check('perfumeImgUrl')
  .exists({checkFalsy: true})
  .withMessage("Please provide a perfume image URL")
  .isLength({min:10})
  .isLength({max: 500})
  .withMessage('Image URL must be less than 500 characters'),
  handleValidationErrors
]


// POST => creating a perfume (CREATE)
router.post(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const perfume = await db.Perfume.create(req.body);
    return res.json(perfume);
  })
);

// GET  => all perfumes (READ)
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const perfumes = await db.Perfume.findAll({
      where: { boutiqueId: req.params.id },
    });
    return res.json(perfumes);
  })
);

// PUT => updating a perfume (UPDATE)
router.put("/:id", requireAuth, asyncHandler(async (req, res) => {
  const oldPerfume = await db.Perfume.findOne({
    where: {
      id: req.body.id
    }
  });
  const newPerfume = await oldPerfume.update(req.body);
  return res.json(newPerfume);
}))

// DELETE => deleting a perfume (DELETE)
router.delete(
  '/delete',
  requireAuth,
  asyncHandler(async (req, res) => {
    const perfumeToBeDeleted = await db.Perfume.findOne({
      where: {
        id: req.body.id,
      },
    });
    await perfumeToBeDeleted.destroy();
    return res.json(perfumeToBeDeleted);
  }));

module.exports = router;
