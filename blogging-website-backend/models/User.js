const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//each of the field ensures the mongoDB documents adhere to this
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is valid"],
    index: true, //optimizing query performance
  },
});

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign(
    {
      user: {
        id: this._id,
        email: this.email,
        password: this.password,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  return accessToken;
};

userSchema.methods.toUserResponse = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateAccessToken(),
  };
};

module.exports = mongoose.model("User", userSchema);
