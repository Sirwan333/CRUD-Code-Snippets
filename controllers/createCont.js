const snippetModel = require("../models/snippet")




const index = (req, res) => {
    res.render("home/create")
}
const list = async (req, res, next) => {
    try {
      const viewData = {
        snippets: (await snippetModel.find({}))
          .map(snippet => ({
            title: snippet.title,
            content: snippet.content
          }))
      }
      res.render('home/list', { viewData })
    } catch (error) {
      next(error)
    }
  }
 
const indexPost = (req, res) => {
    const snippet = new snippetModel({
        title: req.body.title,
        content: req.body.snippet
    })
    snippet.save()
    res.render("home/create")
}
 module.exports = { 
    index,
    indexPost,
    list
}