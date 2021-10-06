const Task = require('../models/Task');
const sequelize = require('./sequelize.db');

const taskCreate = async (item) => {

    try {
        await Task.create({

        })
        return;
    } catch (error) { }
}

const getCountRecordOfTask = async () => {
    const count = await Task.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "countid"]],
        raw: true
    })
    return count[0].countid;
}


module.exports = { 

    getCountRecordOfTask,
}
