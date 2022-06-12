const router = require('express').Router()

const interest = require('../controllers/interestController')

// create new interest
router.post('/', interest.create)

// read all interests
router.get('/', interest.findAll)

// read by userid
router.post('/fuck', interest.findById)

module.exports = router

