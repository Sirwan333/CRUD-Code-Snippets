const userModel = require("../models/user")

const login = (req, res) => {
    res.render("home/login")
}

const loginPost = async (req, res) => {
    
      const userFound = await userModel.findOne({username: req.body.username})
      if (userFound){
          console.log("USer Found")
          req.session.user = req.body.username
          console.log(JSON.stringify(req.session, null, 3))
          res.render("home/login")
          console.log(JSON.stringify(req.session, null, 3))
      }  
   
  }

 module.exports = { 
    login,
    loginPost,
}