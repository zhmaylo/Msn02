
const User = require("../models/User");

const userCreate = async (item) => {
    // try {
        await User.create({
            uid: item.uid,
            name: item.name,
        })
        // return;
    // } catch (error) {console.log(error)}
}


module.exports = userCreate;
