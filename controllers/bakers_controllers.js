const express = require('express')
const baker = express.Router()
const baker = require('../models/baker.js')
const bakerSeedData = require('./models/baker_seed.js')

baker.get('/data/seed', (req, res) => {
    baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

module.exports = baker