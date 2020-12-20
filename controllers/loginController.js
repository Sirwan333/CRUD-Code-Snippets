const userModel = require("../models/user")
const snippetModel = require("../models/snippet")

const login = (req, res) => {
    res.render("home/login")
}

const loginPost = async (req, res) => {
    
      const userFound = await userModel.findOne({username: req.body.username})
      if (userFound){
          console.log("USer Found")
          
          req.session.user = req.body.username
          var user = req.session.user
          console.log(JSON.stringify(req.session, null, 3))
            
          res.redirect(`/${user}`)
          console.log(JSON.stringify(req.session, null, 3))
      }  
   
  }

  const myPage = async (req, res) => {
    const user = req.params.user
    const viewData = {
      snippets: (await snippetModel.find({username: user}))
        .map(snippet => ({
          title: snippet.title,
          content: snippet.content
        }))
    }
    res.render("home/myPage", {viewData})
}

 module.exports = { 
    login,
    loginPost,
    myPage
}