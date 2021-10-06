const { Model, DataTypes } = require('sequelize');
const sequelize = require('../api/sequelize.db');
const Task = require('./Task');

<<<<<<< HEAD
class User extends Model { }

(async () => {
    const sequelize = await connectDB();
    // console.log("🚀 ~ file: User.js ~ line 9 ~ sequelize", sequelize);
   User.init({
        uidert: {
            type: DataTypes.STRING,
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

=======
>>>>>>> e045923f57ef0632c83b82873472e9b1057d3253

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