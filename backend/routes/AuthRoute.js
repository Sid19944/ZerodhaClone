const { Singup, Login } = require("../controller/AutoController");
const {UserVerification} = require("../middleware/AuthMiddleware.js");
const router = require("express").Router();

router.post("/", UserVerification)
router.post("/singup", Singup);
router.post("/login", Login);


module.exports = router;
