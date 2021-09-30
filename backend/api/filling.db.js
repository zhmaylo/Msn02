const userdata = require('../const/admin.const');
const User = require('../models/User');
const connectDB = require('./connect.db');


const fillingDB = async () => {
    const sequelize = await connectDB();
    (async () => {
        // sequelize.sync();
        // userdata.forEach((item) => {
        //     User.create({
        //         userid: item.userid,
        //         username: item.username,
        //         userpageurl: item.userpageurl
        //     })
        // })

        // const allUsers = await User.findAll() // SELECT * FROM ...;
        // console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);

        // allUsers = await User.findAll({ attributes: ['userid'] }) // SELECT id FROM ...;
        // console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);
    })();
    const count = await getCountRow()
    // console.log("🚀 ~ file: filling.db.js ~ line 25 ~ getCountRow();", count);
}

const getCountRow = async () => {
    const sequelize = await connectDB();

    const count = await User.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("userid")), "countUserid"]],
        raw:true
    })
    console.log("🚀 ~ file: filling.db.js ~ line 33 ~ sensorCoun", count);
    // console.log("🚀 ~ file: filling.db.js ~ line 34 ~ sensorCoun", countUserid);
    return count;
}


module.exports = fillingDB;

// console.log('🚀 ~ file: app.js ~ line 69 ~ user', user.get({ plain: true }));
//         console.log('🚀 ~ file: app.js ~ line 75 ~ user', user.toJSON());