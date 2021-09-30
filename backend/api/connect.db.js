const { Sequelize } = require('sequelize');

let init = false;
const sequelize = new Sequelize('postgres://vbbsrqygellzpe:07eccfdd58bc10f13835586cc351e18707bbf703b249d74bc014b7fdf4a6c9f7@ec2-54-228-139-34.eu-west-1.compute.amazonaws.com:5432/d7uks2s23lor92', {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
})

sequelizeAuth = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  init = true;
}

connectDB = async () => {
  if (!init) {
    try { await sequelizeAuth() }
    catch (error) { console.error('Unable to connect to the database:', error); }
  }
  return sequelize;
}

connectDB()


module.exports = connectDB;

