
const { Sequelize, Model, DataTypes } = require('sequelize');

// var pg = require('pg');
// pg.defaults.ssl = true;

const sequelize = new Sequelize('postgres://pvazpcuiawfchy:316670cbdb136e8750e2028a2c21ec7a0a47b69b0c40ca531d263de978afcff9@ec2-34-233-187-36.compute-1.amazonaws.com:5432/d3r0um3ob7afh1', {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
})

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return error;
  }
}


module.exports = connectDB;
