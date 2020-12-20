const userModel = require("../models/user")




const register = (req, res) => {
    res.render("home/register")
    console.log(JSON.stringify(req.session, null, 1))
}
 
const registerPost = (req, res) => {
    const user = new userModel({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
    res.render("home/create")
}
 module.exports = { 
    register,
    registerPost,
}