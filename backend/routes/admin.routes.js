
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { err } = require('./err');


router.get('/userlist', async (req, res) => {
    try {
        const allUsers = await User.findAll({ raw: true })
        res.json(allUsers)
    }
    catch (e) { err(); }
})

router.post('/admin', (req, res) => {

})

module.exports = router