
const express = require('express');
const { getuser, gettasks } = require('../api/userDbApi');
const { err } = require('./err');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const user = await getuser(req.params.id);
        const tasks = await gettasks(user);
        res.json(tasks);
    }
    catch (e) { err() }
})

router.post('/', (req, res) => {

})

module.exports = router