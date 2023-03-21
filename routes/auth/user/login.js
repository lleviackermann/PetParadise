const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/login.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;