const { DataTypes } = require('sequelize');
const { sequelize } = require('../api/sequelize.db');



const Task = sequelize.define("task",
    {
        name: DataTypes.STRING,
        condition: DataTypes.TEXT,
        answer: DataTypes.STRING,
        rating: DataTypes.STRING,
        tags: DataTypes.STRING,
    },
)

module.exports = Task;

