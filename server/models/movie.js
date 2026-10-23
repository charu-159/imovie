




const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  poster: {
    type: String,
    default: "",
  },
  genre: {
    type: String,
    default: "Drama",
  },
  releaseYear: Number,
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Movie", movieSchema);


module.exports = mongoose.model("Movie", movieSchema);
