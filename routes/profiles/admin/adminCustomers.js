const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('./HTML/Admin/adminCustomers.ejs', { login: true })
})

module.exports = router;