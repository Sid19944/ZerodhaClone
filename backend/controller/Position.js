const  {PositionModel} = require("../model/PositionModel.js");
module.exports.AllPositions = async (req, res) => {
  let allholdings = await PositionModel.find({});
  res.json(allholdings);
}