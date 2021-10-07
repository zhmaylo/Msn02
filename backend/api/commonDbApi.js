const sequelize = require("./sequelize.db");


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

module.exports={
    getSizeModel,
    clearModel
}