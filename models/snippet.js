const mongoose = require('mongoose')
const Schema = mongoose.Schema
const snippet = new Schema({
  title: {
    type: String,
    required: true,
    max: 50,
    min: 1
  },
  content: {
    type: String,
    required: true,
    max: 100,
    min: 1
  },
  username: {
    type: String,
    required: true,
    max: 100,
    min: 1
  }
})
const Snippet = mongoose.model('Snippet', snippet)
module.exports = Snippet
