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

// DON'T FORGET BACKEND VALIDATIONS!!!

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
