var express = require('express')
var router = express.Router()

router.get("/", require("../controllers/homeCont").index)
router.get("/create", require("../controllers/createCont").index)
router.post("/create", require("../controllers/createCont").indexPost)
router.get("/list", require("../controllers/createCont").list)


module.exports = router