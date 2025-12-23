const {AllHoldings} = require("../controller/Holding.js");
const router = require("express").Router();

router.get("/", AllHoldings);
module.exports = router;