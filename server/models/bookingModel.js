
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true },
  userEmail: { type: String, required: true },
  movieName: { type: String, required: true },
  theatreName: { type: String, required: true },
  showTime: { type: String, required: true },
  seatsBooked: { type: [String], required: true },
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
