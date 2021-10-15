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
    }).catch(err => console.error("🚀 createTask() ~ err  ", err));
    console.log("🚀 createTask - Ok  ");
}

const findAllAndSort = async (field, sortby) => {
    const tasks = await Task.findAll({
        order: [
            [field, sortby],
        ],
    }).catch(err => console.error("🚀 findAllAndSort()) ~ err  ", err));
    return tasks;
}


const { Op } = require("sequelize");
const findTagsInTask = async (tag) => {
    tag1 = 'стакан%'
    tag2 = '%стакан'
    tag3 = '[.;,\s]стакан[.;,\s]'
    const task = await Task.findAll(
        {
            where: {
                tags: {
                    [Op.or]: [
                        { [Op.like]: tag1 },
                        { [Op.like]: tag2 },
                        { [Op.regexp]: tag3 }
                    ]
                }
            }
        }
    ).catch(err => console.error("🚀 findTagsInTask()) ~ err  ", err));
    return task;
}

module.exports = {
    createTask,
    findAllAndSort,
    findTagsInTask,
}

