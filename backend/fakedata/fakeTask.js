const taskdata = require('./task.db');
const User = require('../models/User');
const connectDB = require('../api/sequelize.db');

const taskdataToDB = async () => {
    // console.log("🚀 ~ file: fakeTask.js ~ line 3 ~ User", User);
    // const user = await User.findByPk(1)
    await connectDB();
    const user = await User.findOne({ where: { uid: '01' } })
    // console.log("🚀 ~ file: fakeTask.js ~ line 16 ~ taskdata[0]", taskdata[0]);
    
    if (!user) return console.log("User found");
    user.createTask({
        name: taskdata[0].name,
        condition: taskdata[0].condition,
        answer: taskdata[0].answer,
        rating: taskdata[0].rating,
        task: taskdata[0].task,
    }).catch(err => console.log(">>>>>>>>>>",err));
    user.getTask()
    // console.log("🚀 ~ file: fakeTask.js ~ line 19 ~ user.getTask()", user.getTask());

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
        if (!user) return console.log("User not found");
        user.getTask()
            .then(res => {
                for (let i = 0; i < res.length; i++)
                    console.log(res[i].name, " - ", task.name);
            })
            .catch(err => console.log(err));
    }).catch(err => console.log(err));
}

module.exports = taskdataToDB, getTaskOfUser;
