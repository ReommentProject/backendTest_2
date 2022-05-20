const db = require('../models/seqDB')

const User = db.users
const { Op } = db.Sequelize

// Create new user post('/')
exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'You should have contents!!',
        })
        return
    }

    const user = {
        id: req.body.id,
        password: req.body.password,
        nickname: req.body.nickname,
        introduce: req.body.introduce,
        gender: req.body.gender,
        profile_Image: req.body.profile_Image,
    }

    User.create(user)
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

    User.findAll({ where: condition })
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

    User.findByPk(id)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Some error occurred while Reading user with id = ${id}`,
            })
        })
}

// Update a user with id
exports.update = (req, res) => {
    const { id } = req.params

    User.update(req.body, {
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'User was updated successfully',
                })
            } else {
                res.send({
                    message: `Cannot update User with id=${id} type=${typeof id}. Maybe User was not found or req.body is empty num=${num}`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Some error occurred while updating user`,
            })
        })
}

// Delete a user with id
exports.delete = (req, res) => {
    const { id } = req.params

    User.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'User was deleted successfully!',
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

// Delete all Tutorial

