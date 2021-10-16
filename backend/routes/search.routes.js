
const express = require('express');
const { selectTasks } = require('../api/fts');
const { err } = require('./err');
const router = express.Router();

router.get('/', async (req, res) => {
        try {
                const tasks = await selectTasks(req.query.search);
                res.json(tasks)
        }
        catch (e) { err(); }
})

router.post('/', (req, res) => {

})

module.exports = router