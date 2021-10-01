const userdata = require('./admin.const');
const User = require('../models/User');
const connectDB = require('../api/connect.db');

const fillingDB = async () => {
    const sequelize = await connectDB();
    const count = await getCountRow();
    console.log("🚀 User table size ->", count, " ");
    if (count > 1) return false;

    await sequelize.sync({force: true});
    userdateToDB();
    count = await getCountRow();
    console.log("🚀 UPDATE User table size ->", count, " ");
}

const userdateToDB = () => {
    userdata.forEach(async (item)  => {
        await userCreate(item);
        console.log('🚀 ~ file: filling.db.js ~ line 14 ~ userCreate ~ item.userid', item.userid, " ");
    })
    return;
}

const userCreate = async (item) => {
    await User.create({
        userid: item.userid,
        username: item.username,
        userpage: item.userpage
    })
    return;
}

    // const allUsers = await User.findAll() // SELECT * FROM ...;
    // console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);

    // allUsers = await User.findAll({ attributes: ['userid'] }) // SELECT id FROM ...;
    // console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);


// console.log('🚀 ~ file: app.js ~ line 69 ~ user', user.get({ plain: true }));
//         console.log('🚀 ~ file: app.js ~ line 75 ~ user', user.toJSON());

const getCountRow = async () => {
    const sequelize = await connectDB();

    const count = await User.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("userid")), "countUserid"]],
        raw: true
    })
    return count[0].countUserid;
}

module.exports = fillingDB;
