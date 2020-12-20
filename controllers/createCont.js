const snippetModel = require('../models/snippet')

const index = (req, res) => {
  console.log(JSON.stringify(req.session, null, 3))
  if (req.session.user != null) {
    res.render('home/create')
  } else {

  }
}

/**
 * @param req
 * @param res
 * @param next
 */
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

/**
 * @param req
 * @param res
 */
const indexPost = (req, res) => {
  var user = req.session.user
  const snippet = new snippetModel({
    title: req.body.title,
    content: req.body.snippet,
    username: req.session.user
  })
  snippet.save()
  res.redirect(`/${user}`)
}

module.exports = {
  index,
  indexPost,
  list
}
