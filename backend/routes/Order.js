const { AllOrders } = require("../controller/Order.js");
const router = require("express").Router();

router.get("/", AllOrders);

module.exports = router;    