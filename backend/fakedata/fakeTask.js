const taskdata = require('./task.db');
const User = require('../models/User');
const userdata = require('./user.db');


const taskdataToDB = async () => {
    console.log("🚀 ~ file: fakeTask.js ~ line 22 ~ taskdataToDB ~ taskdataToDB")

    // const user = await User.findByPk(1)
    const user = await User.findOne({ where: { uid: '01' } })
    console.log("🚀 ~ file: fakeTask.js ~ line 11 ~ taskdataToDB ~ user", user)
    
    if (!user) return console.log("User found");
    console.log("🚀 ~ file: fakeTask.js ~ line 13 ~ taskdataToDB ~ user", user)
    user.createTask({
        name: taskdata[0].name,
        condition: taskdata[0].condition,
        answer: taskdata[0].answer,
        rating: taskdata[0].rating,
        task: taskdata[0].task,
    }).catch(err => console.log(err));
    console.log("🚀 ~ file: fakeTask.js ~ line 22 ~ taskdataToDB ~ user", user)
    user.getTask()

    // User.findByPk(1).then(user => {
    //     if (!company) return console.log("User found");

    //     user.createTask({
    //         name: taskdata[0].name,
    //         condition: taskdata[0].condition,
    //         answer: taskdata[0].answer,
    //         rating: taskdata[0].rating,
    //         task: taskdata[0].task,
    //     }).catch(err => console.log(err));
    // }).catch(err => console.log(err));
}


const getTaskOfUser = async () => {
    User.findByPk(1).then(user => {
        console.log("🚀 ~ file: fakeTask.js ~ line 27 ~ User.findByPk ~ user", user)
        if (!user) return console.log("User not found");
        user.getTask()
            .then(res => {
                for (let i = 0; i < res.length; i++)
                    console.log(res[i].name, " - ", task.name);
            })
            .catch(err => console.log(err));
    }).catch(err => console.log(err));
}

module.exports = taskdataToDB;
module.exports = getTaskOfUser;
