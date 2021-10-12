
const express = require('express');
const { selectTasks } = require('../api/fts');
const { createUser } = require('../api/userDbApi');
const router = express.Router();

router.get('/', async (req, res) => {

        // console.log("🚀 ~ file: search.routes.js ~ line 7 ~ req", req.query.search, " ");
        const tasks = await selectTasks( req.query.search);
        // console.log("🚀 ~ file: search.routes.js ~ line 12 ~ json(tasks)", tasks);
        res.json(tasks)
        
})

router.post('/', (req, res) => {

})

module.exports = router