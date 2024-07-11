const User = require("../models/User");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  const user = req.body;

  // check if the data exists
  if (!user || !user.email || !user.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //since email is unique query and find out that user

  const loginUser = await User.findOne({ email: user.email }).exec();

  if (!loginUser) {
    return res.status(404).json({ message: "User Not Found" });
  }

  //if the password matches

  const match = await bcrypt.compare(user.password, loginUser.password);

  if (!match)
    return res.status(401).json({ message: "Unauthorized: Wrong password" });

  return res.status(200).json({ 
    user: loginUser.toUserResponse()
   });
};

const registerUser = async (req, res) => {
  //logic to register the user

  const {user} = req.body;

  // check if the data exists
  if (!user || !user.email || !user.password || !user.username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //hash password => hashing + salt(unique string)
  console.log("user", { user });
  const hashedPass = await bcrypt.hash(user.password, 10); //10 => salt rounds

  const userObject = {
    username: user.username,
    password: hashedPass,
    email: user.email,
  };

  const createdUser = await User.create(userObject);

  //save to the database
  //create model or schema
  if (createdUser) {
    res.status(201).json({
      user: createdUser.toUserResponse(),
    });
  } else {
    res.status(422).json({
      errors: {
        body: "Unable to register a user",
      },
    });
  }
};

module.exports = {
  registerUser,
  userLogin,
};
