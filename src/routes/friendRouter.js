const router = require('express').Router()

const friends = require('../controllers/friendController')

// Create new user
router.post('/', friends.create)

// Read all user
router.get('/', friends.findAll)

module.exports = router

