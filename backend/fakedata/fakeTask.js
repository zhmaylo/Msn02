const userCreate = require('../api/userDbApi');
const userdata = require('./user.db');
const taskdata = require('./task.db');
const connectDB = require('../api/connect.db');
const User = require('../models/User');


const taskdataToDB = async () => {

    User.findByPk(1).then(user => {
        if (!company) return console.log("User found");
        console.log("🚀 ~ file: fake.js ~ line 33 ~ User.findByPk ~ company", company)
        user.createTask({
            name: taskdata[0].name,
            condition: taskdata[0].condition,
            answer: taskdata[0].answer,
            rating: taskdata[0].rating,
            task: taskdata[0].task,
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

const getTaskOfUser = async () => {
    User.findByPk(1).then(company => {

        if (!company) return console.log("Company not found");
        company.getProducts()
            .then(res => {
                for (let i = 0; i < res.length; i++)
                    console.log(res[i].name, " - ", company.name);
            })
            .catch(err => console.log(err));
    }).catch(err => console.log(err));
}

module.exports = taskdataToDB;
module.exports = getTaskOfUser;
