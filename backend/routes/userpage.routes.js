
const express = require('express');
const { getuser, gettasks } = require('../api/userDbApi');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const user = await getuser(req.params.id);
        const tasks = await gettasks(user);
        res.json(tasks);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/', (req, res) => {

})

module.exports = router