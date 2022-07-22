module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('category', {
        category_name: {
            type: DataTypes.STRING
        },
        category_desc: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: false,
    })
    return Category
}