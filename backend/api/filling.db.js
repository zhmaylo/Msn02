const { Model, DataTypes } = require('sequelize');
const userdata = require('../const/admin.const');
const User = require('../models/User');



const fillingDB = async () => {
    console.log('🚀 ~ file: filling.db.js ~ line 32 ~ fillingDB ~ fillingDB - start');

    console.log('🚀 ~ file: filling.db.js ~ line 33 ~ fillingDB ~ fillingDB - step 2');



    // (async () => {
    //     sequelize.sync();
    //     const user = User.create({
    //         userid: userdata[0].userid,
    //         username: userdata[0].username,
    //         userpageurl: userdata[0].userpageurl
    //     }).then((user) => {
    //         console.log('🚀 ~ file: app.js ~ line 69 ~ user', user.get({ plain: true }));
    //         console.log('🚀 ~ file: app.js ~ line 75 ~ user', user.toJSON());
    //         return user;
    //     })

    // })();
    // return await sequelize;
}


module.exports = fillingDB;