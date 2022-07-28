module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('product', {
        image: {
            type: DataTypes.STRING
        },
        product_name: {
            type: DataTypes.STRING
        },
        product_price: {
            type: DataTypes.BIGINT
        },
        product_desc: {
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
    })
    return Product
}