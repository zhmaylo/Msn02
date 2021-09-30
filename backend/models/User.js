const { Model, DataTypes } = require('sequelize');
const connectDB = require('../api/connect.db');


class User extends Model { }

(async () => {
    const sequelize = await connectDB()
    User.init({
        userid: DataTypes.STRING,
        username: DataTypes.STRING,
        userpageurl: DataTypes.STRING
    }, { sequelize, modelName: 'user' });
    console.log("User.js - modele init")
})()

module.exports = User