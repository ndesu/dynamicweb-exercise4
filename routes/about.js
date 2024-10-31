const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send("About Me");
})

router.use('/me', (req, res) => {
    res.send("About Me Again");
})

module.exports = router;