module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        likes: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumbnail: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return Post
}

