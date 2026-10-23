// server/index.js
import express from "express";
import moviesRoute from "./routes/movies.js";

const app = express();
app.use(express.json());

// Movies API
app.use("/api/movies", moviesRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
