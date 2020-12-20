var express = require('express')
var path = require('path')
var logger = require('morgan')
var hbs = require('express-hbs')
var mongoose = require('./config/mongoose')
var session = require('express-session')
var app = express()

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'keyboard cat'
}))

mongoose.connect().catch(err => {
  console.error('Error')
  process.exit(1)
})
app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default')
}))

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/home'))

app.set('views', path.join(__dirname, 'views'))
app.use((req, res, next) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'public', '404.html'))
})

app.use((err, req, res, next) => {
  res.status(500)
  res.sendFile(path.join(__dirname, 'public', '500.html'))
})
app.listen(3000, () => { console.log('Server is running at http://localhost:3000') })
