
const express = require('express');
const router = express.Router();


const links = {"hello" : "Hello word"}
// console.log("🚀 ~ file: hello.routes.js ~ line 8 ~ links", links);
router.get('/', (req, res) => {


    console.log("🚀 ~ file: hello.routes.js ~ line 12 ~ json(links)", links);
    // res.send('Hello from A!');
    res.json({"hello" : "Hello word GET"})
})
router.post('/', (req, res) => {

    // console.log("🚀 ~ file: hello.routes.js ~ line 19 ~ json(links)", links);
    // res.send('Hello from B!');
    res.json({"hello" : "Hello word POST"})
})

module.exports = router 