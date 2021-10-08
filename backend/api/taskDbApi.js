const Task = require('../models/Task');

const createTask = async (user, task) => {
    await user.createTask({
        name: task.name,
        condition: task.condition,
        answer: task.answer,
        rating: task.rating,
        tags: task.tags,
    }).catch(err => console.err("🚀 createTask() ~ err  ", err));
    console.log("🚀 createTask - Ok  ");
}

const findAllAndSort = async (field, direction) => {
    const tasks = await Task.findAll({
        order: [
            [field, direction],
        ],
    }).catch(err => console.err("🚀 findAllAndSort()) ~ err  ", err));;
    return tasks;
}


module.exports = {
    createTask,
    findAllAndSort,
}
