
const express = require('express');
const { createUser } = require('../api/userDbApi');
const { err } = require('./err');
const router = express.Router();

router.get('/', async (req, res) => {
})

router.post('/', (req, res) => {
    try {
        const user = { "uid": req.body.user.id, "name": req.body.user.name };
        createUser(user);
    }
    catch (e) { err(); }
})

module.exports = router