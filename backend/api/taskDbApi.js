const Task = require('../models/Task');
const { tagsToTable } = require('./tagDbApi');

const createTask = async (user, task) => {
    await tagsToTable(task.tags);
    await user.createTask({
        name: task.name,
        condition: task.condition,
        answer: task.answer,
        rating: task.rating,
        tags: task.tags,
    }).catch(err => console.err("🚀 createTask() ~ err  ", err));
    console.log("🚀 createTask - Ok  ");
}

const findAllAndSort = async (field, sortby) => {
    const tasks = await Task.findAll({
        order: [
            [field, sortby],
        ],
    }).catch(err => console.err("🚀 findAllAndSort()) ~ err  ", err));;
    return tasks;
}


module.exports = {
    createTask,
    findAllAndSort,
}
