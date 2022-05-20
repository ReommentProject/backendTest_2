const db = require('../models/seqDB')

const Tutorial = db.tutorials
const { Op } = db.Sequelize

// Create and save a new tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty!',
        })
        return
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    }

    Tutorial.create(tutorial)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the tutorial.',
            })
        })
}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const { title } = req.query
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null

    Tutorial.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            })
        })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const { id } = req.params

    Tutorial.findByPk(id)
        .then((data) => {
            res.send(data)
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
            res.status(500).send({
                message: `error retrieving Tutorial with id =${id}`,
            })
        })
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const { id } = req.params

    Tutorial.update(req.body, {
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'Tutorial was updated successfully.',
                })
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
                })
            }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
            res.status(500).send({
                message: `Error updating Tutorial with id= ${id}`,
            })
        })
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const { id } = req.params

    Tutorial.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'Tutorial was deleted successfully!',
                })
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id =${id}. Maybe Tutorial was not found!`,
                })
            }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
            res.status(500).send({
                message: `Could not delete Tutorial with id = ${id}`,
            })
        })
}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({
                message: `${nums} Tutorials were deleted successfully!`,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while removingall tutorials.',
            })
        })
}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            })
        })
}

