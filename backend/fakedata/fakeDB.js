const { userdateToUser } = require('./fakeUserApi')
const { taskdataToTask } = require('./fakeTaskApi')

const fakeDB = async () => {
    await userdateToUser();
    await taskdataToTask();
}

module.exports = {

    fakeDB,
}