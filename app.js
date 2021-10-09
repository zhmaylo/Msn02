
const express = require('express');
const path = require('path');
const fakeDB = require('./backend/fakedata/fake');


const app = express();

const port = process.env.PORT || 5000;
app.use(express.json({ extended: true }))

app.use('/admin', require('./backend/routes/admin.routes'))
app.use('/login', require('./backend/routes/login.routes'))
app.use('/userpage', require('./backend/routes/userpage.routes'))
app.use('/mainpage', require('./backend/routes/mainpage.routes'))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Server has been started ${port}...`))

//////////////////////////////////////

fakeDB(); 