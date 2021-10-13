
const User = require('../models/User');
const Task = require('../models/Task');
const Tag = require('../models/Tag');

const { clearModel, sizeModelPrintToConsole } = require('../api/commonDbApi');
const { addFTSToTask } = require('../api/fts');


const initDB = async () => {
    await clearModel(User);
    await clearModel(Task);
    await clearModel(Tag);

    await addFTSToTask();
    await sizeModelPrintToConsole();
}




module.exports = {
    initDB,
}