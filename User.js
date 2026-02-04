const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        validate:{
            min:0,
            max:110
        },
        allowNull: false
    },
    sexo: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
module.exports = User;