
const express = require('express');
const userCreate = require('../api/user.db');
const router = express.Router();



router.get('/', async (req, res) => {
    console.log("🚀 ~ file: login.routes.js ~ line 9 ~ res", res);
    console.log("🚀 ~ file: login.routes.js ~ line 9 ~ req", req);
})

router.post('/', (req, res) => {

    console.log("🚀 ~ file: auth.routes.js ~ line 12 ~ req", req.body);
    const user = {"userid" : req.body.user.id, "username" : req.body.user.name};
    console.log("🚀 ~ file: login.routes.js ~ line 18 ~ user", user);
    userCreate(user);

})

module.exports = router