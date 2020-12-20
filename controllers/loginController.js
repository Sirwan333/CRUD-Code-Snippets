const userModel = require("../models/user")




const login = (req, res) => {
    res.render("home/login")
}

const loginPost = async (req, res) => {
    
      const userFound = await userModel.findOne({username: req.body.username})
      if (userFound){
          console.log("USer Found")
      }  
   
  }

 module.exports = { 
    login,
    loginPost,
}