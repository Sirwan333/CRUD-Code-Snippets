const session = require("express-session")
const snippetModel = require("../models/snippet")
const User = require("../models/user")




const index = (req, res) => {
  console.log(JSON.stringify(req.session, null, 3))
    if(req.session.user != null){
      res.render("home/create")
    }
}
const list = async (req, res, next) => {
    var user = req.session.user
    try {
      const viewData = {
        snippets: (await snippetModel.find({}))
          .map(snippet => ({
            title: snippet.title,
            content: snippet.content
          }))
      }
      res.render('home/list', { viewData, user })
    } catch (error) {
      next(error)
    }
  }
 
const indexPost = (req, res) => {
    const snippet = new snippetModel({
        title: req.body.title,
        content: req.body.snippet,
        username: req.session.user
    })
    snippet.save()
    res.render("home/create")
}
 module.exports = { 
    index,
    indexPost,
    list
}