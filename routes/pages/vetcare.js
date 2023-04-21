const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/LandingPages/vetcareLandingPage.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;