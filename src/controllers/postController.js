const db = require('../models/seqDB')

const Post = db.posts
const { Op } = db.Sequelize

// Create new post post('/')
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'You should have contents!!',
        })
        return
    }

    const post = {
        userId: req.body.userId, // 유저 아이디를 얻어서 집어 넣기
        likes: 0,
        title: req.body.title,
        content: req.body.content,
        thumbnail: req.body.thumbnail,
        link: req.body.link,
    }

    Post.create(post)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Creating new user.',
            })
        })
}

// Read all user get('/')
exports.findAll = (req, res) => {
    const { id } = req.query
    const condition = id ? { id: { [Op.iLike]: `%${id}` } } : null

    Post.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while Reading all user',
            })
        })
}

// Read single user with id get('/:id')
exports.findOne = (req, res) => {
    const { id } = req.params

    Post.findByPk(id)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Some error occurred while Reading user with id = ${id}`,
            })
        })
}

// Delete a user with id
exports.delete = (req, res) => {
    const { id } = req.params

    Post.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'Post was deleted successfully!',
                })
            } else {
                res.send({
                    message: `Cannot delete User with id =${id}. Maybe User was not found!`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`,
            })
        })
}

