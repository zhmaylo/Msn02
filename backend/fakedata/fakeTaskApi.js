const taskdata = require('./task.db');
const User = require('../models/User');
const Task = require('../models/Task');


const createTask = async (userUID, task ) => {
    const user = await User.findOne({ where: { uid: userUID } })
    if (Task.findOne() != null) return;
    await user.createTask({
        name: task.name,
        condition: task.condition,
        answer: task.answer,
        rating: task.rating,
        task: task.task,
    }).catch(err => console.log("🚀 ~ file: fakeTask.js ~ line 18 ~ err", err));
}


const taskdataToDB = async () => {
    const uid = ['01','01','01','02','03','03'];
    for (i = 0; i<6; i++) {
        createTask (uid[i], taskdata[i]);    
    }
}
    // user.getTasks()
    //     .then(res => {
    //         console.log("🚀 ~ file: fakeTask.js ~ line 21 ~ res", res);
    //     })


// const getTaskOfUser = async () => {
//     const user = await User.findOne({ where: { uid: '01' } }).
//         catch(err => console.log("🚀 ~ getTaskOfUser line 27", err));
//     if (!user) return console.log("getTaskOfUser User not found");
//     const task = await user.getTasks().
//         catch(err => console.log("🚀 ~ getTask line 30", err));
//     for (let i = 0; i < task.length; i++) {
//         console.log("🚀 ~ getTaskOfUser line 31 ", task[i].name, " - ");
//     }
// }

module.exports = {
    taskdataToDB
    
};

