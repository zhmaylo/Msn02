const User = require('../models/User');

const userCreate = async (item) => {
    console.log("🚀 ~ file: user.db.js ~ line 4 ~ item", item);
    try {
        await User.create({
            userid: item.userid,
            username: item.username,
        })
        return;
    } catch (error) { }
}

module.exports = userCreate;
