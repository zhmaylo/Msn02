const taskdata = require('./task.db');
const User = require('../models/User');
const Task = require('../models/Task');
const { createTask } = require('../api/taskDbApi');


const addTaskToUser = async (userUID, task) => {
    const user = await getuser(userUID);
    const istask = await isTask(task);
    if (istask) return;
    await createTask(user, task);
}

const getuser = async (userUID) => {
    const user = await User.findOne({ where: { uid: userUID } })
        .catch(err => console.err("🚀 ~ addTaskToUser() ~ line 16 ~ err", err));
    return user;
}

const isTask = async (task) => {
    const instance = await Task.findOne({ where: { name: task.name } })
        .catch(err => console.err("🚀 ~ isTask() ~ line 22 ~ err", err));
    if (instance === null) return false;
    return true;
}

const taskdataToTask = async () => {
    const uid = ['01', '01', '01', '02', '03', '03'];
    for (i = 0; i < 6; i++) {
        await addTaskToUser(uid[i], taskdata[i]);
    }
}

module.exports = {
    taskdataToTask
};

