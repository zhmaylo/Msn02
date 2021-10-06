const taskdata = require('./task.db');
const User = require('../models/User');
const Task = require('../models/Task');


const taskdataToDB = async () => {

    const user = await User.findOne({ where: { uid: '01' } })

    if (!user) return console.log("🚀 ~ file: fakeTask.js ~ line 10 ~ user User found");

    const u = await user.createTask({
        name: taskdata[0].name,
        condition: taskdata[0].condition,
        answer: taskdata[0].answer,
        rating: taskdata[0].rating,
        task: taskdata[0].task,
    }).catch(err => console.log(">>>>>>>>>>", err));
    console.log("🚀 ~ file: fakeTask.js ~ line 18 ~ u", u);
    user.getTasks()
        .then(res => {
            console.log("🚀 ~ file: fakeTask.js ~ line 21 ~ res", res);
        })
}

const getTaskOfUser = async () => {
    const user = await User.findOne({ where: { uid: '01' } }); //.then(user => {
    if (!user) return console.log("getTaskOfUser User not found");
    const task = await user.getTasks(); //        .then(res => {
    for (let i = 0; i < task.length; i++) {
        console.log("🚀 ~ getTaskOfUser line 31 ", task[i].name, " - ");
    }
        // .catch (err => console.log("🚀 ~ getTaskOfUser line 33", err));
    // }).catch (err => console.log("🚀 ~ getTaskOfUser line 34", err));
}

module.exports = {
    taskdataToDB,
    getTaskOfUser
};

