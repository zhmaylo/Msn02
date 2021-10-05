const userCreate = require('../api/userDbApi');
const userdata = require('./user.db');
const User = require('../models/User');
const sequelize = require('../api/sequelize.db');


const userdateToDB = async () => {
    userdata.forEach(async (item) => {
        await userCreate(item);
    })
    return;
}

const getCountRowOfUser = async () => {
    const count = await User.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("uid")), "countuid"]],
        raw: true
    })
    return count[0].countuid;
}

module.exports = {
    userdateToDB,
    getCountRowOfUser
}


// const removeAndAdd = async () => {
//     await User.destroy({
//         where: {
//             uid: "07",
//         },
//     })
//     await userCreate(userdata[3]);
//     const allUsers = await User.findAll({ raw: true })
//     console.log("🚀 ~ file: filling.db.js ~ line 41 ~ allUsers", allUsers);
// }

// const allUsers = await User.findAll() // SELECT * FROM ...;
// console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);

// allUsers = await User.findAll({ attributes: ['userid'] }) // SELECT id FROM ...;
// console.log("🚀 ~ file: filling.db.js ~ line 22 ~ allUsers", allUsers);


// console.log('🚀 ~ file: app.js ~ line 69 ~ user', user.get({ plain: true }));
//         console.log('🚀 ~ file: app.js ~ line 75 ~ user', user.toJSON());
