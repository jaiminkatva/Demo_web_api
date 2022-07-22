module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define('admin', {
        admin_name: {
            type: DataTypes.STRING
        },
        admin_email: {
            type: DataTypes.STRING
        },
        admin_password: {
            type: DataTypes.STRING
        },
        admin_cpassword: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
    return Admin
}