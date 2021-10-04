const { Model, DataTypes } = require('sequelize');

export class Task extends Model { }
Task.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    condition: DataTypes.STRING
    
}, { sequelize, modelName: 'user' });

module.exports = Task;
