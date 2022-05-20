const router = require('express').Router()

const tutorials = require('../controllers/testController')

// Create a new Tutorial
router.post('/', tutorials.create)

// Retrieve all Tutorial
router.get('/', tutorials.findAll)

// Retrieve all published Tutorial
router.get('/published', tutorials.findAllPublished)

// Retrieve a single Tutorial with id
router.get('/:id', tutorials.findOne)

// Update a Tutorial with id
router.post('/:id', tutorials.update)

// Delete a Tutorial with id
router.delete('/:id', tutorials.delete)

// Delete all Tutorial
router.delete('/', tutorials.deleteAll)

module.exports = router

