const router = require('express').Router()

const friends = require('../controllers/friendController')

// Create new friends
router.post('/', friends.create)

// Read all friends
router.get('/', friends.findAll)

// Delete friend
router.delete('/:id/:rel', friends.deleteFriend)

module.exports = router

