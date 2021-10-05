
const getCountRowOfUser = require('./fakeUser')
const taskdataToDB = require('./fakeTask')
const userdateToDB = require ('./fakeUser')
const getTaskOfUser = require ('./fakeTask')

const fakeDB = async () => {
    const count = await getCountRowOfUser();
    console.log("🚀 User table size ->", count, " ");
    // if (count > 1) 
    // { 
        await overfillingDB() 
    // };
}

const overfillingDB = async () => {
    // await removeAndAdd();    
    
    console.log("🚀 ~ file: fake.js ~ line 19 ~ overfillingDB ~ overfillingDB")
    await userdateToDB();
    console.log("🚀 ~ file: fake.js ~ line 21 ~ overfillingDB ~ userdateToDB")

    // await taskdataToDB();
    // await getTaskOfUser();
}

module.exports = fakeDB;