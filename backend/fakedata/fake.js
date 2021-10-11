
const { userdateToUser } = require('./fakeUserApi')
const { taskdataToTask } = require('./fakeTaskApi')
const User = require('../models/User');
const Task = require('../models/Task');
const { getSizeModel, clearModel } = require('../api/commonDbApi');
const { addFTSToTask, selectTasks } = require('../api/fts');


const fakeDB = async () => {
    // await clearModel(User);
    // await clearModel(Task);

    // await userdateToUser();
    // await taskdataToTask();
    
    // await addFTSToTask();
    await sizeModelPrintToConsole();
}


const sizeModelPrintToConsole = async () => {
    console.log("🚀 Size 'User'=", await getSizeModel(User), " ")
    console.log("🚀 Size 'Task'=", await getSizeModel(Task), " ")
}


module.exports = {
    fakeDB,
    sizeModelPrintToConsole
}