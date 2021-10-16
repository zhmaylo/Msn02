
const express = require('express');
const { findMostPopularTag } = require('../api/tagDbApi');
const { findAllTaskAndSort } = require('../api/taskDbApi');
const { err } = require('./err');

const router = express.Router();

router.get('/sortby', async (req, res) => {
    try {
        console.log("🚀 ~ file: mainpage.routes.js ~ line 12 ~ req.query", req.query);
        const tasks = await findAllTaskAndSort(req.query.field, req.query.sortby, req.query.tag);
        res.json(tasks);
    }
    catch (e) { err(); }
})

router.get('/cloudtags/:amountags', async (req, res) => {
    try {
        const cloudtags = await findMostPopularTag(req.params.amountags);
        res.json(cloudtags);
    }
    catch (e) { err(); }
})


router.post('/', (req, res) => {

})

module.exports = router