
const express = require('express');
const path = require('path');

const fillingDB = require('./backend/api/filling.db');
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

// fillingDB(); 