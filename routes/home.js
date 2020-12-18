var express = require('express')
var router = express.Router()

router.get("/", require("../controllers/homeCont").index)

module.exports = router