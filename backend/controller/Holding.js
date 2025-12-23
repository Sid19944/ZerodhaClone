const {HoldingModel} = require("../model/HoldingModel.js");

module.exports.AllHoldings = async (req, res) => {
  let allholdings = await HoldingModel.find({});
  res.json(allholdings);
}