const Task = require('../models/Task');
const { tagsToTable } = require('./tagDbApi');
const { Op } = require("sequelize");

const createTask = async (user, task) => {
    await tagsToTable(task.tags);
    await user.createTask({
        name: task.name,
        condition: task.condition,
        answer: task.answer,
        rating: task.rating,
        tags: task.tags,
    }).catch(err => console.error("🚀 createTask() ~ err  ", err));
    console.log("🚀 createTask - Ok  ");
}


const findAllTaskAndSort = async (field, sortby, tag) => {
    const tasks = await Task.findAll(
        {
            where: {
                tags: {
                    [Op.or]: [
                        { [Op.like]: tag + '%' },
                        { [Op.like]: '%' + tag },
                        { [Op.regexp]: '[.;,\s]' + tag + '[.;,\s]' }
                    ]
                }
            },
            order: [
                [field, sortby],
            ],
        }
    ).catch(err => console.error("🚀 findAllTaskAndSort()) ~ err  ", err));
    return tasks;
}


module.exports = {
    createTask,
    findAllTaskAndSort,
}


