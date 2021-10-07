
const express = require('express');
const { getuser, gettasks } = require('../api/userDbApi');
const User = require('../models/User');

const router = express.Router();



router.get('/:id', async (req, res) => {
    try {
        // console.log("🚀 ~ file: userpage.routes.js ~ line 13 ~ req.params.id", req.params.id, " ");
        const user = await getuser(req.params.id);
        // console.log("🚀 ~ file: userpage.routes.js ~ line 14 ~ user", user, " ");
        const tasks = await gettasks(user);
        // console.log("🚀 ~ file: userpage.routes.js ~ line 14 ~ tasks", tasks, " ");
        
        res.json(tasks);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/', (req, res) => {

})

module.exports = router