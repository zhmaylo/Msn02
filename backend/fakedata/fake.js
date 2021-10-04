const userCreate = require ('../api/userDbApi');
const userdata = require('./user.db');
const connectDB = require('../api/connect.db');
const User = require('../models/User');

const fakeDB = async () => {
    const sequelize = await connectDB();
    const count = await getCountRow();
    console.log("🚀 User table size ->", count, " ");

    // await removeAndAdd();    
    if (count > 1) return false;

    await sequelize.sync({ force: true });
    userdateToDB();
    count = await getCountRow();
    console.log("🚀 UPDATE User table size ->", count, " ");
}

const userdateToDB = () => {
    userdata.forEach(async (item) => {
        console.log('🚀 ~ file: fake.js ~ line 21 ~ userdata.forEach ~ item', item);
        await userCreate(item);
        console.log('🚀 ~ file: filling.db.js ~ line 14 ~ userCreate ~ item.userid', item.uid, " ");
    })
    return;
}

const removeAndAdd = async () => {
    await User.destroy({
        where: {
            uid: "07",
        },
    })
    await userCreate(userdata[3]);
    const allUsers = await User.findAll({ raw: true })
    console.log("🚀 ~ file: filling.db.js ~ line 41 ~ allUsers", allUsers);
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
        attributes: [[sequelize.fn("COUNT", sequelize.col("uid")), "countuid"]],
        raw: true
    })
    return count[0].countuid;
}

module.exports = fakeDB;
