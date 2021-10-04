const Task = require('../models/Task');

const taskCreate = async (item) => {
    console.log("🚀 ~ file: user.db.api.js ~ line 4 ~ item", item);
    try {
        await User.create({
            uid: item.uid,
            name: item.name,
        })
        return;
    } catch (error) { }
}

module.exports = userCreate;
