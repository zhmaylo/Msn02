
const express = require('express');

const router = express.Router();

router.get('/sortby"', async (req, res) => {
    console.log("🚀 ~ file: mainpage.routes.js ~ line 7 ~ router.get ~ req", req)

    try {
        const tasks = await findAllAndSort('createdAt', 'DESC');
        res.json(tasks);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

// router.get('/sortbyrating', async (req, res) => {
//     try {
//         const tasks = await findAllAndSort('rating', 'DESC');
//         res.json(tasks);
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// })

router.post('/', (req, res) => {

})

module.exports = router