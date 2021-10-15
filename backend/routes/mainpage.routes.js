
const express = require('express');
const { findMostPopularTag } = require('../api/tagDbApi');
const { findAllAndSort } = require('../api/taskDbApi');

const router = express.Router();

router.get('/sortby', async (req, res) => {
    try {
        const tasks = await findAllAndSort(req.query.field, req.query.sortby);
        res.json(tasks);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/cloudtags/:amountags', async (req, res) => {
    try {
        req.params.amountags
        const cloudtags = await findMostPopularTag(req.params.amountags);
        res.json(cloudtags);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/', (req, res) => {

})

module.exports = router