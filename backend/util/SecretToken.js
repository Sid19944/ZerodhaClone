require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.CreateAccessToken = (userId) => {
  return jwt.sign({ id : userId }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
