const router = require('express').Router()

const posts = require('../controllers/postController')

// Create new post
router.post('/', posts.create)

// Read all posts
router.get('/', posts.findAll)

// Read single post with id
router.get('/:id', posts.findOne)

// Delete a user with id
router.delete('/:id', posts.delete)

// plus likes to posts!
router.post('/upLike', posts.plusLikes)

// minus likes to posts!
router.post('/downLike', posts.minusLikes)

module.exports = router

