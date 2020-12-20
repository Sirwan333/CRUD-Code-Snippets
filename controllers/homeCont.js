const index = (req, res) => {
   var user = req.session.user
   res.render("home/index", {user})
}

module.exports = { index }