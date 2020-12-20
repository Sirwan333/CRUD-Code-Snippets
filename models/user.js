const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = new Schema({
  username: {
    type: String,
    required: true,
    max: 50,
    min: 1,
    unique: true
  },
  password: {
    type: String,
    required: true,
    max: 100,
    min: 1
  },
})


const User = mongoose.model('User', user)
module.exports = User