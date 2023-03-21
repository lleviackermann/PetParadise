const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/ProfilePages/userProfile.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;