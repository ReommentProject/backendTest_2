const db = require('../models/seqDB')

const Friend = db.friends
const { Op } = db.Sequelize

// Create new friendship post('/')
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

// Read all friendship get('/')
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

// break friendship
exports.deleteFriend = (req, res) => {
    const { id } = req.params
    const { rel } = req.params
    console.log(`${id} and ${rel}`)
    Friend.destroy({
        where: { userId: id, friendId: rel },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'friend was deleted successfully!',
                })
            } else {
                res.send({
                    message: `Cannot delete firend with id =${id}. Maybe User was not found!`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Could not delete friend with id=${id}`,
            })
        })
}

