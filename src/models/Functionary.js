const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Functionary = db.define('Functionary', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    logged: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = Functionary;

