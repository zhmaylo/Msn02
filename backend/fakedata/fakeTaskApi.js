const taskdata = require('./task.db');
const Task = require('../models/Task');
const { createTask } = require('../api/taskDbApi');
const { getuser } = require('../api/userDbApi');


const addTaskToUser = async (userUID, task) => {
    const user = await getuser(userUID);
    const istask = await isTask(task);
    if (istask) return;
    await createTask(user, task);
}

const isTask = async (task) => {
    const instance = await Task.findOne({ where: { name: task.name } })
        .catch(err => console.err("🚀 ~ isTask() ~ line 22 ~ err", err));
    if (instance === null) return false;
    return true;
}

const taskdataToTask = async () => {
    const uid = ['01', '01', '01', '03','03','04', '109751285978140171006', '109751285978140171006', '109751285978140171006', '109751285978140171006'];
    for (i = 0; i < 10; i++) {
        await addTaskToUser(uid[i], taskdata[i]);
    }
}

module.exports = {
    taskdataToTask
};

