const express = require("express");
const bcrypt = require('bcryptjs')
const router = express.Router();
const User = require("../../../client/Schemas/userSchema");
// var session = require('express-session')
var flush = require('connect-flash')

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/login.ejs", { error: false })
})

// router.use(session({
//     secret: 'secret',
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
// }))

router.use(flush())

const checkPassword = (Password, hashedPassword) => {
    return bcrypt.compareSync(Password, hashedPassword)
}

router.post("/", async function (req, res) {
    let mail = req.body.Email
    let password = req.body.Password
    let matched;
    const users = await User.find({ mailId: mail })
    if (users.length != 0) {
        matched = checkPassword(password, users[0].password)
        if (matched == true) {
            req.session.userMail = mail
            let name = users[0].name.firstName.concat(" ", users[0].name.lastName)
            req.session.userName = name
            console.log(req.session);
            res.render("./HTML/LandingPages/mainLandingPage", { error: true, message: "Login Successfull!", notlogin: false })
        }
        else {
            res.render("./HTML/Authentication/login", { error: true, message: "Incorrect Password!Please try again" })
        }
    }
    else {
        res.render("./HTML/Authentication/login", { error: true, message: "Invalid Mail!Please try again" })
    }
})


module.exports = router;