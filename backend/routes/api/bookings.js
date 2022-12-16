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


// DONT FORGET BACKEND VALIDATIONS!!!


// POST => creating a booking (CREATE)
router.post(
    "/:id",
    requireAuth,
    asyncHandler(async (req,res) => {
        const booking = await db.Booking.create(req.body);
        return res.json(booking)
    })
);


// GET user's bookings (READ)
router.get('/', restoreUser, asyncHandler(async (req,res) => {
    console.log("THIS IS THE REQ OBJECT --- BACKEND", req)
    console.log("THIS IS THE USER --- BACKEND", req.user)
    const {user} = req;
    const bookings = await db.Booking.findAll({
        where:{
            userId: user.id
        }
    });

    return res.json(bookings)
})
); 

// UPDATE => updating a booking (UPDATE)
router.put('/:id', requireAuth, asyncHandler(async (req,res) => {
    const oldBooking = await db.Booking.findOne({
        where: {
            id: req.body.id
        }
    });
    const newBooking = await oldBooking.update(req.body)
    return res.json(newBooking);
}));

// DELETE => deleting a booking (DELETE)
router.delete('/delete', requireAuth, asyncHandler(async (req,res) => {
    const bookingToBeDeleted = await db.Booking.findOne({
        where:{
            id: req.body.id
        },
    });
    await bookingToBeDeleted.destroy();
    return res.json(bookingToBeDeleted)
}));









module.exports = router;
