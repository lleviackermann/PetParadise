const express = require('express');
const counts = require('../../../models/counts');
const router = express.Router();

router.get('/', async (req, res) => {
    const count = await counts.findOne({ countId: "message" });
    console.log(count);
    res.render('./HTML/Admin/adminDashboard.ejs', { login: true, count: count });
})

module.exports = router;