module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            introduce: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            gender: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            profile_Image: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: false,
        }
    )

    return User
}

