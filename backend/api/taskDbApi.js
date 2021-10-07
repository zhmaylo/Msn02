const Task = require('../models/Task');

// user - field from User, task - task for add to user
const createTask = async (user, task) => {
    // console.log("🚀 createTask - Start  ");
    await user.createTask({
        name: task.name,
        condition: task.condition,
        answer: task.answer,
        rating: task.rating,
        task: task.task,
    }).catch(err => console.err("🚀 createTask() ~ line 11 ~ err  ", err));
    console.log("🚀 createTask - Ok  ");
}



module.exports = {
    createTask,
    
}
