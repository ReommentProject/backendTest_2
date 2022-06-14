const router = require('express').Router()

const comments = require('../controllers/commentController')

// Create new comment
router.post('/', comments.create)

// Read all comment
router.get('/', comments.findAll)

// Read comment with id
router.get('/:id', comments.findOne)

// Delete commnet with id
router.delete('/:id', comments.delete)

// read all comment where postid is same
router.post('/usingpost', comments.findAllByPost)

module.exports = router

