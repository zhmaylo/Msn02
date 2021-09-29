
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json({ extended: true }))

app.use('/api/hello', require('./backend/routes/hello.routes'))


if (process.env.NODE_ENV === 'production') {
  // app.use('/', express.static(path.join(__dirname, '/client/build')))

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

const sequelize = new Sequelize('postgres://skpmliqjohwdhj:9b80490a34186fb63dc5b3fa281399c60526f38461d2215a30e184df2c2673a1@ec2-18-209-143-227.compute-1.amazonaws.com:5432/drbjb5l1n9khe', {
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


