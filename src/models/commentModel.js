module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        postId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return Comment
}

