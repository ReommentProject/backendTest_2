const db = require('../models/seqDB')

const Friend = db.friends
const { Op } = db.Sequelize

// Create new user post('/')
exports.create = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({
            message: 'You should have contents!!',
        })
        return
    }

    const friend = {
        userId: req.body.userId,
        friendId: req.body.friendId,
    }

    Friend.create(friend)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Creating new friend.',
            })
        })
}

// Read all user get('/')
exports.findAll = (req, res) => {
    const { id } = req.query
    const condition = id ? { id: { [Op.iLike]: `%${id}` } } : null

    Friend.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while Reading all friend',
            })
        })
}

