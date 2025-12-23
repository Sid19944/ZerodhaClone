const { Singup, Login } = require("../controller/AutoController");
const {UserVerification} = require("../middleware/AuthMiddleware.js");
const router = require("express").Router();


router.post("/singup", Singup);
router.post("/login", Login);
router.get("/verify", UserVerification)


module.exports = router;
