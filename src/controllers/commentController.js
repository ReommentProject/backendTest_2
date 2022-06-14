const db = require('../models/seqDB')

const Comment = db.comments
const { Op } = db.Sequelize

// Create new comment post('/')
exports.create = (req, res) => {
    if (!req.body.content) {
        res.status(400).send({
            message: 'You should have contents!!',
        })
        return
    }

    const comment = {
        userId: req.body.userId,
        postId: req.body.postId,
        content: req.body.content,
    }

    Comment.create(comment)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Creating new comment.',
            })
        })
}

// Read all comments get('/')
exports.findAll = (req, res) => {
    const { id } = req.query
    const condition = id ? { id: { [Op.iLike]: `%${id}` } } : null

    Comment.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Reading all comment',
            })
        })
}

// Read single comment with id get('/:id')
exports.findOne = (req, res) => {
    const { id } = req.params

    Comment.findByPk(id)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Some error occurred while Reading comment with id = ${id}`,
            })
        })
}

// Read comments by postId post("/usingpost")
exports.findAllByPost = (req, res) => {
    const { hmm } = req.body

    Comment.findAll({
        where: {
            postId: hmm,
        },
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Reading all comments',
            })
        })
}

// Delete a comment with id
exports.delete = (req, res) => {
    const { id } = req.params

    Comment.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'Comment was deleted successfully!',
                })
            } else {
                res.send({
                    message: `Cannot delete comment with id =${id}. Maybe Comment was not found!`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Could not delete Comment with id=${id}`,
            })
        })
}

