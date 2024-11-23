const conexion = require("../config/db.config.js")
const { DataTypes } = require("sequelize");

const User = conexion.define("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true // Usa el validador integrado de Sequelize
        }
    },
}, {
    tableName: "user"
})

module.exports = User