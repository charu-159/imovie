const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: "Booking created successfully" });
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("movieId userId");
  res.json(bookings);
};
