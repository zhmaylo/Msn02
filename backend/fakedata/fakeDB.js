
const { userdateToUser } = require('./fakeUserApi')
const { taskdataToTask } = require('./fakeTaskApi')
const { sizeModelPrintToConsole } = require('../api/commonDbApi');


const fakeDB = async () => {
   
    // await userdateToUser();
    await taskdataToTask();

}




module.exports = {
    fakeDB,
}