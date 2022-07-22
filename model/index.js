const dbConfig = require('../config/dbConfig')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log("Error : " + err);
    })

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.admin = require("./adminModel")(sequelize, DataTypes)
db.category = require("./categoryModel")(sequelize, DataTypes)
db.product = require("./productModel")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("yes re-sync");
    })

// one to many relation between category and product
db.category.hasMany(db.product, {
    foreignKey: 'category_id',
    as: 'product-info',
    onDelete: 'cascade'
})

db.product.belongsTo(db.category, {
    foreignKey: "category_id",
    as: "category-info"
})

module.exports = db;