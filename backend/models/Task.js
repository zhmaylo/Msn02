const { DataTypes } = require('sequelize');
const sequelize = require('../api/sequelize.db');



const Task = sequelize.define("task", {
    name: DataTypes.STRING,
    condition: DataTypes.TEXT,
    answer: DataTypes.STRING,
    rating: DataTypes.STRING,
    task: DataTypes.STRING,
})
    ; (async () => {
        // await sequelize.sync({ force: true })
        await sequelize.sync()
    })()

module.exports = Task;

