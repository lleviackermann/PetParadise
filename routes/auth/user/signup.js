const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/signup.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;