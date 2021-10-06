const {userCreate} = require('../api/userDbApi');
const userdata = require('./user.db');

const userdateToDB = async () => {
    userdata.forEach(async (item) => {
        await userCreate(item);
    })
    return;
}


module.exports = {
    userdateToDB
}

