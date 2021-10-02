const { Model, DataTypes } = require('sequelize');
const connectDB = require('../api/connect.db');


class User extends Model { }

(async () => {
    const sequelize = await connectDB();
    User.init({
        userid: {
            type: DataTypes.STRING,
            unique: true,
        },
        username: DataTypes.STRING,
    }, { sequelize, modelName: 'user' });
    console.log("User.js - modele init")
})()


module.exports = User