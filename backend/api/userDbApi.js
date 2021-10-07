
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

const getuser = async (userUID) => {
    const user = await User.findOne({ where: { uid: userUID } })
        .catch(err => console.err("🚀 ~ getuser() ~ err", err));
    return user;
}

const gettasks = async (user) => {
    const tasks = await user.getTasks()
        .catch(err => console.log("🚀 gettasks() ~ err ~ ", err));
    return tasks;
}

module.exports = {
    createUser,
    getuser,
    gettasks,
};
