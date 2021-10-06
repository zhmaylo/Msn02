const { Sequelize } = require('sequelize');



let init = false;
const sequelize = new Sequelize('postgres://euvnonuaunudgz:f2fa4dd7c2291ab60affc7a8b098d2ec608300dc9b3016e286fa4f76ca9251b4@ec2-52-209-171-51.eu-west-1.compute.amazonaws.com:5432/da62mvrd7s8cpl', {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  logging: true,
})

// sequelizeAuth = async () => {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//   init = true;
// }

// connectDB = async () => {
//   if (!init) {
//     try { await sequelizeAuth() }
//     catch (error) { console.error('Unable to connect to the database:', error); }
//   }
//   return sequelize;
// }

// connectDB();


// module.exports = connectDB;
module.exports = sequelize;

