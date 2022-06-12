module.exports = (sequelize, Sequelize) => {
    const Interests = sequelize.define(
        'interest',
        {
            userId: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            Interests: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
        },
        {
            timestamps: false,
        }
    )

    return Interests
}

