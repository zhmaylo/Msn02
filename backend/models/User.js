const { Model, DataTypes, Sequelize } = require('sequelize');
const connectDB = require('../api/sequelize.db');
const Task = require('./Task');

class User extends Model { }

(async () => {
    const sequelize = await connectDB();
    // console.log("🚀 ~ file: User.js ~ line 9 ~ sequelize", sequelize);
    User.init({
        uidert: {
            type: Sequelize.STRING,
            unique: true,
        },
        name: DataTypes.STRING,
    }, { sequelize, modelName: 'user' });
})()


// (async () => {
    //     const sequelize = await connectDB();
    //     User.init({
        //         uid: {
            //             type: DataTypes.STRING,
//             unique: true,
//         },
//         name: DataTypes.STRING,
//     }, { sequelize, modelName: 'user' });
//         console.log("User.js - model init")
// })()


// User.hasMany(Task);


// ;(async () => {
    //     await sequelize.sync({ force: true })
    // })()

    // class User extends Model { }

// const User = sequelize.define('user', {
//     uid: {
//         type: Sequelize.STRING,
//         unique: true,
//     },
//     name: DataTypes.STRING,
// })

module.exports = User