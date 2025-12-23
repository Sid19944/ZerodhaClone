const { UserModel } = require("../model/UserModel.js");
const { CreateAccessToken } = require("../util/SecretToken.js");
const bcrypt = require("bcrypt");

module.exports.Singup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exist" });
    }
    const user = await UserModel.create({ email, username, password });
    const token = CreateAccessToken(user._id);
    res.cookie("token", token, {
      // withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (err) {
    console.error(err);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.json({ message: "Incorrect Username or password" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect Username or password" });
    }
    const token = CreateAccessToken(user._id);
    res.cookie("token", token, {
      // withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res
      .status(201)
      .json({ message: "User Logged in Successfuly", success: true });
    next();
  } catch (err) {
    console.error(err);

  }
};
