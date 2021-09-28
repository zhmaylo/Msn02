
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json({ extended: true }))

// app.use('/api/hello', require('./routes/hello.routes'))
app.use('/api/hello', require('./routes/hello.routes'))

if (process.env.NODE_ENV === 'production') {
  // app.use('/', express.static(path.join(__dirname, './client/build')))
  app.use('/', express.static(path.join(__dirname, '../client/build')))
}

app.listen(port, () => console.log(`Server has been started ${port}...`))

//////////////////////////////////////

const { Sequelize, Model, DataTypes } = require('sequelize');

// var pg = require('pg');
// pg.defaults.ssl = true;

const sequelize = new Sequelize('postgres://pbudoavnztjvzr:2ec32aa5541e3b8eeccca965f7dfeb4c6acd38bf791e76adb4468c4ea9ad8767@ec2-34-255-134-200.eu-west-1.compute.amazonaws.com:5432/d3epo9svq2fnvd', {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
})

const r = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
r();


class User extends Model { }
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync().then(function () {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function (jane) {
  console.log('jane.get=>',jane.get({
    plain: true
  }));
});


