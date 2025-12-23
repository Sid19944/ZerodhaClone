const { UserModel } = require("../model/UserModel.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.UserVerification = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  console.log(req.cookies);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        console.log("userVerifyed");
      } else {
        console.log("User not verrifyed");
      }
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
