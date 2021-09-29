
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json({ extended: true }))

app.use('/api/hello', require('./backend/routes/hello.routes'))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Server has been started ${port}...`))

//////////////////////////////////////

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
  console.log('jane.get=>', jane.get({
    plain: true
  }));
});


