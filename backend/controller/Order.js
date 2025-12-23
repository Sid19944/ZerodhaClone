const {OrderModel} = require("../model/OrderModel.js");

module.exports.AllOrders = async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
};