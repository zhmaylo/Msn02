const { createUser } = require('../api/userDbApi');
const userdata = require('./user.db');

const userdateToUser = async () => {
    userdata.forEach(async (item) => {
        await createUser(item);
    })
    return;
}


module.exports = {
    userdateToUser
}

