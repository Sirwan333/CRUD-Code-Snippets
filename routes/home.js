var express = require('express')
var router = express.Router()

router.get("/", require("../controllers/homeCont").index)
router.get("/create", require("../controllers/createCont").index)
router.post("/create", require("../controllers/createCont").indexPost)
router.get("/list", require("../controllers/createCont").list)
router.get("/register", require("../controllers/registerController").register)
router.post("/register", require("../controllers/registerController").registerPost)
router.get("/login", require("../controllers/loginController").login)
router.post("/login", require("../controllers/loginController").loginPost)
router.get("/:user", require("../controllers/loginController").myPage)


module.exports = router