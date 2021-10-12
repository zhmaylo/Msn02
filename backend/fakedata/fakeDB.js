
const { userdateToUser } = require('./fakeUserApi')
const { taskdataToTask } = require('./fakeTaskApi')
const User = require('../models/User');
const Task = require('../models/Task');
const { getSizeModel, clearModel, sizeModelPrintToConsole } = require('../api/commonDbApi');
const { addFTSToTask, selectTasks } = require('../api/fts');


const fakeDB = async () => {
    await clearModel(User);
    await clearModel(Task);

    await userdateToUser();
    await taskdataToTask();
    
    await addFTSToTask();
    await sizeModelPrintToConsole();
}




module.exports = {
    fakeDB,
}