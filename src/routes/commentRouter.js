const router = require('express').Router()

const comments = require('../controllers/commentController')

// Create new 
router.post('/', comments.create)

// Read all user
router.get('/', comments.findAll)

// Read single user with id
router.get('/:id', comments.findOne)

// // Delete a user with id
router.delete('/:id', comments.delete)

// // Delete all Tutorial
// router.delete('/')

module.exports = router

