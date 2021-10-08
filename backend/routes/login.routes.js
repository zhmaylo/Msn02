
const express = require('express');
const { createUser } = require('../api/userDbApi');
const router = express.Router();

router.get('/', async (req, res) => {
})

router.post('/', (req, res) => {
    const user = {"uid" : req.body.user.id, "name" : req.body.user.name};
    createUser(user);

})

module.exports = router