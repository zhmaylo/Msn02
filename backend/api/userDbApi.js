
const User = require("../models/User");
const sequelize = require("./sequelize.db");

const userCreate = async (item) => {
    console.log("🚀 ~ file: userDbApi.js ~ line 6 ~ item", item);

    try {
        await User.findOrCreate({
            where: { uid: item.uid },
            defaults: {
                uid: item.uid,
                name: item.name,
            }
        })
        return;
    } catch (error) { console.log(error) }
}

const getCountRecordOfUser = async () => {
    const count = await User.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("uid")), "countuid"]],
        raw: true
    })
    return count[0].countuid;
}

// isUniqueUid = () => {
//     User.findOne()
// }

module.exports = { userCreate, getCountRecordOfUser };
