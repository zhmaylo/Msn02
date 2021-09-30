const { Model, DataTypes } = require('sequelize');

export class Task extends Model { }
Task.init({
    userid: DataTypes.STRING,
    taskid: DataTypes.STRING,
    taskname: DataTypes.STRING,
    condition: DataTypes.STRING
    
}, { sequelize, modelName: 'user' });

module.exports = Task;
