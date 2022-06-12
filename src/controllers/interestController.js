const db = require('../models/seqDB')

const Interests = db.interests
const { Op } = db.Sequelize

// Create new user post('/')
exports.create = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({
            message: 'You should have contents!!',
        })
        return
    }

    const interest = {
        userId: req.body.userId,
        Interests: req.body.interest,
    }

    Interests.create(interest)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Creating new interests.',
            })
        })
}

// Read all interests get('/')
exports.findAll = (req, res) => {
    const { id } = req.query
    const condition = id ? { id: { [Op.iLike]: `%${id}` } } : null

    Interests.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Reading all interests',
            })
        })
}

// Read by userid
exports.findById = (req, res) => {
    const { fuck } = req.body
    // const condition = id ? { id: { [Op.iLike]: `%${id}` } } : null

    Interests.findAll({
        where: {
            userId: fuck,
        },
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Reading all interests',
            })
        })
}

