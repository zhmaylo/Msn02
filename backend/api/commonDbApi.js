const Task = require("../models/Task");
const User = require("../models/User");
const {sequelize} = require("./sequelize.db");


const getSizeModel = async (model) => {
    const count = await model.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "countid"]],
        raw: true
    })
    return count[0].countid;
}

const clearModel = async (model) => {
    await model.sync({ force: true })
}

const sizeModelPrintToConsole = async () => {
    console.log("🚀 Size 'User'=", await getSizeModel(User), " ")
    console.log("🚀 Size 'Task'=", await getSizeModel(Task), " ")
}

module.exports = {
    getSizeModel,
    clearModel,
    sizeModelPrintToConsole
}

