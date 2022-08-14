const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')

const majorArcana = require('./major-arcana')
const minorArcana = require('./minor-arcana')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/major-arcana', majorArcana)
server.use('/minor-arcana', minorArcana)

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    const cardData = JSON.parse(data)
    res.render('home', cardData)
  })
})

module.exports = server
