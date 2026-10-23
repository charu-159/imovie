const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const { createBooking } = require("../controllers/bookingController");

// Protect this route
router.post("/create", verifyToken, createBooking);

module.exports = router;
