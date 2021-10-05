const { Model, DataTypes } = require('sequelize');
const sequelize = require('../api/sequelize.db');
const Task = require('./Task');


const User = sequelize.define('user', {
    uid: {
        type: DataTypes.STRING,
        unique: true,
    },
    name: DataTypes.STRING,
})
// ;(async () => {
//     await sequelize.sync({ force: true })
// })()
// User.drop()
User.hasMany(Task);

module.exports = User