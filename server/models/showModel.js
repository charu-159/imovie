const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  adminEmail: { type: String, required: true },
  showId: { type: String, required: true },
  movieId: { type: String, required: true },
  theatreName: { type: String, required: true },
  showDate: { type: String, required: true },
  showTime: { type: String, required: true },
  tickets: { type: Object },
});

module.exports = mongoose.model("Show", showSchema);
