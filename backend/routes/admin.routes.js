
const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/userlist', async (req, res) => {
    const allUsers = await User.findAll({ raw: true })
    res.json(allUsers)
})

router.post('/admin', (req, res) => {

    // console.log("🚀 ~ file: hello.routes.js ~ line 19 ~ json(links)", links);
    // res.send('Hello from B!');
    // res.json({ "hello": "Hello admin POST" })
})

module.exports = router