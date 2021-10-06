
const { userdateToDB } = require('./fakeUser')
const { getCountRecordOfUser } = require('../api/userDbApi')
const { taskdataToDB, getTaskOfUser } = require('./fakeTask')
const { getCountRecordOfTask } = require('../api/taskDbApi')


const fakeDB = async () => {
    let countUser = await getCountRecordOfUser();
    let countTask = await getCountRecordOfTask();

    // if ((countUser <= 1) | (countTask <= 1)) 
    {
        await overfillingDB();
        countUser = await getCountRecordOfUser();
        countTask = await getCountRecordOfTask();
    };
    console.log("🚀 User table size ->", countUser, " ");
    console.log("🚀 Task table size ->", countTask, " ");
}

const overfillingDB = async () => {
    // await removeAndAdd();    

    await userdateToDB();

    await taskdataToDB();
    await getTaskOfUser();
}



module.exports = fakeDB;