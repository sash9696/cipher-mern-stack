require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("../config/dbConnect");
const mongoose = require("mongoose");

connectDB();
//user routes => /api/users and /api/user
app.use(express.json()); //middleware to parse json
app.use("/api", require("../routes/userRoutes"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
    console.log('Error while connection to MongoDB: ',err)
});