const conexion = require("../config/db.config.js")
const { DataTypes } = require("sequelize");

const Bootcamp = conexion.define("Bootcamp", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 5,             
            max: 10            
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "bootcamp"
}
)

module.exports = Bootcamp