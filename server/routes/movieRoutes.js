


const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().sort({
      createdAt: -1,
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch movies",
    });
  }
});

// Add a movie
router.post("/", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
