const userModel = require('../models/user')
const snippetModel = require('../models/snippet')

const login = (req, res) => {
  const flash = req.session.flash
  req.session.flash = null
  res.render('home/login', { flash })
}

/**
 * @param req
 * @param res
 */
const loginPost = async (req, res) => {
  const userFound = await userModel.findOne({ username: req.body.username })
  if (userFound) {
    req.session.flash = 'You have authenticated successfully'
    req.session.user = req.body.username
    var user = req.session.user
    res.redirect(`/${user}`)
  }
}

/**
 * @param req
 * @param res
 */
const myPage = async (req, res) => {
  const user = req.params.user
  const flash = req.session.flash
  req.session.flash = null
  const viewData = {
    snippets: (await snippetModel.find({ username: user }))
      .map(snippet => ({
        id: snippet._id,
        title: snippet.title,
        content: snippet.content
      }))
  }
  res.render('home/myPage', { viewData, flash })
}

/**
 * @param req
 * @param res
 */
const logout = (req, res) => {
  res.render('home/logout')
}

/**
 * @param req
 * @param res
 */
const logoutPost = (req, res) => {
  req.session.flash = 'You have logged out successfully'
  req.session.user = null
  res.redirect('login')
  console.log(JSON.stringify(req.session, null, 3))
}

/**
 * @param request
 * @param response
 */
const deleteSnippet = async (request, response) => {
  var user = request.session.user
  await snippetModel.findByIdAndRemove(request.params.id).exec()
  response.redirect(`/${user}`)
}

module.exports = {
  login,
  loginPost,
  myPage,
  logout,
  logoutPost,
  deleteSnippet
}
