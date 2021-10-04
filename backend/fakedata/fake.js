const userCreate = require('../api/userDbApi');
const userdata = require('./user.db');
const taskdata = require('./task.db');
const connectDB = require('../api/connect.db');
const User = require('../models/User');

const fakeDB = async () => {
    const sequelize = await connectDB();
    const count = await getCountRow();
    console.log("🚀 User table size ->", count, " ");

    // await removeAndAdd();    
    if (count > 1) return false;

    await sequelize.sync({ force: true });
    await userdateToDB();
    count = await getCountRow();
    console.log("🚀 UPDATE User table size ->", count, " ");
    await taskdataToDB();
}

module.exports=fakeDB;