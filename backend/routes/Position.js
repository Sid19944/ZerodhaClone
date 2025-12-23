const {AllPositions}=  require("../controller/Position.js");
const router = require("express").Router();

router.get("/", AllPositions);
module.exports = router;