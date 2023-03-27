const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    let userName = req.session.userName
    let userMail = req.session.userMail
    res.render("./HTML/ProfilePages/userProfile.ejs", { userName, userMail })
})

router.post("/", (req, res) => {

})

module.exports = router;