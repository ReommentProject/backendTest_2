module.exports = (sequelize, Sequelize) => {
    const Friend = sequelize.define(
        'friend',
        {
            userId: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            friendId: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
        },
        {
            timestamps: false,
        }
    )

    return Friend
}

