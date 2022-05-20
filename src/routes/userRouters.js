const router = require('express').Router()

const users = require('../controllers/userController')

// Create new user
router.post('/', users.create)

// Read all user
router.get('/', users.findAll)

// Read single user with id
router.get('/:id', users.findOne)

// // Update a user with id
router.post('/:id', users.update)

// // Delete a user with id
router.delete('/:id', users.delete)

// // Delete all Tutorial
// router.delete('/')

module.exports = router

