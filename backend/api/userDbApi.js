
const User = require("../models/User");

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



module.exports = { userCreate };
