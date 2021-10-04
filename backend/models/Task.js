const { DataTypes } = require('sequelize');
const connectDB = require('../api/connect.db');


const Task = async () => {
    const sequelize = await connectDB();
    const Task = await sequelize.define("task", {
        name: sequelize.STRING,
        condition: sequelize.STRING,
        answer: sequelize.STRING,
        rating: sequelize.STRING,
        task: sequelize.STRING,
    })
    return Task; 
}

module.exports = Task;


// const { Model, DataTypes } = require('sequelize');
// const connectDB = require('../api/connect.db');


// class Task extends Model { }

// (async () => {
//     const sequelize = await connectDB();
//  Task.init({
//     name: DataTypes.STRING,
//     condition: DataTypes.STRING,
//     answer: DataTypes.STRING,
//     rating: DataTypes.STRING,
//     task: DataTypes.STRING,
// }, { sequelize, modelName: 'task' });
// })()

// module.exports = Task;


