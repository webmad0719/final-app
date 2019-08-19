const express = require('express');
const router = express.Router();

const Coaster = require('../models/Coaster')

router.get('/getAllCoasters', (req, res) => {
    Coaster.find()
        .then(allCoasters => res.json(allCoasters))
        .catch(err => console.log('Error', err))
})

router.get('/getOneCoaster/:id', (req, res) => {
    Coaster.findById(req.params.id)
        .then(theCoaster => res.json(theCoaster))
        .catch(err => console.log('Error', err))
})

router.post('/postCoaster', (req, res) => {
    Coaster.create(req.body)
        .then(theNewCoaster => res.json(theNewCoaster))
        .catch(err => console.log('Error', err))
})

module.exports = router