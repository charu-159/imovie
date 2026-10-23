
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// // Load environment variables
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const mongoUri = process.env.MONGO_URL;

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoUri);
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error.message);
//     process.exit(1);
//   }

//   mongoose.connection.on("error", (err) => {
//     console.error("MongoDB connection error:", err);
//   });

//   mongoose.connection.on("disconnected", () => {
//     console.log("⚠️ MongoDB disconnected. Attempting to reconnect...");
//     setTimeout(connectToMongo, 5000);
//   });
// };

// connectToMongo();

// // Import models
// const User = require("./models/User");
// const Admin = require("./models/Admin");
// const Movie = require("./models/Movie");
// const Theatre = require("./models/Theatre");
// const Show = require("./models/Show");
// const Booking = require("./models/Booking");

// // Example routes
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

// // Register User
// app.post("/api/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     res.json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Add Movie
// app.post("/api/movies", async (req, res) => {
//   try {
//     const movie = new Movie(req.body);
//     await movie.save();
//     res.json({ message: "Movie added successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Create Booking
// app.post("/api/bookings", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.json({ message: "Booking created successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Start server
// app.listen(process.env.PORT || 5000, () => {
//   console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
// });





const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  })
);

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to iMovies API",
    status: "Backend is running",
  });
});

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "API route not found",
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;

// Connect MongoDB and start server
async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(
        `iMovies server running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
