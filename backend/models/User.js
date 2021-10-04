const { Model, DataTypes } = require('sequelize');
const connectDB = require('../api/connect.db');


class User extends Model { }

(async () => {
    const sequelize = await connectDB();
    User.init({
        uid: {
            type: DataTypes.STRING,
            unique: true,
        },
        name: DataTypes.STRING,
    }, { sequelize, modelName: 'user' });
    console.log("User.js - modele init")
})()


module.exports = User