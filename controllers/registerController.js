const userModel = require('../models/user')

const register = (req, res) => {
  res.render('home/register')
  console.log(JSON.stringify(req.session, null, 1))
}

/**
 * @param req
 * @param res
 */
const registerPost = async (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password
  })

  user.save()
  req.session.flash = 'You have registered successfully'
  const flash = req.session.flash
  req.session.flash = null
  res.render('home/login', { flash })
}
module.exports = {
  register,
  registerPost
}
