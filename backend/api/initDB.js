
const User = require('../models/User');
const Task = require('../models/Task');
const { clearModel } = require('../api/commonDbApi');
const { addFTSToTask } = require('../api/fts');


const initDB = async () => {
    await clearModel(User);
    await clearModel(Task);
    
    await addFTSToTask();
    await sizeModelPrintToConsole();
}




module.exports = {
    initDB,
}