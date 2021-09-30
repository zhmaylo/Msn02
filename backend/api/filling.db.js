const { Model, DataTypes } = require('sequelize');
const userdata = require('../const/admin.const');


const connectDB = require('./connect.db');

const fillingDB = async () => {
    console.log('🚀 ~ file: filling.db.js ~ line 32 ~ fillingDB ~ fillingDB - start');
    const sequelize = await connectDB();
    console.log('🚀 ~ file: filling.db.js ~ line 33 ~ fillingDB ~ fillingDB - step 2');
    class User extends Model { }
    User.init({
        userid: DataTypes.STRING,
        username: DataTypes.STRING,
        userpageurl: DataTypes.STRING
    }, { sequelize, modelName: 'user' });


    // (async () => {
    sequelize.sync();
    const user = User.create({
        userid: userdata[0].userid,
        username: userdata[0].username,
        userpageurl: userdata[0].userpageurl
    }).then((user) => {
        console.log('🚀 ~ file: app.js ~ line 69 ~ user', user.get({ plain: true }));
        console.log('🚀 ~ file: app.js ~ line 75 ~ user', user.toJSON());
        return user;
    })

    // })();
    // return await sequelize;
}


module.exports = fillingDB;