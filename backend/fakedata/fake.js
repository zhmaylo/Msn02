
const { userdateToDB } = require('./fakeUserApi')
const { taskdataToDB } = require('./fakeTaskApi')
const User = require('../models/User');
const Task = require('../models/Task');
const { getSizeModel } = require('../api/commonDbApi');


const sizeModelPrintToConsole = async () => {
    console.log("🚀 Size 'User'=", await getSizeModel(User))
    console.log("🚀 Size 'Task'=", await getSizeModel(Task))
}

const fakeDB = async () => {
    sizeModelPrintToConsole();
    {
        await overfillingDB();
        sizeModelPrintToConsole();
    };
}

const overfillingDB = async () => {
    await userdateToDB();
    await taskdataToDB();
}


module.exports = fakeDB;