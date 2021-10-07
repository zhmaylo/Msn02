
const User = require("../models/User");

const createUser = async (item) => {
    const iscreate = await User.findOrCreate({
        where: { uid: item.uid },
        defaults: {
            uid: item.uid,
            name: item.name,
        }
    }).catch(err => console.err("🚀 createTask() ~ line 11 ~ err  ", err));
    if (iscreate[1]) {
        console.log("🚀 createUser - Ok  ")
    };
}



module.exports = { createUser };
