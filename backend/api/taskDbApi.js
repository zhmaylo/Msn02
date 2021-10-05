const Task = require('../models/Task');

const taskCreate = async (item) => {

    try {
        await User.create({
            uid: item.uid,
            name: item.name,
        })
        return;
    } catch (error) { }
}

module.exports = userCreate;
