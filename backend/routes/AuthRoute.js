const { Singup, Login } = require("../controller/AutoController");
const {UserVerification} = require("../middleware/AuthMiddleware.js");
const router = require("express").Router();


router.post("/singup", Singup);
router.post("/login", Login);
router.post("/", UserVerification)


module.exports = router;
