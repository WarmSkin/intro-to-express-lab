// import modules

import express from 'express'
import { fish } from './data/fish-caught-data.js'
// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)
app.get('/', function(req, res) {
    res.redirect('/fish-caught')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/fish-caught', function(req, res) {
    res.render('fish-caught/index', {
        fish_caught: fish
    })
})

// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})