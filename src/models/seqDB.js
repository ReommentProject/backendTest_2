// @ts-check

const Sequelize = require('sequelize')

const dbConfig = require('../config/db.config')

// @ts-ignore
const sequelize = new Sequelize({
    database: dbConfig.database,
    username: dbConfig.username,
    password: dbConfig.password,
    dialect: dbConfig.dialect,
    host: dbConfig.host,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./testModel')(sequelize, Sequelize)
db.users = require('./userModel')(sequelize, Sequelize)
db.posts = require('./postModel')(sequelize, Sequelize)
db.comments = require('./commentModel')(sequelize, Sequelize)
db.friends = require('./friendModel')(sequelize, Sequelize)
db.interests = require('./interestModel')(sequelize, Sequelize)

db.users.hasMany(db.posts, {
    foreignKey: 'userId',
})
db.posts.belongsTo(db.users)

db.users.hasMany(db.comments, {
    foreignKey: 'userId',
})
db.comments.belongsTo(db.users)

db.posts.hasMany(db.comments, {
    foreignKey: 'postId',
})
db.comments.belongsTo(db.posts)

db.users.hasMany(db.friends, {
    foreignKey: 'userId',
})

db.users.hasMany(db.friends, {
    foreignKey: 'friendId',
})
db.friends.belongsTo(db.users)

db.interests.belongsTo(db.users)
db.users.hasMany(db.interests, {
    foreignKey: 'userId',
})

module.exports = db

