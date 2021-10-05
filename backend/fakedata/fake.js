
const { getCountRowOfUser } = require('./fakeUser')
const taskdataToDB = require('./fakeTask')
const { userdateToDB } = require('./fakeUser')
const getTaskOfUser = require('./fakeTask')
const  User  = require('../models/User')
const  Task  = require('../models/Task')




const fakeDB = async () => {
    
    // await User.drop()
    // console.log('Таблица `User` была удалена.');
    // await Task.drop()
    // console.log('Таблица `Task` была удалена.');
    
    // if (count > 1) 
    {
        // await overfillingDB() 
    };
    // count = await getCountRowOfUser();
    // console.log("🚀 User table size ->", count, " ");
    // console.log("🚀 User table size ->", getCountRowOfUser(), " ");
}

const overfillingDB = async () => {
    // await removeAndAdd();    

    await userdateToDB();
    console.log("🚀 The end ", " ");
    // await taskdataToDB();
    // await getTaskOfUser();
}



module.exports = fakeDB;