const snippetModel = require("../models/snippet")
const mongoose = require("mongoose")




const index = (req, res) => {
    res.render("home/create")
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
    indexPost
}